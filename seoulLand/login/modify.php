<?
	session_start();
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
?>
<meta charset="utf-8">
<?
   $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장

   include "../lib/dbconn.php";    

   $sql = "update memberForm set pass=password('$pass'), ";
   $sql .= "hp='$hp', regist_day='$regist_day' where id='$userid'";

   mysql_query($sql, $connect);  
   $_SESSION['username'] = $name;
    
   mysql_close();               
   echo "
	   <script>
	     window.alert('회원정보가 수정되었습니다.');
	    location.href = '../index.html';
	   </script>
	";
?>

   
