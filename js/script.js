/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/open-nav-mobile.js":
/*!***********************************!*\
  !*** ./src/js/open-nav-mobile.js ***!
  \***********************************/
/*! exports provided: openNavMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNavMobile", function() { return openNavMobile; });
function openNavMobile() {
  $(document).ready(function () {
    $('.log-in').click(function (e) {
      var container = $(".log-in form"); // if the target of the click isn't the container nor a descendant of the container

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.overlay, .log-in').removeClass('open');
        $('body').removeClass('overflow-hidden');
      }
    });
    $('.log-in__button').click(function () {
      $('.overlay, .log-in').addClass('open');
      $('body').addClass('overflow-hidden');
    });
    $('.overlay, .exit-form').click(function () {
      $('.overlay, .log-in').removeClass('open');
      $('body').removeClass('overflow-hidden');
    });
    $('.nav .item').click(function () {
      $('.nav .item').removeClass('active');
      $(this).addClass('active');
      localStorage.setItem('active', $(this).index());
    });
    $('.nav-mobile .item__mobile').click(function () {
      localStorage.setItem('active', $(this).index());
    });
    var ele = localStorage.getItem('active');
    $('.nav .item:eq(' + ele + ')').addClass('active');
    /* Venobox */

    $('.venobox').venobox({
      spinner: "three-bounce"
    });
    /* Nice Select */

    $('select').niceSelect();
    $(window).resize(function () {
      if ($(window).width() >= 992) {
        $('.nav-mobile').parent().hide();
      } else {
        $('.nav-mobile').parent().show();
      }
    });
    $('.course-outline .question').click(function () {
      $(this).next('.desc').slideToggle(300);
    });
    $('.icon-burger').click(function () {
      $('.nav-mobile').slideToggle(200);
    });
    $('.item__mobile').click(function () {
      $(this).find('.s-items__mobile').slideToggle(200);
      $(this).find('i').toggleClass('fa-plus fa-minus');
    });
    $('.top .title').click(function () {
      $(this).next('.list-items__ft').toggleClass('open');
      $(this).find('i').toggleClass('fa-plus fa-minus');
    }); // Position fixed for header when scroll down (header height + banner height)

    var largeBanner = 0,
        largeBannerPages = 0;

    if ($('.large-banner').innerHeight() == undefined) {
      largeBanner = 0;
    } else {
      largeBanner = $('.large-banner').innerHeight();
    }

    if ($('.large-banner-pages').innerHeight() == undefined) {
      largeBannerPages = 0;
    } else {
      largeBannerPages = $('.large-banner-pages').innerHeight();
    }

    var totalHeight = $('header').height() + largeBanner + largeBannerPages;
    $(window).scroll(function () {
      if ($(this).scrollTop() > totalHeight) {
        $('header').addClass('open');
      } else {
        $('header').removeClass('open');
      }
    }); // Prevent from checked input

    $('.disabled-radio, .disabled-checkbox').click(function () {
      $(".disabled-radio input, .disabled-checkbox input").prop('disabled', true);
    });
  });
}



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonial_slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial-slide.js */ "./src/js/testimonial-slide.js");
/* harmony import */ var _open_nav_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-nav-mobile.js */ "./src/js/open-nav-mobile.js");


Object(_testimonial_slide_js__WEBPACK_IMPORTED_MODULE_0__["testimonialSlide"])();
Object(_open_nav_mobile_js__WEBPACK_IMPORTED_MODULE_1__["openNavMobile"])();

/***/ }),

/***/ "./src/js/testimonial-slide.js":
/*!*************************************!*\
  !*** ./src/js/testimonial-slide.js ***!
  \*************************************/
/*! exports provided: testimonialSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testimonialSlide", function() { return testimonialSlide; });
function testimonialSlide() {
  $(document).ready(function () {
    $('.testimonial-slideshow').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      dots: false
    }); // var mySwiper = new Swiper('.swiper-container', {
    //   // Optional parameters
    //   direction: 'horizontal',
    //   loop: true,
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     // renderBullet: function (index, className) {
    //     //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     // },
    //   },
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // })
  });
}



/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/script.js */"./src/js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map