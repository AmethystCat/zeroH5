/**
 * Created by Administrator on 2015/8/10.
 */
$(function () {
    var $main = $('#main');
        //$header = $('#header'),
        //$back = $('.icon-back');

    function pageSlideOver(){
        $('.page-out').on('transitionend', function(){
            $(this).removeClass('page-out');
        });
        $('.page-in').on('transitionend', function(){
            $(this).removeClass('page-in');
        });
    }

    $main.on('touchstart', '#baoming-Btn,#next,#submit', function(e){
        console.log("asdasd");
        var $pageTo = $('#'+$(this).data("page")),
            name = $(this).data("page").substring(1);
        console.log($pageTo);
        console.log(name);

        $(this).parents('.page').removeClass('page-active').addClass('page-prev page-out');
        $pageTo.removeClass('page-next').addClass('page-active page-in');

        pageSlideOver();
        //$back.css({display:"block"}).data({"page":"page-index"});

        history.pushState({"page": name}, "" , "?page="+name);
    });

    //$header.on('tap', '.icon-back', function(){
    //    $('.page-active').removeClass('page-active').addClass('page-next page-out');
    //    console.log($(this).data('page'));
    //    $('.'+$(this).data('page')).removeClass('page-prev').addClass('page-active page-in');
    //    pageSlideOver();
    //    $back.css({display:"none"});
    //    history.go(-1);
    //});
});