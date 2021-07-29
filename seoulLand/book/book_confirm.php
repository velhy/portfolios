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
    <title>예매내역 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
</head>

<body>

    <? include "../common/sub_head.html" ?>
    <? include "../common/sub-book.html" ?>

    <article id="sub-cont-wrap">
        <h2 class="page-title">예매내역 확인</h2>
        <div class="page-cont">
            <div class="inner">
                <form name="book_confirm" method="post" action="book1.php" id="bookConfirm">
                    <p class="txt-md">예매내역 확인을 위해 비밀번호를 한 번 더 입력해주세요.</p>
                    <div class="book-confirm">
                        <label for="pass" class="hidden">비밀번호</label>
                        <input type="password" id="pass" name="pass" placeholder="비밀번호를 입력하세요">
                        <button class="btn-lock">
                            <ion-icon name="lock-open-outline"></ion-icon>
                        </button>
                    </div>
                    <button class="btn-confirm">예매내역 확인</button>
                </form>
            </div>
        </div>
    </article>
    </div>

    <? include "../common/sub_foot.html" ?>
    <script src="../common/js/form.js"></script>
</body>

</html>