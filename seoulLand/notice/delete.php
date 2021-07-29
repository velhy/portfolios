<?
   session_start();
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   //$table, $num , 세션변수

   include "../lib/dbconn.php";

   $sql = "select * from $table where num = $num";
   $result = mysql_query($sql, $connect);
   $row = mysql_fetch_array($result);

   $copied_name[0] = $row[file_copied_0];
   $copied_name[1] = $row[file_copied_1];
   $copied_name[2] = $row[file_copied_2];

   for ($i=0; $i<3; $i++)  //업로든된 파일을 실제로 삭제해야함   sql에서 delete는 레코드를 지우는 것뿐임 data 폴더 안에 있는 실제 이미지는 delete는 사라지지 않음 
   {
		if ($copied_name[$i])
	   {
			$image_name = "./data/".$copied_name[$i];
			unlink($image_name);
            //unlink(업드로든 파일경로 파일명); => 파일삭제
	   }
   }

   $sql = "delete from $table where num = $num";
   mysql_query($sql, $connect);

   mysql_close();

   echo "
	   <script>
	    location.href = 'list.php?table=$table';
	   </script>
	";
?>

