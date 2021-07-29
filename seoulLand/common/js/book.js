// S : window load
$(window).on('load', function () {

    document.getElementById('date').value = new Date().toISOString().substring(0, 10);

    let [count1, count2, count3] = [0, 0, 0];
    let [fare1, fare2, fare3] = [46000, 43000, 40000];
    let [cfare1, cfare2, cfare3] = [0, 0, 0];

    $('.age1 button').click(function () {
        if ($(this).hasClass('p')) {
            count1 += 1;
            cfare1 = fare1 * count1;
        } else {
            if (count1 > 0) {
                count1 -= 1
                cfare1 = fare1 * count1;
            }
        }

        $('#count1').val(count1);
        $('#cfare1').val(cfare1);
        $('.total-wrap p').eq(0).html('성인 ' + count1 + ' 인' + ' <span>' + cfare1 + ' 원 </span>');

        if (count1 == 0) {
            $('.total-wrap p').eq(0).text("");
        }

        $('#total').val(cfare1 + cfare2 + cfare3);

    });

    $('.age2 button').click(function () {
        if ($(this).hasClass('p')) {
            count2 += 1;
            cfare2 = fare2 * count2;
        } else {
            if (count2 > 0) {
                count2 -= 1
                cfare2 = fare2 * count2;
            }
        }

        $('#count2').val(count2);
        $('#cfare2').val(cfare2);
        $('.total-wrap p').eq(1).html('청소년 ' + count2 + ' 인' + ' <span>' + cfare2 + ' 원 </span>');

        if (count2 == 0) {
            $('.total-wrap p').eq(1).text("");
        }

        $('#total').val(cfare1 + cfare2 + cfare3);
    });

    $('.age3 button').click(function () {
        if ($(this).hasClass('p')) {
            count3 += 1;
            cfare3 = fare3 * count3;
        } else {
            if (count3 > 0) {
                count3 -= 1
                cfare3 = fare3 * count3;
            }
        }

        $('#count3').val(count3);
        $('#cfare3').val(cfare3);
        $('.total-wrap p').eq(2).html('어린이 ' + count3 + ' 인' + ' <span>' + cfare3 + ' 원 </span>');

        if (count3 == 0) {
            $('.total-wrap p').eq(2).text("");
        }

        $('#total').val(cfare1 + cfare2 + cfare3);
    });


    const btnBook = document.querySelector('.btn-book');
    btnBook.addEventListener('click', book_check);


    // function countFare(num, count, fare, cfare, afterCount) {
    //     $(`.age${num} button`).click(function () {
    //         if ($(this).hasClass('p')) {
    //             count += 1;
    //             cfare = fare * count;
    //         } else {
    //             if (count > 0) {
    //                 count -= 1
    //                 cfare = fare * count;
    //             }
    //         }

    //         $('#count' + num).val(count);
    //         $('#cfare' + num).val(cfare);

    //         if (num === 1) {
    //             $('.total-wrap p').eq(0).html(`성인 ${count} 인 <span> ${cfare} 원`);
    //         } else if (num === 2) {
    //             $('.total-wrap p').eq(1).html(`청소년 ${count} 인 <span> ${cfare} 원`);
    //         } else if (num === 3) {
    //             $('.total-wrap p').eq(2).html(`어린이 ${count} 인 <span> ${cfare} 원`);
    //         }

    //         if (count == 0) {
    //             if (num === 1) {
    //                 $(`.total-wrap p:eq(0)`).html("");
    //             } else if (num === 2) {
    //                 $(`.total-wrap p:eq(1)`).html("");
    //             } else if (num === 3) {
    //                 $(`.total-wrap p:eq(2)`).html("");
    //             }
    //         }

    //         afterCount();
    //     })
    // }


    // function afterCount() {
    //     alert(cfare1);
    //     $('#total').val(cfare1 + cfare2 + cfare3);
    // }

    // countFare(1, count1, fare1, cfare1, afterCount);
    // countFare(2, count2, fare2, cfare2, afterCount);
    // countFare(3, count3, fare3, cfare3, afterCount);

    // const btnBook = document.querySelector('.btn-book');
    // btnBook.addEventListener('click', book_check);

});
// E : window load