<? 
	session_start(); 
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>회원가입 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
</head>

<body>

    <div id="form-wrapper">
        <h1 class="logo logo-form"><a href="../index.html">서울랜드 로고</a></h1>
        <article id="form-cont-wrap">
            <h2 class="page-title">회원가입</h2>
            <div class="page-cont">
                <form name="member_form" method="post" action="insert.php" id="memberForm">
                    <ul>
                        <li>
                            <label for="id" class="hidden">아이디</label>
                            <input type="text" name="id" id="id" placeholder="아이디">
                            <span id="loadId"></span>
                        </li>
                        <li>
                            <label for="pass" class="hidden">비밀번호</label>
                            <input type="password" name="pass" id="pass" placeholder="비밀번호">
                        </li>
                        <li>
                            <label for="pass_confirm" class="hidden">비밀번호확인</label>
                            <input type="password" name="pass_confirm" id="pass_confirm" placeholder="비밀번호 확인">
                            <button class="btn-lock">
                                <ion-icon name="lock-open-outline"></ion-icon>
                            </button>
                        </li>
                        <li>
                            <label for="name" class="hidden">이름</label>
                            <input type="text" name="name" id="name" placeholder="이름">
                        </li>
                        <li>
                            <label class="hidden" for="hp">핸드폰번호</label>
                            <input type="text" class="hp" name="hp" id="hp" placeholder="핸드폰 번호">
                        </li>
                    </ul>
                    <button type="button" class="btn-join">회원가입</button>
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