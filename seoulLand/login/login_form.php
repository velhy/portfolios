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
    <title>로그인 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
</head>

<body>

    <div id="form-wrapper">
        <h1 class="logo-form"><a href="../index.html">서울랜드 로고</a></h1>
        <article id="form-cont-wrap">
            <h2 class="page-title">로그인</h2>
            <div class="page-cont">
                <form name="member_form" method="post" action="login.php" id="loginForm">
                    <ul>
                        <li><input type="text" name="id" placeholder="아이디를 입력하세요"></li>
                        <li>
                            <input type="password" id="pass" name="pass" placeholder="비밀번호를 입력하세요">
                            <button class="btn-lock">
                                <ion-icon name="lock-open-outline"></ion-icon>
                            </button>
                        </li>
                    </ul>
                    <button type="button" class="btn-login">로그인</button>
                    <div class="btn-wrap">
                        <a href="../member/member_form.php">회원가입</a>
                        <a href="idfind_form.php">아이디 찾기</a>
                        <a href="passfind_form.php">비밀번호 찾기</a>
                    </div>
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