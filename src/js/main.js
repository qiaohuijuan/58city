require.config({
    paths: {
        'jquery': './libs/jquery-3.1.1.min',
        'Handlebars': './libs/Handlebars',
        'Swiper': './libs/swiper-3.4.2.min',
        'IScroll': './libs/iscroll-probe',
        'index': './app/index'
    }
})
require(['index']);