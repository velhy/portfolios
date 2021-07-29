<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>공지/이벤트 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
</head>

<?
	include "../lib/dbconn.php";
    
   if (!$scale) $scale=6;			// 한 화면에 표시되는 글 수

    if ($mode=="search") {
      if(!$search)
      {
        echo("
          <script>
          window.alert('검색할 단어를 입력해 주세요!');
            history.go(-1);
          </script>
        ");
        exit;
      }

		  $sql = "select * from $table where $find like '%$search%' order by num desc";
	  }
	else {
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);
	$total_record = mysql_num_rows($result); // 전체 글 수

	if ($total_record % $scale == 0) $total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 
		$page = 1;             
 
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
<body>

<? include "../common/sub_head.html" ?>
<? include "../common/sub-service.html" ?>

<article id="sub-cont-wrap">
  <h2 class="page-title">공지/이벤트</h2>
  <div class="page-cont">
    <div class="inner">
      <form name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search" id="searchForm">
        <select name="scale" onchange="location.href='list.php?scale='+this.value">
          <option value=''>보기</option>
          <option value='3'>3개씩</option>
          <option value='6'>6개씩</option>
          <option value='9'>9개씩</option>
          <option value='12'>12개씩</option>
        </select>
        
        <div class="search-wrap">
          <select name="find">
            <option value='subject'>제목</option>
            <option value='content'>내용</option>
            <option value='name'>이름</option>
          </select>
          <input type="text" name="search" placeholder="검색할 내용을 입력하세요">
          <button type="submit" class="btn-search"><ion-icon name="search-outline"></ion-icon></button>
        </div>
      </form>
      <!-- 갤러리형 -->
      <div class="board-cont">
        <div class="board-list flex col3">

        <?		
      for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
       {
      mysql_data_seek($result, $i);       
      $row = mysql_fetch_array($result);       
	
      $item_num     = $row[num];
      $item_id      = $row[id];
      $item_name    = $row[name];
      $item_hit     = $row[hit];
      $item_date    = $row[regist_day];
      $item_date = substr($item_date, 0, 10);  
      $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
      $item_content = mb_substr($row[content], 0, 150, 'utf-8')."..";
      $item_content2 = str_replace(" ", "&nbsp;", $item_content); 
      $item_content2 = str_replace("&lt;", "<", $item_content);
      $item_content2 = str_replace("&gt;", ">", $item_content);
       
      ?>
        <a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">
          <p class="tit-sm"><?= $item_subject ?></p>
          <p class="txt-md"><?= $item_content2 ?></p>
          <p class="txt-sm"><?= $item_date ?></p>
          <span class="btn-circle-more">
            <span class="hidden">자세히 보기</span>
            <ion-icon name="add-outline"></ion-icon>
          </span>
        </a>
        <?
   	   $number--;
        }
      ?>

       </div>
        <div class="page-wrap">
          <div class="page-num">
            <?
        for ($i=1; $i<=$total_page; $i++)
        {
          if ($page == $i)     // 현재 페이지 번호 링크 안함
          {
            echo "<span class='active'> $i </span>";
          }
          else
          { 
           if($mode=="search"){
             echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'><span> $i </span> </a>"; 
            }else{    
            
			  echo "<a href='list.php?page=$i&scale=$scale'><span> $i </span></a>";
           }
		}      
   }	
?>
          </div>
          <div class="notice-btn-wrap">
            <a href="list.php?page=1">목록</a>&nbsp;

            <? 
            if($userid)
            {
          ?>
            <a href="write_form.php?table=<?=$table?>">글쓰기</a>
            <?
            }
          ?>
          </div>
        </div> <!-- end of page_button -->
      </div> <!-- end of list content -->

    </div>
  </div>
</article>
</div>

  <? include "../common/sub_foot.html" ?>
  
</body>
</html>
