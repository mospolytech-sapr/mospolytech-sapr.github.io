
document.addEventListener("DOMContentLoaded", function() {
	
	var carousel = $("#carousel").flipster({
        style: 'carousel',
        spacing: -0.5,
        nav: false,
        buttons:   true,
    });


    $(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
	});


});
