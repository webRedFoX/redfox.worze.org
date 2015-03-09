$(document).ready(function() {

// resize height
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

// dropdown button animate
	$("#sandwich, .menu_item").click(function() {
	  $("#sandwich").toggleClass("active");
	});

// dropdown menu
	$('#sandwich').on('click', function(){
		$('.top_menu').fadeToggle(700);
		$('.top_menu li a').toggleClass('fadeInUp animated');
	});

// hide .top_menu when click on link
	$('.top_menu li a').on('click', function(){
		$('.top_menu').fadeOut();
		$("#sandwich").removeClass("active");
	});

// Magnific Popup Documentation
	// .s_about Photo
	$('.image-link').magnificPopup({type:'image'});
	// .s_portfolio
	$('.open_popup_link').magnificPopup({type: 'inline', showCloseBtn: true});


// MixItUp
	$('#mix_container').mixItUp();

// s_portfolio ul li toggleClass .active
	$('.s_portfolio ul li').on('click', function(){
		(this).toggleClass('active');
	});

// s_portfolio item add link to 'a' & 'id'
	$('.portfolio_item').each(function(i){
		$(this).find('a').attr('href', '#work_item_' + i);
		$(this).find('.port_descr').attr('id', 'work_item_' + i);
	});


// jQuery.validate
	$('#myForm').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			name: {
				required: true,
				minlength: 3
			},
			textarea: {
				required: true
			}
		},
		errorClass: "invalid"
	});

// page scroll to id
	$(".top_menu ul a[href*='#']").mPageScroll2id();

});


$(window).load(function() { 

// preloader
	$("#loader_inner").fadeOut(); 
	$("#loader").delay(400).fadeOut("slow"); 

// add animate.css on scroll to .top_text & section
	// .top_text h1, p
	$('.top_text h1').animated('fadeInDown', 'fadeOutUp');
	$('.top_text p').animated('fadeInUp', 'fadeOutDown');
	// section h1, p, hr
	$('.s_head_text').animated('fadeInUp', 'fadeOutDown');
	// section .s_about .col-md-4
	$('.animation_left').animated('fadeInLeft', 'fadeOutLeft');
	$('.animation_center').animated('flipInY', 'flipOutY');
	$('.animation_right').animated('fadeInRight', 'fadeOutRight');

});