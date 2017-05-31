$(document).ready(function(){

    // Menu js

    $(document).ready(function(){
        $('.menu-trigger').click(function(e){
            $('#nav-icon1').toggleClass('open');
            $('.left-menu').toggleClass('closed');
            e.preventDefault()
        });
    });


});