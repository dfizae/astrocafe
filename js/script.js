$(document).ready(function(){
    //**************
    //* gnb 메뉴
    //**************


    const header = $('#header')
    const gnb = header.find('#gnb')
    const gnbLi = gnb.children('li')
    const dep1 = gnbLi.children('a.dep1')
    const dep2 = gnbLi.children('ul.dep2')
    const ms = $('#main-slide .swiper-slide')

    
    console.log(dep1)

    gnbLi.on('mouseenter', function(){
        //dep2.css('display', 'block')
        //dep2.stop().fadeIn(300)

        /* dep2.css('visibility', 'visible')
        dep2.stop().animate({opacity: 1}, 300) */
        header.addClass('on')
        ms.addClass('on')
    })

    gnbLi.on('mouseleave', function(){
        //dep2.css('display', 'none')
        //dep2.stop().fadeOut(200)

        /* dep2.css('visibility', 'hidden')
        dep2 */
        header.removeClass('on')
        ms.removeClass('on')
    })

    //******************
    //* tab 메뉴 (소식 알림 구간)
    //*******************

    const tabLink = $('#alert-wrap .alert-util a')
    const tabCon = $('#alert-wrap .alert .alert-list-wrap')
    const tabConList = $('#alert-wrap .alert .alert-list-wrap .alert-list')

    console.log(tabLink)
    console.log(tabCon)
    console.log(tabConList)

    

    tabLink.on('click', function(e){
        e.preventDefault();
        tabConList.hide()
        let tabConId = $(this).attr('data-tab')
        console.log(tabConId)
        $(tabConId).show()

        tabLink.removeClass('on')
        $(this).addClass('on')
        
    })


    /* swiper.js 홈페이지에서 우측 상단 docs를 누르고 intialize Swiper 창에서 복붙 */
    const swiper = new Swiper('#main-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, //슬라이드 루프(무한 회전) 활성화
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination', //페이지 표시기
          clickable: true, //클릭을 가능하게 하도록 설정
          type: 'progressbar', //진행바 형태
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '#main-slide .swiper-button-next',
          prevEl: '#main-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        /* codeSandbox에서 가져옴 */
        autoplay: {
            delay: 3000,
        },

        /* 슬라이드 변환 시 + 1 추가 기능 */
        on: {
          slideChange: function () {
            document.getElementById('current-slide').textContent = this.realIndex + 1;
          }
        },
      });


}) //문서가 준비되면 작업 끝

 