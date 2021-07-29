<?
    session_start();
?>
<meta charset="utf-8">
<?
   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION);  

   if(!$id) {   
     echo("
           <script>
             window.alert('아이디를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!$pass) {  
     echo("
           <script>
             window.alert('비밀번호를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   include "../lib/dbconn.php";   //DB 접속

   $sql = "select * from memberForm where id='$id'";   
   $result = mysql_query($sql, $connect); 
   $num_match = mysql_num_rows($result); 

   if(!$num_match)  
   {
     echo("
           <script>
             window.alert('등록되지 않은 아이디입니다.');
             history.go(-1);
           </script>
         ");
    }
    else    
    {
		  $row = mysql_fetch_array($result); 
      $sql ="select * from memberForm where id='$id' and pass=password('$pass')";
      $result = mysql_query($sql, $connect);
      $num_match = mysql_num_rows($result);
     
        if(!$num_match) 
        {
           echo("
              <script>
                window.alert('비밀번호가 틀립니다.');
                history.go(-1);
              </script>
           ");
           exit;
        }
        else   
        {
           $userid = $row[id];
		       $username = $row[name];
		       $userlevel = $row[level];
            // 로그인된 상태에서 보여질 부분들 변수 만들어서 담아두기
            // 세션 -> 로그인된 상태 살아있도록
           // 필요한 세션변수를 생성 -> 세션변수에 id~level 값을 저장한다(로그인상태)
           $_SESSION['userid'] = $userid;//$_SESSION['userid'] = $row[id];
           $_SESSION['username'] = $username;//$_SESSION['username'] = $row[name];
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
