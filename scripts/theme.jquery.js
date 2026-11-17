jQuery(document).ready( function(){
	
	var theme = {
		onReady : function(){

			//open code form
			$('.active-code').on('click', function(e){
				e.preventDefault();
				$('.code-form').addClass('show-form');
			});

			//hamburgers
			$('.navbar-toggle').on('click', function( e ){

				e.preventDefault();

				if( ! $(this).hasClass('is-active') ){

					// Add active state
					$(this).addClass('is-active');

					$('body').addClass('no-scroll');
					$('#main-nav').collapse('show');

				}else{

					// Remove active state
					$(this).removeClass('is-active');

					 $('#main-nav').collapse('hide');

					// Close navigation
					$('body').removeClass('no-scroll nav-visible index-section-nav-visible');
					
				}
				
			});

			//open menu on hover
			if($(window).width() > 767){


				// $(".navbar-toggle").on("mouseenter",function(e){
					 
				// 	 e.stopPropagation();

				// 	$('body').addClass('nav-visible');
				// 	$('.navbar-toggle').addClass('is-active');
				// 	$('#main-nav').collapse('show');
				// 	$('body').removeClass('index-section-nav-visible');
				// });
				// // close menu on hover
				// $(".mask-open-menu").on("mouseenter",function(e){

				// 	if( !$('body').hasClass('index-section-nav-visible') ) {
				// 		$('body').removeClass('nav-visible');
				// 		$('.navbar-toggle').removeClass('is-active');
				// 		//$('#main-nav').collapse('hide');
				// 	}

				// });

				// //open filter menu on hover
				// $(".filter-box").on("mouseenter",function(e){
				// 	$('body').addClass('nav-filter-visible');
				// });

				// // close filter menu on hover
				// $(".mask-open-menu").on("mouseenter",function(e){
				// 	$('body').removeClass('nav-filter-visible');
				// });
			}

			// if($(window).width() < 767){
			// 	$(".filter-box").on("click",function(e){
			// 		$('body').toggleClass('nav-filter-visible');
			// 	});
			// }

			//open filter menu on click
			$(".filter-box").on("click", function(e){
				$('body').toggleClass('nav-filter-visible');
			});

			//affix
			$("#top-affix").on("affixed.bs.affix",function(e){
				$('body').addClass('main-margin');
			});

			$("#top-affix").on("affixed-top.bs.affix",function(e){
				$('body').removeClass('main-margin');
			});

			

			$('#main-nav').on('show.bs.collapse', function() {
				$('body').addClass('nav-visible');
			});

			$('#main-nav').on('hide.bs.collapse', function() {
				$('body').removeClass('nav-visible');
			});

			//fullPage
			$('#full-height').fullpage({
				sectionSelector: 'section',
				css3: true,
				scrollingSpeed: 1000,
				easing: 'easeInOut',
				easingcss3: 'ease-in-out',
				responsiveWidth: 768,
				controlArrows: false,
				navigation: true,
				navigationPosition: 'right',
				fixedElements: '#wpadminbar',
				afterRender: function(){

					setTimeout(function(){
						$("#full-height section.active").addClass("active-visible"); 	
					}, 100);

					setTimeout(function(){
						$(".intro-mask-away #full-height section.active .gifplayer").gifplayer('play');
					},200);
				},
				onLeave : function(index, nextIndex, direction){

					if ( ! $('body').hasClass('intro-mask-away') ) {
						return false;
					}

					$("#full-height section").removeClass("active-visible");
					$("#full-height section:nth-child(" + nextIndex + ")").addClass("active-visible");
				},
				afterLoad: function(anchorLink, index) {

					var $this = $(this);
					// Add class to control blinking
					$('.scroll-page').addClass('blink');

					if ( $("#full-height section").length == index ) {

						/**
						 * Hide scroll icon when last section is reached
						 */
						 $('.scroll-page').hide();
						 $('.open-menu-block').show();

						/**
						 * Remove class .first-visit
						 * This will make burger visible again
						 */
						$('body').removeClass('first-visit');

						
						
					} else {
						
						$('.scroll-page').show();
						$('.open-menu-block').hide();
						

						// Close navigation
						$('body').removeClass('nav-visible index-section-nav-visible');

						// Change the state of hamburger button
						$('.hamburger').removeClass('is-active');

					}

					setTimeout(function(){
						if ( $('body').hasClass('intro-mask-away') ) {
							$this.find(".gifplayer").gifplayer('play');
						}
					}, 2000);
						
				}
			});

			$('.open-menu-block a').on('click', function(e){
				e.preventDefault();
				// Open navigation
				$('body').addClass('nav-visible index-section-nav-visible');

				$('#main-nav').collapse('show');

				//Change the state of hamburger button
				$('.hamburger').addClass('is-active');
			})

			$( window ).on("mousewheel DOMMouseScroll", function() {

				// Open navigation
				theme.openNavigation();

			});

			// Scroll page when mouse icon is clicked
			$('.scroll-page').on('click', function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionDown();

				// Open navigation
				theme.openNavigation();
			});



			//slick init
			$('.members-slider').slick({
				arrows: false,
				slidesToShow: 2,
				infinite: false,
				draggable: false
			});

			$('.member-slide.slick-active:nth-child(1) .btn-read-more').on('click', function(e){
				e.preventDefault();
				$(this).closest('.members-wrapper').removeClass('slide-left');
				$(this).closest('.members-wrapper').addClass('slide-right');

				$('html, body').animate({
					scrollTop: $('.member-description').offset().top - $('header').height() - $("#admin-bar").height()
				}, 500);
			});

			$('.member-slide.slick-active:nth-child(1) .close-member-item').on('click', function(e){
				e.preventDefault();
				$(this).closest('.members-wrapper').removeClass('slide-left');
				$(this).closest('.members-wrapper').removeClass('slide-right');

				$('html, body').animate({
					scrollTop: $('.members-slider').offset().top - $('header').height() - $("#admin-bar").height()
				}, 500);

			});

			$('.member-slide.slick-active:nth-child(2) .btn-read-more').on('click', function(e){
				e.preventDefault();
				$(this).closest('.members-wrapper').removeClass('slide-right');
				$(this).closest('.members-wrapper').addClass('slide-left');

				$('html, body').animate({
					scrollTop: $('.member-description').offset().top - $('header').height() - $("#admin-bar").height()
				}, 500);

			});

			$('.member-slide.slick-active:nth-child(2) .close-member-item').on('click', function(e){
				e.preventDefault();
				$(this).closest('.members-wrapper').removeClass('slide-right');
				$(this).closest('.members-wrapper').removeClass('slide-left');

				$('html, body').animate({
					scrollTop: $('.members-slider').offset().top - $('header').height() - $("#admin-bar").height()
				}, 500);

			});




			//on scroll mask up
			// For Chrome
			window.addEventListener('mousewheel', mouseWheelEvent);
			// For Firefox
			window.addEventListener('DOMMouseScroll', mouseWheelEvent);
			function mouseWheelEvent(e) {
				var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
				if(delta < 0) {
					 //scroll down
					 $('.intro-mask').addClass('scroll-up-fast');

					 setTimeout( function(){
						 if ( ! $('body').hasClass('intro-mask-away') ) {
							$('body').addClass('intro-mask-away');

							setTimeout( function(){
								//$("#full-height section.active .gifplayer").gifplayer('play');
							}, 2000);
						 }
						
					 }, 1000);

					
					
				 }
			}

			document.addEventListener( 'wpcf7mailsent', function( e ) {

				if( wp.forms[e.detail.contactFormId] ) {
					location = wp.forms[e.detail.contactFormId];
				} else {
					location = wp.forms['default'];
				}

			}, false );

			var infinite = new Waypoint.Infinite({
				element: $('.infinite-container')[0]
			})

			if($(window).width() < 767){
				//inview
				$('.history-box').each(function(){
					var sectionElement = $(this);
					var inview = new Waypoint.Inview({
						element: sectionElement[0],
						enter: function(direction) {
						   sectionElement.addClass('inview');
						},
						exited: function(direction) {
						   //sectionElement.removeClass('inview');
						},
					});
				});
			}



			$(".intro-contact-form input[type='checkbox']").uniform();
			//$(".page-template-contact .wpcf7-form select").uniform();
			//
			$(".page-template-contact .wpcf7-form select, .page-template-registration .wpcf7-form select").selectpicker({
				showTick : true,
				width : '240px',
				title: null
			});

			// var waypoints = $('#button-circle-group').waypoint(function(direction) {
			// 	alert("!");
			// });

			if ( $('#button-circle-group').length > 0 ) {
				var waypoint = new Waypoint({
					element: document.getElementById('button-circle-group'),
					handler: function(direction) {
						$('.button-circle-group').addClass('active');
					},
					 offset: '85%'	
				});
			}
			
			$('.editable').editable({
				mode: 'inline',
				success: function(response, value) {
					$(this).prev().val(value);
				}
			});

			theme.onResize();

		},
		onLoad : function(){
			$('body').addClass('wp-loaded');
	
			// gifplayer
			jQuery('.gifplayer').gifplayer({
				label : '',
				wait: true,
				onPlay: function(){
					var src = 	this.data('gif');
						src = 	src.split("?new")
								this.data('gif',src[0] + '?new=' + Date.now() );
				},
				onStop: function() {
					//this.parent().find('.gp-gif-element').remove();
					console.log('stoped');
				}
			});

			if ( window.location.hash ) {
				if ( window.location.hash.substr(1, 6) == 'member' ) {
					$('html,body').animate({
						scrollTop: $(window.location.hash).offset().top - $('header').height() - $("#wpadminbar").height()
					}, 10);
				}
			}

			setTimeout( function(){


				if ( ! $('body').hasClass('intro-mask-away') ) {
											
					$('body').addClass('intro-mask-away'); // add body class after mask fades away

					setTimeout( function(){
						//$("#full-height section.active .gifplayer").gifplayer('play');
					}, 3000);
				}
					
			}, 5000);

			
		},
		onResize : function(){
			
			var memberBoxNameHeights 	= {};
			var offsetTop				= 0;

			$('.member-box-name-inner').css('height','auto');
			$('.member-box-name-inner').each(function(){
				offsetTop = Math.round($(this).offset().top);
				if ( memberBoxNameHeights[offsetTop] == null || memberBoxNameHeights[offsetTop] < $(this).outerHeight() ) {
					memberBoxNameHeights[offsetTop] = $(this).outerHeight();

				}
			});

			$('.member-box-name-inner').each(function(){
				var offsetTop = Math.round($(this).offset().top);
				$(this).data('height', memberBoxNameHeights[ offsetTop ]);
			});

			$('.member-box-name-inner').each(function(){
				$(this).height( $(this).data('height') );
			});
		},
		openNavigation : function() {

			// User scrolls after the last slide
			if ( $("#full-height .active.fp-completely").index() > 0 &&  $("#full-height .active.fp-completely").index() == ($("#full-height section").length - 1) && $(window).width() > 767 ) {
				
				// Open navigation
				//$('body').addClass('nav-visible index-section-nav-visible');

				//$('#main-nav').collapse('show');

				// Change the state of hamburger button
				//$('.hamburger').addClass('is-active');

			}

		}
	}
			
	$(document).ready( theme.onReady );
	$(window).load( theme.onLoad );
	$(window).resize( theme.onResize );

});