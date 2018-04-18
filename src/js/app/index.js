require(['jquery', 'Handlebars', 'Swiper', 'IScroll'], function($, Handlebars, Swiper, IScroll) {
    $.ajax({
        url: '/info',
        success: function(req) {
            var result = JSON.parse(req);
            render(result);
        }
    })
    $.ajax({
        url: '/newdata',
        success: function(data) {
            var result = JSON.parse(data);
            init(result);
        }
    })

    function render(data) {
        var source = $('#content').html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $('.banner').html(html);
        new Swiper('.banner', {
            autoplay: 1000,
            loop: true,
            pagination: '.page'
        })
    }

    function init(obj) {
        console.log(obj);
        var home = obj.home;
        var source = $('#mainlist').html();
        var template = Handlebars.compile(source);
        var html = template(home);
        $('.main').html(html);
        //给ul设置宽度
        var len = $('.list').children('li').length;
        var liw = $('.list').children('li').width();
        $('.list').width(liw * len);
        new IScroll('.navlist', {
            scrollX: true,
            scrollY: false
        })
        var now = obj.now;
        var source1 = $('#nowlist').html();
        var template1 = Handlebars.compile(source1);
        var html1 = template1(now);
        $('.inp').html(html1);
        //给ul设置宽度
        var len = $('.list1').children('li').length;
        var liw = $('.list1').children('li').width();
        $('.list1').width(liw * len);
        new IScroll('.navlist1', {
            scrollX: true,
            scrollY: false
        })
    }
})