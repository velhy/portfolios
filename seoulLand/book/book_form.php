<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>예매/예약 | 서울랜드</title>
  <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="../common/css/style.css">
  <script>
    function book_check() {
        <?
        if (!$userid) {
            ?>

            alert('로그인 후 이용해주세요.');
            location.href = "../login/login_form.php";

            <?
        } else {
            ?>

            if (document.book_form.count1.value == 0 && document.book_form.count2.value == 0 && document.book_form.count3.value == 0) {
                alert("예매 매수를 선택하세요");
                return;
            }

            let conf = confirm("선택한 내용으로 결제를 진행하시겠습니까?");
            if (conf == 1) {
                <?
                include "../lib/dbconn.php"; //DB 접속

                $sql = "select * from book where id='$userid'"; 
                $result = mysql_query($sql, $connect); 
                $num_match = mysql_num_rows($result); 

                if ($num_match) {
                    ?>
                    alert('이미 결제하신 내역이 존재합니다. 예매내역 페이지로 이동합니다.');
                    location.href = "book_confirm.php";
                    return;
                    <?
                } else if (!$num_match) {
                    ?>
                    document.book_form.submit();
                    alert("결제가 완료되었습니다. 예매내역 페이지로 이동합니다.");
                    <?
                } ?>

            } else {
                alert("취소되었습니다.")
            }
            <?
        } 
        ?>
    }
  </script>
</head>

<body>

  <? include "../common/sub_head.html" ?>
  <? include "../common/sub-book.html" ?>

  <article id="sub-cont-wrap">
    <h2 class="page-title">예매/예약</h2>
    <div class="page-cont">
      <div class="inner">
        <form name="book_form" method="post" action="insert.php" id="bookForm">
          <div class="visit-wrap">
            <p class="tit">01. 방문일자</p>
            <p class="txt">* 서울랜드를 방문하실 날짜를 선택해주세요</p>
            <label class="hidden" for="date">방문일자</label>
            <input type="date" name="date" id="date">
          </div>
          <div class="age-wrap">
            <p class="tit">02. 인원선택</p>
            <p class="txt">* 예매하실 인원을 선택해주세요</p>
            <ul class="age age1 float-left flex">
                <li>
                  <label for="fare1" class="tit-sm">어른</label>
                  <input type="number" id="fare1" name="fare1" value="46000">
                </li>
                <li class="two">
                  <label for="count1" class="hidden">매수</label>
                  <input type="number" id="count1" name="count1" value="0" readOnly>
                  <button type="button" class="m"><ion-icon name="remove-outline"></ion-icon></button>
                  <button type="button" class="p"><ion-icon name="add-outline"></ion-icon></button>
                </li>
                <li>
                  <label for="cfare1">합계</label>
                  <input type="number" id="cfare1" name="cfare1" value="0">
                </li>
              </ul>
              <ul class="age age2 float-left flex">
                <li>
                  <label for="fare2" class="tit-sm">청소년 </label>
                  <input type="number" id="fare2" name="fare2" value="43000">
                </li>
                <li class="two">
                  <label for="count2" class="hidden">매수</label>
                  <input type="number" id="count2" name="count2" value="0" readOnly>
                  <button type="button" class="m"><ion-icon name="remove-outline"></ion-icon></button>
                  <button type="button" class="p"><ion-icon name="add-outline"></ion-icon></button>
                </li>
                <li>
                  <label for="cfare2">합계</label>
                  <input type="number" id="cfare2" name="cfare2" class="p" value="0">
                </li>
              </ul>
              <ul class="age age3 float-right flex">
                <li>
                  <label for="fare3" class="tit-sm">어린이</label>
                  <input type="number" id="fare3" name="fare3" value="40000">
                </li>
                <li class="two">
                  <label for="count3" class="hidden">매수</label>
                  <input type="number" id="count3" name="count3" value="0" readOnly>
                  <button type="button" class="m"><ion-icon name="remove-outline"></ion-icon></button>
                  <button type="button" class="p"><ion-icon name="add-outline"></ion-icon></button>
                </li>
                <li>
                  <label for="cfare3">합계</label>
                  <input type="number" id="cfare3" name="cfare3" value="0">
                </li>
              </ul>
          </div>

          <div class="total-wrap">
            <p></p>
            <p></p>
            <p></p>
            <div class="total-fare">
            <label for="total" class="tit-sm">총 결제금액</label>
            <input type="number" id="total" name="total" value="0" readOnly> 원
            </div>
          </div>

          <div class="pay-wrap">
            <p class="tit">03. 결제수단</p>
            <p class="txt">* 결제 수단을 선택해주세요</p>
            <ul class="flex col4">
              <li>
                <img src="../common/img/sub-pay-01.png" alt="">
                <label for="pay1" class="tit-sm">신용카드</label>
                <input type="radio" id="pay1" name="pay" value="신용카드" checked>
              </li>
              <li>
                <img src="../common/img/sub-pay-02.png" alt="">
                <label for="pay2" class="tit-sm">무통장입금</label>
                <input type="radio" id="pay2" name="pay" value="무통장입금"></li>
              <li>
                <img src="../common/img/sub-pay-03.png" alt="">
                <label for="pay3" class="tit-sm">계좌이체</label>
                <input type="radio" id="pay3" name="pay" value="계좌이체"></li>
              <li>
                <img src="../common/img/sub-pay-04.png" alt="">
                <label for="pay4" class="tit-sm"> 휴대폰결제</label>
                <input type="radio" id="pay4" name="pay" value="휴대폰결제"></li>
            </ul>
          </div>
          <button type="button" class="btn-book">예매</button>
        </form>
      </div>
    </div>

  </article>
  </div>

  <? include "../common/sub_foot.html" ?>
  <script src="../common/js/book.js"></script>

</body>

</html>