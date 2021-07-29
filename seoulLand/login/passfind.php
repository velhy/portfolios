<?
    session_start();
?>
<meta charset="utf-8">
<?
   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION);  

   if(!$id) {   
     echo("
           <script>
             window.alert('아이디를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!$name) {  
     echo("
           <script>
             window.alert('이름을 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!$hp) {  
     echo("
           <script>
             window.alert('핸드폰번호를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   include "../lib/dbconn.php";   //DB 접속

   $sql = "select * from memberForm where id='$id'";  
   $result = mysql_query($sql, $connect); 
   $num_match = mysql_num_rows($result); 

   if(!$num_match)  
   {
     echo("
           <script>
             window.alert('등록되지 않은 아이디입니다.');
             history.go(-1);
           </script>
         ");
    }
    else    
    {
          
		$row = mysql_fetch_array($result); 
    $sql ="select * from memberForm where id='$id' and name='$name' and hp='$hp'";
    $result = mysql_query($sql, $connect);
    $num_match = mysql_num_rows($result);
     
        if(!$num_match) {
           echo("
              <script>
                window.alert('해당 아이디에 등록된 이름, 핸드폰 번호가 아닙니다');
                history.go(-1);
              </script>
           ");
           exit;
        } else {
            function generateRandomPassword($length=8, $strength=0) {
            $vowels = 'abcd';
            $consonants = 'efghijklmnop';

    if ($strength & 1) {
        $consonants .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
    }

    $password = '';

    $alt = time() % 2;

    for ($i = 0; $i < $length; $i++) {
        if ($alt == 1) {
            $password .= $consonants[(rand() % strlen($consonants))];
            $alt = 0;
        } else {
            $password .= $vowels[(rand() % strlen($vowels))];
            $alt = 1;
        }
    }

    return $password;
}

$ranpass = generateRandomPassword(10,1);

            $sql ="update memberForm set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
            
           echo 
                "
                <div class='find-result'>
                  <p class='txt'>$row[id]님의 가입정보</p>
                  <table>
                    <thead>
                        <tr>
                            <th scope='col'>구분</th>
                            <th scope='col'>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>$row[id]</td>
                        </tr>
                        <tr>
                            <td>임시 비밀번호</td>
                            <td>$ranpass</td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>$row[name]</td>
                        </tr>
                        <tr>
                            <td>핸드폰번호</td>
                            <td>$row[hp]</td>
                        </tr>
                        <tr>
                            <td>가입일자</td>
                            <td>$row[regist_day]</td>
                        </tr>
                    </tbody>
                   </table>
                   <div class='btn-wrap'>
                    <a href='login_form.php' class='login'>로그인</a>
                  </div>
                </div>
            ";
  
        }
   }          
?>