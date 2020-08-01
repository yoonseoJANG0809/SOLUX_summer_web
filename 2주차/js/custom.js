//라이트 박스
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("sample_popup.html","popup01","width=800, height=590, left=50, top=50, scrollbar=0,tollbar=0, menubar=0");
})

//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block");
    //$("#layer").show();
    //$("#layer").fadeIn();
    $("#layer").slideDown();
})
$("#layer .close").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block");
    //$("#layer").show();
    //$("#layer").fadeOut();
    $("#layer").slideUp();
})

//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


//배너
//html 마크업 셋팅 -> css연동 --> 제이쿼리 연동 -->제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
    e.preventDefault(); //#의 기능을 꺠줌. #은 클릭했을 때 위로 올라는 성질이 있음.
    //$("#cont_nav").css("display","block");
    //$("cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").selectNode();
    //위의 방법들은 버튼을 눌렀을 때 나타나는 것만 가능. 사라지는 것 못함. 
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle(); 서서히 나타남
    $("#cont_nav").slideToggle(200); //()의 숫자를 바꿔 속도를 바꿀 수 있음.
    $(this).toggleClass("on"); //btn에 on이 붙었을 때. $(".tit .btn").toggleClass("on"); 이렇게 써도 됨.
});