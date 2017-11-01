/*
 * File: slideshow.js
 * Author: Nick McCormick (Faded)
 * Date: October 30, 2017
 * Purpose: Animate the slideshow.
 */

'use strict';

function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }



(function slideShow(){

	var currentPic = 0;
	var slides = document.getElementsByClassName("img");


	setInterval(function() {
			for (var i = 0; i < slides.length; i++) {
				slides[i].style.opacity = 0;
				}

			// currentPic = (currentPic != slides.length - 1) ? currentPic + 1 : 0;
			currentPic = randomInt(0, (slides.length - 1));
			slides[currentPic].style.opacity = 1.0;
	}, 20000);
})();
