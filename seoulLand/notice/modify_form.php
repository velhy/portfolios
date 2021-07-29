<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	if ($mode=="modify") 
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);
		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];
		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];
		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>공지/이벤트 | 서울랜드</title>
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../common/css/style.css">

	<script>
		function check_input() {
			if (!document.board_form.subject.value) {
				alert("제목을 입력하세요!");
				document.board_form.subject.focus();
				return;
			}

			if (!document.board_form.content.value) {
				alert("내용을 입력하세요!");
				document.board_form.content.focus();
				return;
			}
			document.board_form.submit();
		}
	</script>
</head>

<body>

<? include "../common/sub_head.html" ?>
<? include "../common/sub-service.html" ?>

<article id="sub-cont-wrap">
	<h2 class="page-title">공지/이벤트</h2>
	<div class="page-cont">
		<div class="inner">
			<form name="board_form" method="post"
				action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>"
				enctype="multipart/form-data">
				<ul class="write-list flex">
                    <li>이름</li>
                    <li><?=$username?></li>
                    <li>제목</li>
                    <li><input type="text" name="subject" value="<?=$item_subject?>"></li>
                    <li>내용</li>
                    <li><textarea name="content"><?=$item_content?></textarea></li>
                    <li>이미지파일1</li>
					<li>
						<input type="file" name="upfile[]">
						<? 	if ($item_file_0)
						{
						?>
						<?=$item_file_0?> 파일이 등록되어 있습니다.
						<input type="checkbox" name="del_file[]" value="0">
							삭제
						<?
							}
						?>
					</li>
                    <li>이미지파일2</li>
					<li>
						<input type="file" name="upfile[]">
						<? 	if ($item_file_1)
						{
						?>
						<?=$item_file_1?> 파일이 등록되어 있습니다.
						<input type="checkbox" name="del_file[]" value="1">
							삭제
						<?
						}
						?>
					</li>
                    <li>이미지파일3</li>
					<li>
						<input type="file" name="upfile[]">
						<? 	if ($item_file_2)
						{
						?>
						<?=$item_file_2?> 파일이 등록되어 있습니다.
						<input type="checkbox" name="del_file[]" value="2">
							삭제</>
						<?
						}
						?>
					</li>
                </ul>
 				<div class="notice-btn-wrap">
					<input type="button" value="수정" onclick="check_input()">
					<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
				</div>
			</form>
		</div>
	</div>
</article>
</div>

<? include "../common/sub_foot.html" ?>

</body>
</html>

