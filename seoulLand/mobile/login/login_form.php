<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  

    // 세션변수 4개가 넘어옴 $userid, $username, $usernick, $userlevel
?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>로그인</title>
    <link href="../css/common.css" rel="stylesheet">
    <link href="css/login.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Sans+KR:wght@300;400;700;900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/58ed643491.js" crossorigin="anonymous"></script>
    <script src="../js/jquery-1.12.4.min.js"></script>
	<script src="../js/jquery-migrate-1.4.1.min.js"></script>
    <script>
        $(document).ready(function(){
            $('#eye').toggle(function(){
                 $(this).find('.fa-eye').attr('class', 'fas fa-eye-slash');
                 $('#pass').attr('type','text');
                  $('#eye').attr('title','비밀번호 숨기기');
             }, function(){
                 $(this).find('.fa-eye-slash').attr('class', 'fas fa-eye');
                 $('#pass').attr('type','password');
                  $('#eye').attr('title','비밀번호 표시');
             });
        })
    </script>
</head>
<body>
    <div id="wrap">
 
 

 
  <div id="content">
	
      <a href="../index.html" class="logo">로고</a>
       <a href="../index.html" class="home">HOME</a>
       
        <form  name="member_form" method="post" action="login.php"> 
		<h2>LOGIN</h2>
      
      <img class="bk" src="images/bk.png" alt="">
       <p class="des">로그인을 통해 서울랜드의<br> 다양한 서비스를 이용해보세요!</p>
       
		<div id="login_form">
		      <ul>
                    <li><input type="text" name="id" class="login_input" placeholder="아이디를 입력하세요"></li>
                    <li><input type="password" id="pass" name="pass" class="login_input" placeholder="패스워드를 입력하세요"><a href="#none" title="비밀번호 표시" id="eye"><i class="fas fa-eye"></i></a></li>
                    <li><input type="submit" value="로그인" class="login_btn"></li>
                    <li><span>아직 서울랜드 회원이 아니라면?</span> <a href="../member/join.html" class="join_btn">회원가입</a></li>
                   
				</ul>						
		 
		</div> <!-- end of form_login -->

	    </form>
  </div> <!-- end of content -->
</div> <!-- end of wrap -->
</body>
</html>