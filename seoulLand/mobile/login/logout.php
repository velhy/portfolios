<?
  session_start();
  unset($_SESSION['userid']);
  unset($_SESSION['username']);
  unset($_SESSION['usernick']);
  unset($_SESSION['userlevel']);

// 로그아웃 -> 세션 변수 제거
?>
  <meta charset="UTF-8">
  <?
  echo("
       <script>
       alert('로그아웃되었습니다');
          location.href = '../index.html'; 
         </script>
       ");
?>
