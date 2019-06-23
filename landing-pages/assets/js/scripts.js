(
	function ( $ ) {
		"use strict";

		//wow js
		new WOW().init();
        //nice js
        $( 'select' ).niceSelect();

		// scrollUp
		$.scrollUp( {
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		} );


		// Nivo slider (main slider homepage)




		$( '#main-slider' ).slick( {
			dots: true,
			infinite: false,
			speed: 300,
			fade: true,
			nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
			prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
			slidesToShow: 1,
			slidesToScroll: 1,
			customPaging: function ( slider, i ) {
				var linkText = jQuery( slider.$slides[i] ).find( '.slide-custom-link' ).html();
				if ( linkText ) {
					return '<div>' + linkText + '</div>';
				}
				else {
					return '-';
				}
			}
		} );


		//services slider
		$( ".services-slider" ).owlCarousel( {
			autoPlay: true,
			slideSpeed: 2000,
			pagination: false,
			navigation: true,
			items: 4,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 2],
			itemsMobile: [479, 1]
		} );


		//domaining slider
		$( ".domaing-slider" ).owlCarousel( {
			autoPlay: true,
			slideSpeed: 2000,
			pagination: false,
			navigation: true,
			items: 7,
			/* transitionStyle : "fade", */    /* [This code for animation ] */
			navigationText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 2],
			itemsMobile: [479, 1]
		} );
		//partner logo
		$( ".partner-slider" ).owlCarousel( {
			autoPlay: true,
			slideSpeed: 2000,
			pagination: false,
			navigation: false,
			items: 6,
			/* transitionStyle : "fade", */    /* [This code for animation ] */
			navigationText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
			itemsDesktop: [1199, 5],
			itemsDesktopSmall: [980, 4],
			itemsTablet: [768, 4],
			itemsMobile: [479, 1]
		} );

		$( '.responsive' ).slick( {
			dots: true,
			infinite: false,
			speed: 300,
			nextArrow: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
			prevArrow: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
			slidesToShow: 3,
			slidesToScroll: 1,
            variableWidth: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 750,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						autoplay:true,
                        arrows: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                        autoplay:true,
                        arrows: false
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		} );

        $( '.latest-slider' ).slick( {
            dots: false,
			autoplay: true,
            infinite: false,
            speed: 1000,
            nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        } );

		$( '.slider-price' ).slick( {
            dots: false,
            infinite: false,
            speed: 1000,
            nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
						arrows: false,
                        speed: 1000,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1000,
                        arrows: false,
                        infinite: true,
                        autoplay: true

                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        } );

        $( '.slider-price1' ).slick( {
            dots: false,
            infinite: false,
            speed: 300,
            nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay:true,
                        arrows: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        } );

        $(document).on('ready', function () {
            $('.mix-it-up-container').each(function () {
                mixitup($(this));
            });
        });

        jQuery(document).ready(function($) {
            $('.counter-1').counterUp({
                delay: 10,
                time: 2000
            });
        });

		// Function to toggle between prices of different durations like, monthly/yearly
		function toggleComparisonPrice( table_id ) {
			var $table = table_id;
			$table.find( '.wpct_price_toggle input[type="radio"]' ).on( 'change', function () {
				var duration = jQuery( this ).data( 'duration' );
				//var orderUrl = jQuery( this ).data( 'orderurl' );
				$table.find( '.wpct_price > .wpct_holder' ).hide();
				$table.find( '.wpct_price > .wpct_holder.' + duration ).show();
				$table.find( '.wpct_discounts_container > .wpct_holder' ).hide();
				$table.find( '.wpct_discounts_container > .wpct_holder.' + duration ).show();
				$table.find( '.wpct_button > .wpct_holder' ).hide();
				$table.find( '.wpct_button > .wpct_holder.' + duration ).show();
				//$table.find('.wpct_submit.whmpress_order_button').attr('href', orderUrl);
				//$table.find('.wpct_submit-button').attr('href', orderUrl);
				jQuery( this ).toggleClass( 'active' );
			} );
		}
		toggleComparisonPrice( jQuery( '#wpct_comparison_table_345081789' ) )
	}
)( jQuery );

