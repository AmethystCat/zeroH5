/**
 * Created by Administrator on 2015/8/10.
 */
$(function () {
    var $main = $('#main'),
	    current = {};
    //初始化history.state ,并设置current page id 为1
    history.pushState({"page": "p1"}, "" , "?page=p1");
    current.page = "p1";
    //过渡动画函数
    function pageSlideOver(){
        $('.page-out').on('transitionend', function(){
            $(this).removeClass('page-out');
        });
        $('.page-in').on('transitionend', function(){
            $(this).removeClass('page-in');
        });
    }
    //对应dom元素事件监听
    $main.on('click', '#baoming-Btn,#next,#submit', function(e){
        var $pageTo = $('#'+$(this).data("page")),
            //name = $(this).data("page").substring(1);
            name = $(this).data("page");
		//缓存目标页的page id
		current.page = name;
        console.log($pageTo);
        console.log(name);

        $(this).parents('.page').removeClass('page-active').addClass('page-prev page-out');
        $pageTo.removeClass('page-next').addClass('page-active page-in');
        pageSlideOver();

        history.pushState({"page": name}, "" , "?page="+name);
    });
    //监听浏览器返回和前进按钮
    window.addEventListener('popstate', function(e) {
        console.log('history.state.page:'+history.state.page);
		console.log('current.page:'+current.page);
		console.log('e.state.page:'+e.state.page);

        var pageOut = $("#"+current.page),
            pageIn = $("#"+e.state.page);

        if( e.state.page.substring(1) < current.page.substring(1) ){//后退
            pageOut.removeClass('page-active').addClass('page-next page-out');
            pageIn.removeClass('page-prev').addClass('page-active page-in');
            pageSlideOver();
        }else if ( e.state.page.substring(1) > current.page.substring(1) ) {//前进
            pageOut.removeClass('page-active').addClass('page-prev page-out');
            pageIn.removeClass('page-next').addClass('page-active page-in');
            pageSlideOver();
        }else if( !e.state || (current.page === 'p1' && current.page === e.state.page) ) {
            console.log('已经是第一页了，不能再往后退了');
            return;
        }

		current.page = e.state.page;
        console.log(current.page);
    });
});
