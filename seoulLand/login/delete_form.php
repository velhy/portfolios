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
	<title>회원탈퇴 | 서울랜드</title>
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../common/css/style.css">
</head>

<body>

	<div id="form-wrapper">
		<h1 class="logo logo-form"><a href="../index.html">서울랜드 로고</a></h1>
		<article id="form-cont-wrap">
			<h2 class="page-title">회원탈퇴</h2>
			<div class="page-cont">
				<form name="member_form" method="post" action="delete.php">
					<div class="delete">
						<label for="pass" class="hidden">비밀번호</label>
						<input type="password" id="pass" name="pass" placeholder="비밀번호를 입력하세요">
					</div>
					<button type="submit" class="btn-delete">회원탈퇴</button>
				</form>
			</div>
		</article>
	</div>

</body>

</html>