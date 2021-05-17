$(document).ready(function(){
    $('.to_top a').smoothScroll();
    
    // 모바일용 메뉴 보이기/숨기기 액션처리
    $('.openMOgnb').click(function(){
        // alert('메뉴 보이기 액션 클릭'); // 테스트(디버그)
        // $('.header_cont').css('display','block');
        $('.header_cont').slideDown('slow');
        $('#header').addClass("on");
        // $('.openMOgnb').click(function(){
        // 	$('.header_cont').slideUp('fast');
        // 	$('#header').removeClass('on');
        // });
    });
    $('.closePop').click(function(){
        // $('.header_cont').css('display','none');
        $('.header_cont').slideUp('fast');
        $('#header').removeClass('on');
    });
});