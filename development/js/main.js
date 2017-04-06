// JS

window.onload = function() {

// Variable

	// Loader
	var loader = $('.loader');
	// Logo
	var logo = $('nav .logo');
	// Hamburger
	var hamburger = $('nav.border-nav .hamburger');
	var hamburgerLine = $('nav .hamburger .line');
	// Border nav
	var borderNav = $('nav.border-nav');
	// Navigation
	var navigation = $("nav.menu");
	var navigationElemBlock = $("nav.menu ul");
	var navigationElem = $("nav.menu ul li");
	var navigationElemAbout = $("nav.menu ul li.about");
	var navigationElemContact = $("nav.menu ul li.contact");
	// PopUp button
	var arrowLink = $('#index nav .arrow-link');
	var arrowLinkArrow = $('#index nav .arrow-link .arrow');
	var arrowLinkParagraph = $('#index nav .arrow-link p');
	// PopUp info
	var aboutInfo = $('.about-info');
	var contactInfo = $('.contact-info');

	var aboutArrowContainer = $(".arrow-link .arrow-about");
	var aboutParagraph = $(".arrow-link .arrow-about p");
	var aboutArrow = $(".arrow-link .arrow-about .arrow");
	var aboutPopUp = $(".about-pop-up");

	var contactArrowContainer = $(".arrow-link .arrow-contact");
	var contactParagraph = $(".arrow-link .arrow-contact p");
	var contactArrow = $(".arrow-link .arrow-contact .arrow");
	var contactPopUp = $(".contact-pop-up");

	var socialMedia = $("nav .social-media");
	var phone = $("nav .phone");

	var content = $(".section.header .content");
	var scroolDown = $(".scrool-down");

	var videoBG = $(".section.header video");
	var videoBGdarken = $(".section.header .video-darken");

// GSAP Animation

	// var tl = new TimelineMax();

	// tl.to(loader, .5, { opacity: "0", ease: Power2.easeInOut }, 2) // Opacity for loader
	// 	.to(loader, 0, { zIndex: "-99999" }) // Z-Index for loader
	// 	.to(hamburger, 0, { display: "block" }, -1) // Display for hamburger
	// 	.to(logo, 1, { left: "0", transform: "translateX(0)", ease: Power4.easeOut }, 2) // Animation logo
	// 	.to(hamburgerLine, .5, { opacity: "1", ease: Power4.easeInOut }, 2) // Opacity for hamburger

// Function

	// Scrolling parameters

	function scrollingParameters(param) {
		if (param == 'enable') {
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
		} else if (param == 'disable') {
			$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
		}
	}

	// Function for animation pop-up block

	function popUpAnimation(target, action) {
		if (target == 'about') {
			if (action == 'open') {
				aboutArrowContainer.addClass("open");
				aboutPopUp.addClass("open");
				contactArrow.addClass("btn-close");
				contactParagraph.addClass("btn-close");
				hamburger.addClass("open-pop-up-about");
				scroolDown.addClass("hide");
				aboutInfo.addClass("show");
				content.addClass("hide");
				borderNav.addClass("about-black");
				videoBG.addClass("blur");
				videoBGdarken.addClass("visible");
				scrollingParameters('disable');
			} else if (action == 'close') {
				aboutArrowContainer.removeClass("open");
				aboutPopUp.removeClass("open");
				contactArrow.removeClass("btn-close");
				contactParagraph.removeClass("btn-close");
				hamburger.removeClass("open-pop-up-about");
				scroolDown.removeClass("hide");
				aboutInfo.removeClass("show");
				content.removeClass("hide");
				borderNav.removeClass("about-black");
				videoBG.removeClass("blur");
				videoBGdarken.removeClass("visible");
				scrollingParameters('enable');
			}
		} else if (target == 'contact') {
			if (action == 'open') {
				contactArrowContainer.addClass("open");
				contactPopUp.addClass("open");
				aboutArrow.addClass("btn-close");
				aboutParagraph.addClass("btn-close");
				hamburger.addClass("open-pop-up-contact");
				scroolDown.addClass("hide");
				contactInfo.addClass("show");
				content.addClass("hide");
				borderNav.addClass("contact-black");
				videoBG.addClass("blur");
				videoBGdarken.addClass("visible");
				scrollingParameters('disable');
			} else if (action == 'close') {
				contactArrowContainer.removeClass("open");
				contactPopUp.removeClass("open");
				aboutArrow.removeClass("btn-close");
				aboutParagraph.removeClass("btn-close");
				hamburger.removeClass("open-pop-up-contact");
				scroolDown.removeClass("hide");
				contactInfo.removeClass("show");
				content.removeClass("hide");
				borderNav.removeClass("contact-black");
				videoBG.removeClass("blur");
				videoBGdarken.removeClass("visible");
				scrollingParameters('enable');
			}
		}
	};

	// Function click on navigation elements

	function clickOnNavElements(target) {
		target.click(function() {
			popUpAnimation('about', 'close');
			popUpAnimation('contact', 'close');
		});
	}

	// Function click on arrow button for open pop-up

	function clickOnPopUpButton(target) {
		if (target == 'about') {
			aboutArrowContainer.click(function() {
				if (!aboutArrow.hasClass("btn-close")) {
					popUpAnimation('about', 'open');
				} else {
					popUpAnimation('contact', 'close');
				}
			});
		} else if (target == 'contact') {
			contactArrowContainer.click(function() {
				if (!contactArrow.hasClass("btn-close")) {
					popUpAnimation('contact', 'open');
				} else {
					popUpAnimation('about', 'close');
				}
			});
		}
	}

	//

	function navAnimation(action) {
		if (action == 'open') {
			hamburger.addClass("open");
			navigation.addClass("open");
			navigationElemBlock.addClass("fade-in-down");
		} else if (action == 'close') {
			hamburger.removeClass("open");
			navigation.removeClass("open");
			navigationElemBlock.removeClass("fade-in-down");
		}
	}

	//	Nav desktop

	$(hamburger).click(function() {
		if ($("body").width() >= 768) {
			if ($(hamburger).hasClass("open")) {
				navAnimation('close');
			} else {
				navAnimation('open');
			}
		} else {
			if ($(hamburger).hasClass("open")) {
				navAnimation('close');
			} else if ($(hamburger).hasClass("open-pop-up-about")) {
				popUpAnimation('about', 'close');
			} else if ($(hamburger).hasClass("open-pop-up-contact")) {
				popUpAnimation('contact', 'close');
			}	else {
				navAnimation('open');
			}
		}
	});

	$(navigationElem).click(function() {
			navAnimation('close');
	});

	$(navigationElemAbout).click(function() {
			navAnimation('close');
			popUpAnimation('about', 'open');
	});

	$(navigationElemContact).click(function() {
			navAnimation('close');
			popUpAnimation('contact', 'open');
	});

	// Init function

	clickOnPopUpButton('about');
	clickOnPopUpButton('contact');

	clickOnNavElements($(".hamburger"));
}