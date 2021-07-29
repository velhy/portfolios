// S : window load
$(window).on('load', function () {

     /**********************************************************************************
     ** 비밀번호 보이기/숨기기
     ***********************************************************************************/
    $('.btn-lock').toggle(function () {
        $(this).find('ion-icon').attr('name', 'lock-closed-outline');
        $('#pass, #pass_confirm').attr('type', 'text');
        $('.btn-lock').attr('title', '비밀번호 숨기기');
    }, function () {
        $(this).find('ion-icon').attr('name', 'lock-open-outline');
        $('#pass, #pass_confirm').attr('type', 'password');
        $('.btn-lock').attr('title', '비밀번호 표시');
    });


    /**********************************************************************************
     ** 아이디 ajax 확인 
     ***********************************************************************************/
    $("#id").keyup(function () { 
        let id = $('#id').val(); 
        $.ajax({
            type: "POST",
            url: "check_id.php",
            data: "id=" + id, 
            cache: false, 
            success: function (data) {
                $("#loadId").html(
                    data); 
            }
        });
    });


     /**********************************************************************************
     ** 아이디 찾기 버튼 클릭시
     ***********************************************************************************/
    $(".btn-find-id").click(function () {
        let name = $('#name').val();
        let hp = $('#hp').val();

        $.ajax({
            type: "POST",
            url: "idfind.php",
            data: "name=" + name + "&hp=" + hp,
            cache: false,
            success: function (data) {
                $("#loadtext").html(data);
            }
        });
    });


     /**********************************************************************************
     ** 비밀번호 찾기 버튼 클릭시
     ***********************************************************************************/
    $(".btn-find-pass").click(function () {
        let id = $('#id').val();
        let name = $('#name').val();
        let hp = $('#hp').val();

        $.ajax({
            type: "POST",
            url: "passfind.php",
            data: "id=" + id + "&name=" + name + "&hp=" + hp,
            cache: false,
            success: function (data) {
                $("#loadtext").html(data);
            }
        });
    });


    /**********************************************************************************
     ** 로그인 유효성 검사
     ***********************************************************************************/
    function check_login() {
        if (!document.member_form.id.value) {
            alert("아이디를 입력하세요");
            document.member_form.id.focus();
            return;
        }

        if (!document.member_form.pass.value) {
            alert("비밀번호를 입력하세요");
            document.member_form.pass.focus();
            return;
        }

        document.member_form.submit();
    }


     /**********************************************************************************
     ** 회원가입 유효성 검사 
     ***********************************************************************************/
    function check_join() {
        if (!document.member_form.id.value) {
            alert("아이디를 입력하세요");
            document.member_form.id.focus();
            return;
        }

        if (document.member_form.id.value.length > 8) {
            alert("아이디를 8자 이내로 다시 입력하세요");
            document.member_form.id.value = "";
            document.member_form.id.focus();
            return;
        }

        if (!document.member_form.pass.value) {
            alert("비밀번호를 입력하세요");
            document.member_form.pass.focus();
            return;
        }

        if (!document.member_form.pass_confirm.value) {
            alert("비밀번호 확인을 입력하세요");
            document.member_form.pass_confirm.focus();
            return;
        }

        if (document.member_form.pass.value !=
            document.member_form.pass_confirm.value) {
            alert("비밀번호 확인을 다시 입력하세요");
            document.member_form.pass_confirm.value = "";
            document.member_form.pass_confirm.focus();
            return;
        }

        if (!document.member_form.name.value) {
            alert("이름을 입력하세요");
            document.member_form.name.focus();
            return;
        }

        if (!document.member_form.hp.value) {
            alert("핸드폰번호를 입력하세요");
            document.member_form.hp.focus();
            return;
        }

        let inText = document.member_form.hp.value;
        let ret;

        for (let i = 0; i < inText.length; i++) {
            ret = inText.charCodeAt(i);
        }

        if (!(ret >= 48 && ret <= 57)) {
            alert("핸드폰번호는 숫자만 입력 가능합니다");
            document.member_form.hp.value = "";
            document.member_form.hp.focus();
            return;
        }

        document.member_form.submit();
    }


     /**********************************************************************************
     ** 회원정보수정 유효성 검사 
     ***********************************************************************************/
    function check_modify() {
        if (!document.member_form.pass.value) {
            alert("비밀번호를 입력하세요");
            document.member_form.pass.focus();
            return;
        }

        if (!document.member_form.pass_confirm.value) {
            alert("비밀번호 확인을 입력하세요");
            document.member_form.pass_confirm.focus();
            return;
        }

        if (document.member_form.pass.value !=
            document.member_form.pass_confirm.value) {
            alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
            document.member_form.pass_confirm.focus();
            return;
        }

        if (!document.member_form.hp.value) {
            alert("핸드폰번호를 입력하세요");
            document.member_form.hp.focus();
            return;
        }

        let inText = document.member_form.hp.value;
        let ret;

        for (let i = 0; i < inText.length; i++) {
            ret = inText.charCodeAt(i);
        }

        if (!(ret >= 48 && ret <= 57)) {
            alert("핸드폰번호는 숫자만 입력 가능합니다");
            document.member_form.hp.value = "";
            document.member_form.hp.focus();
            return;
        }

        document.member_form.submit();
    }


    const btnLogin = document.querySelector('.btn-login');
    const btnJoin = document.querySelector('.btn-join');
    const btnModify = document.querySelector('.btn-modify');

    if (btnLogin) {
        btnLogin.addEventListener('click', check_login);
    }

    if (btnJoin) {
        btnJoin.addEventListener('click', check_join);
    }

    if (btnModify) {
        btnModify.addEventListener('click', check_modify);
    }

})
// E: window load