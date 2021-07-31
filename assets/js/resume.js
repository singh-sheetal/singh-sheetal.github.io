
$(document).ready(function () {
    $( ".accordion" ).click(function() {
	 if($(this).hasClass('active')){
		 
		 $(this).removeClass('active');
		 $(".panel").css("display","none");
		  $(".panel").css("visibility","hidden");
	 }
	 else{
		 $(this).addClass('active');
		 $(".panel").css("display","block");
		 	  $(".panel").css("visibility","visible");
	 }
	});
	
	
	var maxHeight = 0;

	$("#services .col-lg-3 .services-item  .services-content").each(function(){
	   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});

	$("#services .col-lg-3 .services-item  .services-content").height(maxHeight);
	
	window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
var maxHeight = 0;

	$("#services .container .services-content").each(function(){
	   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});

		$("#services .container .services-content").height(maxHeight);

var maxHeight = 0;

	$("#resume .services-content").each(function(){
	   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});

		$("#resume .services-content").height(maxHeight);
var maxHeight = 0;

	$("#Education .services-content").each(function(){
	   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});

		$("#Education .services-content").height(maxHeight);



$("#projects .services-item").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("#projects .services-item:hidden").slice(0, 6).slideDown();
		$("#projects .services-item .services-content").css('height','fit-content');
        if ($("#projects .services-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 2000);
    });





});
