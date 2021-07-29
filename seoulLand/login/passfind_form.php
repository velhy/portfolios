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
    <title>비밀번호 찾기 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
</head>

<body>
    <div id="form-wrapper">
        <h1 class="logo logo-form"><a href="../index.html">서울랜드 로고</a></h1>
        <article id="form-cont-wrap">
            <h2 class="page-title">비밀번호 찾기</h2>
            <div class="page-cont">
                <form name="passfind_form" method="post" action="passfind.php">
                    <ul>
                        <li>
                            <label for="id" class="hidden">아이디</label>
                            <input type="text" id="id" name="id" placeholder="아이디를 입력하세요">
                        </li>
                        <li>
                            <label for="name" class="hidden">이름</label>
                            <input type="text" id="name" name="name" placeholder="이름를 입력하세요">
                        </li>
                        <li>
                            <label class="hidden" for="hp">핸드폰번호</label>
                            <input type="text" id="hp" name="hp" placeholder="핸드폰번호를 입력하세요">
                        </li>
                    </ul>
                    <button type="button" class="btn-find-pass">
                        <ion-icon name="search-outline"></ion-icon> 비밀번호 찾기
                    </button>
                    <div id="loadtext"></div>
                </form>
            </div>
        </article>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script src="../common/js/lib/jquery-1.12.4.min.js"></script>
    <script src="../common/js/lib/jquery-migrate-1.4.1.min.js"></script>
    <script src="../common/js/form.js"></script>
</body>

</html>