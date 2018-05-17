


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
