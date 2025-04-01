$(document).ready(function(){



    
    const header = $('#header')
    const gnb = header.find('#gnb')
    const gnbLi = gnb.children('li')
    const utw = header.find('.util-wrap')
    const ut = utw.children('.util')
    const qm = ut.children('.quick-menu')
    const qlw = qm.children('.quick-list-wrap')
    const qll = $('#header .util-wrap .util > .quick-menu .quick-list li a .quick-img')
    const qt = $('#header .util-wrap .util > .quick-menu .quick-list li a .quick-img .quick-text')
    const qc = $('#header .util-wrap .util > .quick-menu .quick-list-wrap .quick-list li > .quick-close');
    const overlay = $('.overlay');


    //**************
    //* gnb 메뉴
    //**************

    gnbLi.on('mouseenter', function(){
        header.addClass('on');
    })

    gnbLi.on('mouseleave', function(){
        header.removeClass('on');
    })



    //******************
    //* quick-menu 퀵 메뉴 (퀵 메뉴 구간)
    //*******************

    

    qm.on('click', function(){
      if (qlw.is(':visible')) return; //이미 열려 있으면 실행되지 않음
  
      qlw.stop().fadeIn(500); // 항상 overlay보다 위에 위치
      overlay.fadeIn(500); // overlay는 header 위에 배치
    });
  
    qc.on('click', function () {
      qlw.stop().fadeOut(500);
      overlay.fadeOut(500);
    });
    
    qll.on('mouseenter', function(){
      qt.removeClass('on');
      $(this).find('.quick-text').addClass('on');
    })
    
    qll.on('mouseleave', function(){
      $(this).find('.quick-text').removeClass('on');
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

 