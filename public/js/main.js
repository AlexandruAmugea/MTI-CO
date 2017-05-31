$(document).ready(function(){

    // Menu js
    $('.menu-trigger').click(function(e){
        $('#nav-icon1').toggleClass('open');
        $('.left-menu').toggleClass('closed');
        e.preventDefault()
    });

    $('.form-open-demo-btn').click(function(e){
        e.preventDefault();
    })


});