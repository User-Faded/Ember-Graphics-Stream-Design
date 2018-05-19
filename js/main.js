


// main.js

"use strict";
// Easing anchor links javascript

// smooth scroll to a specific section on the same page
	function smoothScroll (selector) {
		$('html, body').animate(
		{
			scrollTop: jQuery(selector).offset().top - 100
		},
		1000,
		'easeOutCubic');
	}


  $("#nav-Top").on('click', function(e) {
    smoothScroll ('#page-top'); // target destination div
    return false;
  });

	$("#nav-About").on('click', function(e) {
		smoothScroll ('#About'); // target destination div
		return false;
	});

  $("#nav-Portfolio").on('click', function(e) {
    smoothScroll ('#Portfolio'); // target destination div
    return false;
  });

  $("#nav-Contact").on('click', function(e) {
    smoothScroll ('#Contact'); // target destination div
    return false;
  });

	$("#logo").on('click', function(e) {
		smoothScroll ('#page-top'); // target destination div
		return false;
	});



	    function openNav() {
	        document.getElementById("myNav").style.height = "100%";
	    }

	    function closeNav() {
	        document.getElementById("myNav").style.height = "0%";
	    }

	    function closeImg(arr) {
	      document.getElementById(arr).style.height = "0%";

	    }

	    function openImg(arr) {
	      document.getElementById(arr).style.height = "100%";
	    }

	  var stopVideo = function ( element ) {

		var iframe = document.getElementById(element).querySelector( "iframe");

		var video = document.getElementById(element).querySelector("video");
		if ( iframe ) {
			var iframeSrc = iframe.src;
			iframe.src = iframeSrc;
		}
		if ( video ) {
			video.pause();
		}
	};

	    setTimeout(mail, 4000);

	    function mail(){
	        
					let a = $("#M-link");

	        let mail1 = "EmberGraphics";
	        let dot = String.fromCharCode(46);
	        let mail2 = "design";
	        let at = String.fromCharCode(64);
	        let mail3 = "gmail";
	        let mail4 = "com";

					a.attr('href', "mailto:" + mail1 + dot + mail2 + at + mail3 + dot + mail4);

	        a.text(mail1 + dot + mail2 + at + mail3 + dot + mail4);

	    }

	    $(document).scroll(function() {
	      $("#mainNav").offset().top>100?$("#mainNav").addClass("navbar-shrink"):$("#mainNav").removeClass("navbar-shrink")
	    });
