<? 
	session_start(); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>회원가입</title>
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="css/member_form.css">
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Sans+KR:wght@300;400;700;900&display=swap" rel="stylesheet">
	
	<script src="../js/jquery-1.12.4.min.js"></script>
	<script src="../js/jquery-migrate-1.4.1.min.js"></script>
	<script src="https://kit.fontawesome.com/58ed643491.js" crossorigin="anonymous"></script>
	
	<script>
	 $(document).ready(function() {
  
   
 
         //id 중복검사 -> script는 id값으로 핸들링!!
         $("#id").keyup(function() {    // id입력 상자에 id값 입력시
            var id = $('#id').val(); // val() 메소드 : 값 가지고 오기 'aaa'

            $.ajax({
                type: "POST",
                url: "check_id.php",
                data: "id="+ id,   // ?id=값 과 똑같음
                cache: false,  // cache : 기록 남기는것 -> 느려지므로 false
                success: function(data)
                {
                     $("#loadtext").html(data);    // check_id.php 에서 데이터가 넘어옴 (echo '문자열'을 사용했을 때 실시간으로 문자열이 그대로 넘어옴!!)
                }
            });
        });

        //nick 중복검사		 
        $("#nick").keyup(function() {    // id입력 상자에 id값 입력시
            var nick = $('#nick').val();

            $.ajax({
                type: "POST",
                url: "check_nick.php",
                data: "nick="+ nick,  
                cache: false, 
                success: function(data)
                {
                     $("#loadtext2").html(data);
                }
            });
        });		
         
         
         
         $('#eye').toggle(function(){
             $(this).find('.fa-eye').attr('class', 'fas fa-eye-slash');
             $('#pass').attr('type','text');
              $('#eye').attr('title','비밀번호 숨기기');
             $('#pass_confirm').attr('type','text');
         }, function(){
             $(this).find('.fa-eye-slash').attr('class', 'fas fa-eye');
             $('#pass').attr('type','password');
              $('#eye').attr('title','비밀번호 표시');
             $('#pass_confirm').attr('type','password');
         });
         
         

        });

	
	
	</script>
	<script>
   
         
       function passCheck() {

           if(!document.member_form.pass_confirm.value) {
              $('#passtext').text('비밀번호를 확인하세요');
               $('#passtext').css('color','#fe4365');
              return; 
           }
           
           
          if (document.member_form.pass.value != 
                document.member_form.pass_confirm.value)
          {
              $('#passtext').text('!비밀번호가 다릅니다');
              $('#passtext').css('color','#fe4365');
              return;
          }
           
           if (document.member_form.pass.value == 
                document.member_form.pass_confirm.value)
          {
              $('#passtext').text('비밀번호가 일치합니다');
              $('#passtext').css('color','green');
              return;
          }
           
       }
        
        
        function hpCheck1() {
           var inText = document.member_form.hp2.value;
           var ret;
 

           for(var i=0; i<inText.length; i++) {
               ret = inText.charCodeAt(i);
           }

            if(!inText) {
                $('#hptext1').text("");
              return;
            }

           if(!(ret>=48 && ret<=57)) {
               $('#hptext1').text("숫자를 입력하세요");
               $('#hptext1').css('color', '#fe4365');
               document.member_form.hp2.focus();
              return;
           }
            
            if(ret>=48 && ret<=57) {
               $('#hptext1').text("");
              return;
           }

        }
        
        
        function hpCheck2() {
           var inText2 = document.member_form.hp3.value;
           var ret2;


           for(var j=0; j<inText2.length; j++) {
               ret2 = inText2.charCodeAt(j);
           }
            
            if(!inText2) {
                $('#hptext2').text("");
              return;
            }


           if(!(ret2>=48 && ret2<=57)) {
               $('#hptext2').text("숫자를 입력하세요");
               $('#hptext2').css('color', '#fe4365');
              document.member_form.hp3.focus();
              return;
           }
            
            if(ret>=48 && ret<=57) {
               $('#hptext2').text("");
              return;
           }
            
        }
        
        
        
        function emailCheck() {
            var emailID = document.member_form.email1.value;
       var ret3;
       for(var k=0; k<emailID.length; k++) {
           ret3 = emailID.charCodeAt(k)
       }
            
        if(!ret3) {
              $('#emailtext').text("");
          return;
        }    
       
       if(!(ret3>=97 && ret3<=122 || ret3 >=65 && ret3 <=90 || ret3 >=48 && ret3<= 57)) {
           $('#emailtext').text("영문, 숫자를 입력하세요");
           $('#emailtext').css('color', '#fe4365');
           document.member_form.email1.focus();
          return;
       }
            
        if(ret3>=97 && ret3<=122 || ret3 >=65 && ret3 <=90 || ret3 >=48 && ret3<= 57) {
           $('#emailtext').text("");
          return;
       }    
            
        }
        
  
   function check_input()
   {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      } 
       
         if (document.member_form.id.value.length>8)  {
          alert("아이디를 8자 이내로 다시 입력하세요");  
          document.member_form.id.value=null;  // 아이디를 아예 지워버림
          document.member_form.id.focus();   //커서를 아이디 텍스트 박스에 위치한다.
          return;
      }
       
       
      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호 확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }
       
       if (document.member_form.pass.value != 
                document.member_form.pass_confirm.value)
          {
             alert("비밀번호 확인을 다시 입력하세요");
              document.member_form.pass_confirm.value = "";
              document.member_form.pass_confirm.focus();
              
              return;
          }
       
       

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }
       
       
       var inText = document.member_form.hp2.value;
           var ret;
 

           for(var i=0; i<inText.length; i++) {
               ret = inText.charCodeAt(i);
           }
       
        if(!(ret>=48 && ret<=57)) {
               alert("휴대폰 중간자리는 숫자만 입력 가능합니다");
            document.member_form.hp2.value = "";
               document.member_form.hp2.focus();
            
              return;
           }
       
       
       var inText2 = document.member_form.hp3.value;
           var ret2;


           for(var j=0; j<inText2.length; j++) {
               ret2 = inText2.charCodeAt(j);
           }
            
  
           if(!(ret2>=48 && ret2<=57)) {
               alert("휴대폰 뒷자리는 숫자만 입력 가능합니다");
               document.member_form.hp3.value = "";
              document.member_form.hp3.focus();
              return;
           }
       
       
       
       if (!document.member_form.email1.value || !document.member_form.email2.value )
      {
          alert("이메일 주소를 입력하세요");    
          document.member_form.email1.focus();
          return;
      }
       
       
       var emailID = document.member_form.email1.value;
       var ret3;
       for(var k=0; k<emailID.length; k++) {
           ret3 = emailID.charCodeAt(k)
       }
       
       if(!(ret3>=97 && ret3<=122 || ret3 >=65 && ret3 <=90 || ret3 >=48 && ret3<= 57)) {
           alert('이메일 주소는 영문, 숫자로만 구성되어 있어야 합니다');
           document.member_form.email1.value = "";
           document.member_form.email1.focus();
            
          return;
       }
       
       
        
       var emailID2 = document.member_form.email2.value;
       
  
     dotpos = emailID2.lastIndexOf("."); 

     if (dotpos < 1 )   // '.'앞에 최소 1글자 입력하도록
   {
       alert("제대로 된 이메일 형식을 입력하세요");
       document.member_form.email2.focus() ; 
       return ;
   }
       
       
       
       
       
      

      document.member_form.submit(); 
		   // insert.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>
	
	<div id="wrap">
	
<!--
	<header>
     <h1 class="logo"><a href="../index.html">로고</a></h1>
 </header>
-->
	 
	<article id="content">  
  
      
      <a href="../index.html" class="home">HOME</a>
      
      
	  <form name="member_form" method="post" action="insert.php"> 
	  
	  <h2>JOIN</h2>
	  <p><i class="fas fa-check-square"></i> 모든 항목은 필수 입력 사항입니다.</p>
	  
	  
	  
	  
		
    <ul class="join_form">
        
        <li>
            <label for="id" class="hidden">아이디</label>
            <input type="text" name="id" id="id" placeholder="아이디 (8자이내로 입력)" onkeyup="underEight()" required>
			     <span id="loadtext"></span>
        </li>
        <li>
            <label for="pass" class="hidden">비밀번호</label>
             <input type="password" name="pass" id="pass" placeholder="비밀번호" required>
             
        </li>
        <li>
            <label for="pass_confirm" class="hidden">비밀번호확인</label>
            <input type="password" name="pass_confirm" id="pass_confirm" placeholder="비밀번호 확인" onkeyup="passCheck()" required>
            <span id="passtext"></span>
            <a href="#none" title="비밀번호 표시" id="eye"><i class="fas fa-eye"></i></a>
        </li>
        <li>
            <label for="name" class="hidden">이름</label>
            <input type="text" name="name" id="name" placeholder="이름" required> 
        </li>
        <li>
            <label for="nick" class="hidden">닉네임</label>
            <input type="text" name="nick" id="nick" placeholder="닉네임" required>
			     <span id="loadtext2"></span>
        </li>
        <li>
            <label class="hidden" for="hp1">전화번호앞3자리</label>
     			<select class="hp" name="hp1" id="hp1"> 
              <option value='010'>010</option>
              <option value='011'>011</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
              <option value='019'>019</option>
          </select>  - 
          <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" onkeyup="hpCheck1()" required> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" onkeyup="hpCheck2()" required>
        </li>
        <li>
           <label class="hidden" for="email1">이메일아이디</label>
     			<input type="text" id="email1" name="email1" placeholder="이메일 주소" onkeyup="emailCheck()" required>  @ 
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2"  required>      			
        </li>
        <li class="button">
            <a href="#" class="join_btn" onclick="check_input()">가입하기</a>&nbsp;&nbsp;
				 <a href="#" class="reset_btn" onclick="reset_form()">다시쓰기</a>
        </li>
        
        
    </ul>
    

	 </form>
	  
	</article>
	
	</div>
	
</body>
</html>


