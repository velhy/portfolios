<?
    session_start();
   @extract($_GET); 
  @extract($_POST); 
   @extract($_SESSION);  
   
$total = $cfare1 + $cfare2 + $cfare3;

   include "../lib/dbconn.php";   //DB 접속

 function generateRandomPassword($length=8, $strength=0) {

    $vowels = 'T';

    $consonants = 'A';

    if ($strength & 1) {

        $consonants .= '12345678';

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

$booknum = generateRandomPassword(10,1);

$sql = "insert into book(id, fare1, count1, cfare1, fare2, count2, cfare2, fare3, count3, cfare3, date, total, pay, booknum) values('$userid', $fare1, $count1, $cfare1, $fare2, $count2, $cfare2, $fare3, $count3, $cfare3, '$date', $total, '$pay', '$booknum')"; 


// 로그인 되어있는 상태일때 예매내역 저장


   $result = mysql_query($sql, $connect);  // 실행

?>

<script>
  window.location.href='book_confirm.php';
</script>
