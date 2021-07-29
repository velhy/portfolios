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
    <title>예매내역 확인 | 서울랜드</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../common/css/style.css">
   
   <?
  $total = $cfare1 + $cfare2 + $cfare3;

        if(!$userid)  
            {
        ?> 
          <script>
          alert('로그인 후 이용해주세요.');
          location.href="../login/login_form.php";
          </script>
          <?
        }

   include "../lib/dbconn.php";   //DB 접속

   $sql = "select * from memberForm where id='$userid' and pass=password('$pass')";   // 중복되지 않는 프라이머리 키(id)로 레코드 찾기
   $result = mysql_query($sql, $connect);  // 있으면 1, 없으면 NULL
   $num_match = mysql_num_rows($result);  //1 0

   if(!$num_match)  
   {
     echo("
           <script>
             window.alert('비밀번호가 일치하지 않습니다.');
             history.go(-1);
             exit;
           </script>
         ");
    }
    else   
    {
        
      $sql = "select * from book where id='$userid'";   // 중복되지 않는 프라이머리 키(id)로 레코드 찾기
      $result = mysql_query($sql, $connect);  // 있으면 1, 없으면 NULL
      $num_match = mysql_num_rows($result);  //1 0 
        
          if(!$num_match)  
   {
     echo("
           <script>
             window.alert('예매내역이 존재하지 않습니다.');
             history.go(-1);
             exit;
           </script>
         ");
    }
        
    $sql = "select * from book where id='$userid'"; // 예약 테이블에서 로그인 된 아이디 레코드 찾기
    $result = mysql_query($sql, $connect);  // 실행
    $row = mysql_fetch_array($result);  // 레코드 뽑아서 row에 담기
      

    if($row[fare1]==46000) {
        $row[age1] = '어른';
    } 
    if($row[fare2]==43000) {
        $row[age2] = '청소년';
    }
    if($row[fare3]==40000) {
        $row[age3] = '어린이';
    }
        
    }

      ?>
    </head> 
      
    <body>

    <? include "../common/sub_head.html" ?>
    <? include "../common/sub-book.html" ?>
    
    <article id="sub-cont-wrap">
      <h2 class="page-title">예매내역 확인</h2>
      <div class="page-cont">
        <div class="inner">
          <div class="tbl-wrap">
           <table>
             <thead>
               <tr>
                 <th scope="col">구분</th>
                 <th scope="col">내용</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>예매번호</td>
                 <td><?=$row[booknum]?></td>
               </tr>
               <tr>
                 <td>방문일자</td>
                 <td><?=$row[date]?></td>
               </tr>
               <tr>
                 <td>방문인원</td>
                 <td><?=$row[age1]?> <?=$row[count1]?> 인 <?=$row[age2]?> <?=$row[count2]?> 인
                    <?=$row[age3]?> <?=$row[count3]?> 인</td>
               </tr>
               <tr>
                 <td>결제수단</td>
                 <td><?=$row[pay]?></td>
               </tr>
               <tr>
                 <td>총 결제 금액</td>
                 <td><?=$row[total]?> 원</td>
               </tr>
               <?
                  $sql = "select * from memberForm where id='$userid'";   // 중복되지 않는 프라이머리 키(id)로 레코드 찾기
                  $result = mysql_query($sql, $connect);  // 있으면 
                  $row = mysql_fetch_array($result); // 레코드 뽑아서 row에 담기
                ?>
                <tr>
                  <td>아이디</td>
                  <td><?= $row[id] ?></td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td><?= $row[name] ?></td>
                </tr>
                <tr>
                  <td>핸드폰번호</td>
                  <td><?= $row[hp] ?></td>
                </tr>
             </tbody>
           </table>
           </div>
        </div>
      </div>
    </article>
    </div>
    
    <? include "../common/sub_foot.html" ?>
        
</body>  
</html>

