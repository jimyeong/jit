

$(document).ready(function() {


    /**
     *  UI 스크립트 init
     */

    project.init();


    /**
     * 라이브러리 스크립트.
     */

    lib.init();


});

var project = {
    init: function () {
        project.resetSideBar();
        project.sideBarOpen();
        project.gnbOpen();

    },
    gnbOpen:function () {
        $('.header__menu').on('click',function () {
            $('html').toggleClass('is-open')
        })


    },
    resetSideBar:function () {
        $(window).on('resize load', function () {
            var winSize = $(window).innerWidth();
            if(winSize > 992){
                $('html').removeClass('is-open')
            }else{
            }
        })
    },
    sideBarOpen:function () {
    }
};
var lib = {
    init : function () {
    }



};




