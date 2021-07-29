<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);
    $row = mysql_fetch_array($result);       
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
	$item_hit     = $row[hit];
	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];
	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];
    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}

	if ($is_html=="y")
		{
	$item_content = str_replace("&lt;", "<", $item_content);
		$item_content = str_replace("&gt;", ">", $item_content);
	}


// 0~2 첨부된 이미지 파일 처리를 위한 반복문 (최대 너비를 지정하기 위함 / 게시판의 너비보다 크지 않도록)
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //업로드한 파일이 존재하면 0 1 2
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			$image_width[$i] = $imageinfo[0];  //파일너비
			$image_height[$i] = $imageinfo[1]; //파일높이
			$image_type[$i]  = $imageinfo[2];  //파일종류 (jpg/png/gif 등)

            if ($image_width[$i] > 785)
				$image_width[$i] = 785;   // ** 게시판의 폭보다 넓을 때만 게시판 너비로 바꿔주기 (최대 폭 너비를 지정)
		}
		else    // 업로드된 이미지가 없으면
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;
	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>공지/이벤트 | 서울랜드</title>
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../common/css/style.css">
	<script>
		function del(href) {
			if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
				document.location.href = href;
			}
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
 			<div class="notice-info-wrap flex">
 				<p class="tit-sm"><?= $item_subject ?></p>
 				<div class="notice-info flex">
 					<p class="txt-sm">
 						<?= $item_name ?>
 					</p>
 					<p class="txt-sm">
 						<?= $item_date ?>
 					</p>
 				</div>
 			</div>
 			<div class="notice-cont-wrap">
 				<?
				for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
				{
					if ($image_copied[$i])
					{
						$img_name = $image_copied[$i];
						$img_name = "./data/".$img_name; 
						$img_width = $image_width[$i];
						
						echo "<img src='$img_name' width='$img_width' alt=''>"."<br>";
						// css로 처리가 불가능 $img_width로 처리하기 때문에 / w3c에서 에러나도 그냥 넘어가라
					}
				}
				?>
 				<?= $item_content ?>
			 </div>
			 
			 <div class="notice-btn-wrap">
				<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
				<? 
						if($userid)  //로그인이 되면 글쓰기
						{
					?>
					<a href="write_form.php?table=<?=$table?>">글쓰기</a>
					<?
						}
					?>
			 </div>

 			<div class="notice-manage-wrap">
 				<? 
					if($userid==$item_id || $userlevel==1 || $userid=="manager")   // 본인(세션변수 아이디와 지금 num에 해당하는 아이디가 같은지 비교해서 알아냄) 과 관리자만 가능   
					{
				?>
 				<a href="modify_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a>
 				<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>
 				<?
					}
				?>
 			</div>
 		</div>
 	</div>
 </article>
 </div>
<? include "../common/sub_foot.html" ?>
    
</body>
</html>