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
    <title>회원정보수정 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
</head>
<?    
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);
    $row = mysql_fetch_array($result);
    mysql_close();
?>

<body>
    <div id="form-wrapper">
        <h1 class="logo-form"><a href="../index.html">서울랜드 로고</a></h1>
        <article id="form-cont-wrap">
            <h2 class="page-title">회원정보수정</h2>
            <div class="page-cont">
            <form name="member_form" method="post" action="modify.php">
                <ul class="modify-list">
                    <li>
                        <label for="id">아이디</label>
                        <input type="text" name="id" id="id" value="<?= $row[id] ?>" required readonly>
                    </li>
                    <li>
                        <label for="pass">비밀번호</label>
                        <input type="password" name="pass" id="pass" value="" required>
                    </li>
                    <li>
                        <label for="pass">비밀번호 확인</label>
                        <input type="password" name="pass_confirm" id="pass_confirm" value="" onkeyup="passCheck()"
                            required>
                        <button class="btn-lock">
                            <ion-icon name="lock-open-outline"></ion-icon>
                        </button>
                    </li>
                    <li>
                        <label for="name">이름</label>
                        <input type="text" name="name" id="name" value="<?= $row[name] ?>" required readonly>
                    </li>
                    <li>
                        <label for="hp">핸드폰번호</label>
                        <input type="text" id="hp" name="hp" value="<?= $hp ?>">
                    </li>
                </ul>
                <button class="btn-modify" type="button">정보수정</button>
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