<?
    session_start();
?>
<meta charset="utf-8">
<?
   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION);  
  
   if(!$name) {   
     echo("
           <script>
             window.alert('이름을 입력하세요.');
           </script>
         ");
         exit;
   }

   if(!$hp) { 
     echo("
           <script>
             window.alert('핸드폰번호를 입력하세요.');
           </script>
         ");
         exit;
   }

   include "../lib/dbconn.php";  

   $sql = "select * from memberForm where name='$name'";   
   $result = mysql_query($sql, $connect);  
   $num_match = mysql_num_rows($result);  

   if(!$num_match)  
   {
     echo("
           <script>
             window.alert('등록되지 않은 이름입니다.');
           </script>
         ");
    }
    else   
    {
		     $row = mysql_fetch_array($result); 
         $sql ="select * from memberForm where name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result);
     
        if(!$num_match)  
        {
           echo("
              <script>
                window.alert('해당 이름에 등록된 핸드폰 번호가 아닙니다');
              </script>
           ");

           exit;
        }
        else    
        {
           
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
                    <a href='passfind_form.php' class='pass'>비밀번호 찾기</a>
                </div>
            </div>
            ";
        }
   }          
?>
