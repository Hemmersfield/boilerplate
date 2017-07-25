var page = {
    setup: function () {
  
        clicks.init();
        fixToolBar.init();
        popupControls.init();
    }
};

var clicks = {
    init: function(){
        $('.search_btn').click(function(){
            $('.search').toggleClass('search--open');
        });

        $('#launchCourse').click(function(){
            $('.site-popup').toggleClass('is-hidden');
            $('.read-course').appendTo('.content__page');
            $('body').toggleClass('disable-scroll');

            if(!$('.read-course').hasClass('hide-me')){
                $('.read-course').addClass('hide-me');
            }else{
                $('.read-course').removeClass('hide-me');
            }
        });

        $('#launchExam').click(function(){
            $('.site-popup').toggleClass('is-hidden');
            $('.take-exam').appendTo('.content__page');
            $('.take-exam').toggleClass('hide-me');
            $('body').toggleClass('disable-scroll');
        });

        $('.close-popup').click(function(){
            $('.site-popup').toggleClass('is-hidden');
            $('body').toggleClass('disable-scroll');
            $('.read-course').addClass('hide-me');
            $('.take-exam').addClass('hide-me');
        });

        $('.launch-mobile-menu-button').click(function(){
            $('.mobile-menu').toggleClass('show-mobile-menu');
            $('body').toggleClass('disable-scroll');
        });

        $('.mobile-menu__close').click(function(){
            $('.mobile-menu').toggleClass('show-mobile-menu');
            $('body').toggleClass('disable-scroll');
        });

        $('.has-sublist').click(function(){
            $(this).toggleClass('show-sublist');
        });

        $('.has-sublist > ul').click(function(e){
            e.stopPropagation();
        });

        $('.has-sublist > a').click(function(e){
            e.stopPropagation();
        });

        $('.close-this-list').click(function(){
            $(this).parents().eq(1).toggleClass('show-sublist');
        });

        $('.icon--search').click(function(){
            $(this).toggleClass('close-search')
            $('.form--search .form__input').toggleClass('search-input-open');
        });

    }
};

var fixToolBar ={
    init: function(){
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();

            if(scroll > 100){
                console.log('yo')
                $('.launch-mobile-menu-button').appendTo('.mobile-taskbar');
                $('.mobile-taskbar').addClass('fix-search-bar')

            }else if(scroll < 100){
                $('.launch-mobile-menu-button').appendTo('.site-header');
                $('.mobile-taskbar').removeClass('fix-search-bar')
            }
        });
    }
}

var createHeader ={
    init: function(){

        var searchPosition = function(){
            if($(window).width() > 1023){
             $('.form--search').appendTo('.status-bar__search');
           }else if($(window).width() < 1024){
             $('.form--search').appendTo('.mobile-taskbar');
           }  
        };

        searchPosition();

        $(window).on("resize",function(){  
          searchPosition();
        });
    }
};

createHeader.init();


var popupControls = {
    init: function(){

        var pages = $('.pages__page').length,
            progressIncirment = 100 / pages,
            progressBar = $('.page-controls__progress div'),
            progress = parseFloat(progressBar.css('width')),
            nextButton = $('.next-button'),
            prevButton = $('.previous-button')

        

        nextButton.click(function(){
            if(progress < 100){
                progress = (progress + progressIncirment);
                updateProgress = (progress + '%');
                progressBar.css('width', updateProgress);
                return progressBar;
            }
        });

        prevButton.click(function(){
            if(progress > 0){
                progress = (progress - progressIncirment);
                updateProgress = (progress + '%');
                progressBar.css('width', updateProgress);
                return progress
            }
        });


    }
}


// var tabs = {
//     init: function(){
//         $("[data-tab]").click(function(){
//            var tab =  $(this).attr('data-tab');
//            $("[data-tab]").removeClass('open');
//            $(this).addClass('open');
//            $("[data-tabContent]").hide();
//            $("[data-tabContent='"+ tab +"']").show();
//         });
        
//     },
// };



/*------------------------------------------------------------------------------------*/
// initialise functions
$(document).ready(page.setup);