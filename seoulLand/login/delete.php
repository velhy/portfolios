<?
    session_start();
?>
<meta charset="utf-8">
<?
   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION);  

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


   $sql = "select * from memberForm where id='$userid' and pass=password('$pass')";   // 중복되지 않는 프라이머리 키(id)로 레코드 찾기
   $result = mysql_query($sql, $connect);  // 있으면 1, 없으면 NULL
   $num_match = mysql_num_rows($result);  //1 0

   if(!$num_match)  // 아이디 검색 결과가 없음
   {
     echo("
           <script>
             window.alert('비밀번호가 일치하지 않습니다.');
             history.go(-1);
           </script>
         ");
    }
    else    // 아이디 검색 결과가 있으면
    {
          $sql = "delete from memberForm where id='$userid' and pass=password('$pass')";
          $result = mysql_query($sql, $connect);
          unset($_SESSION['userid']);
          unset($_SESSION['username']);
          unset($_SESSION['usernick']);
          unset($_SESSION['userlevel']);
        
         ?>
          
           <script>
             alert('회원탈퇴가 완료되었습니다. 그동안 서울랜드를 이용해주셔서 감사합니다.');
            location.href='../index.html';
           </script>
         
         <?   
        }
             
?>