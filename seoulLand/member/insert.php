<meta charset="utf-8">
<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

   $regist_day = date("Y-m-d (H:i)"); 
   $ip = $REMOTE_ADDR;        

   include "../lib/dbconn.php";     

   $sql = "select * from memberForm where id='$id'";
   $result = mysql_query($sql, $connect);
   $exist_id = mysql_num_rows($result);

   if($exist_id) {
     echo("
           <script>
             window.alert('해당 아이디가 존재합니다.');
             history.go(-1);
           </script>
         ");
         exit;
   }
   else
   {            
	    $sql = "insert into memberForm(id, pass, name, hp, regist_day, level) values('$id', password('$pass'), '$name', '$hp', '$regist_day', 9)";
       mysql_query($sql, $connect); 
   }

   mysql_close();               
   echo "
	   <script>
		  alert('회원가입이 완료되었습니다.');
	    location.href = '../login/login_form.php';
	   </script>
	";
?>

   
   
   
   
   
   
   
