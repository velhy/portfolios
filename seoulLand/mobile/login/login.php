<?
    session_start();
?>
<meta charset="utf-8">
<?
   @extract($_GET); 
  @extract($_POST); 
   @extract($_SESSION);  
   // 이전화면에서 이름이 입력되지 않았으면 "이름을 입력하세요"
   // 메시지 출력
   // $id=>입력id값    $pass=>입력 pass값이 POST 방식으로 넘어옴! 
   
  

   if(!$id) {   //아이디 NULL값 체크
     echo("
           <script>
             window.alert('아이디를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!$pass) {  //패스워드 NULL값 체크 
     echo("
           <script>
             window.alert('비밀번호를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

 

   include "../../lib/dbconn.php";   //DB 접속

   $sql = "select * from member where id='$id'";   // 중복되지 않는 프라이머리 키(id)로 레코드 찾기
   $result = mysql_query($sql, $connect);  // 있으면 1, 없으면 NULL

   $num_match = mysql_num_rows($result);  //1 0

   if(!$num_match)  // 아이디 검색 결과가 없음
   {
     echo("
           <script>
             window.alert('등록되지 않은 아이디입니다.');
             history.go(-1);
           </script>
         ");
    }
    else    // 아이디 검색 결과가 있으면
    {
		 $row = mysql_fetch_array($result); 
          //$row[id] ,.... $row[level]
         $sql ="select * from member where id='$id' and pass=password('$pass')";
        // 암호화된 패스워드를 원래 패스워드로 변환하는 함수는 없음
        // 따라서, 패스워드 입력값을 암호화한 값과 실제 암호화된 패스워드가 같은지 확인하는 방법 사용!!
        
        
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result);
     
  

        if(!$num_match)  //적은 패스워드와 디비 패스워드가 같지않을때
        {
           echo("
              <script>
                window.alert('비밀번호가 틀립니다.');
                history.go(-1);
              </script>
           ");

           exit;
        }
        else    // 아이디와 패스워드가 모두 일치한다면..
        {
           $userid = $row[id];
		   $username = $row[name];
		   $usernick = $row[nick];
		   $userlevel = $row[level];
            // 로그인된 상태에서 보여질 부분들 변수 만들어서 담아두기
            // 세션 -> 로그인된 상태 살아있도록
            
            
           // 필요한 세션변수를 생성 -> 세션변수에 id~level 값을 저장한다(로그인상태)
           $_SESSION['userid'] = $userid;//$_SESSION['userid'] = $row[id];
           $_SESSION['username'] = $username;//$_SESSION['username'] = $row[name];
           $_SESSION['usernick'] = $usernick;//$_SESSION['usernick'] = $row[nick];
           $_SESSION['userlevel'] = $userlevel;//$_SESSION['userlevel'] = $row[level];

           echo("
              <script>
			    alert('로그인이 되었습니다.');
                location.href = '../index.html';
              </script>
           ");
        }
   }          
?>
