function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>About Me</h1>\n\n<p>\n    My name is Laura and for as long as I can remember, I've been into crafty projects.\n    Recently, I discovered a passion for sewing and in this area you'll find some of my creations. \n</p>\n\n<p>Feel free to shoot me a message if you see anything you like or if you have any ideas of your own!</p>\n\n<img class=\"portrait\" src=\"./assets/images/portrait.png\"/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/carousel-widget/carousel-widget.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/carousel-widget/carousel-widget.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCarouselWidgetCarouselWidgetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"carousel\">\n    <ng-container *ngFor=\"let slide of slides; let i = index\">\n        <img\n            *ngIf=\"i === currentSlide\"\n            [src]=\"slide\"\n            class=\"slide\"\n            [@slideAnimation]=\"animationType\"\n        />\n    </ng-container>\n\n    \n</div>\n<!-- controls -->\n<button class=\"control prev carousel-height\" (click)=\"onPreviousClick()\">\n    <span class=\"arrow left\"></span>\n</button>\n<button class=\"control next carousel-height\" (click)=\"onNextClick()\">\n    <span class=\"arrow right\"></span>\n</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"social-bar\">\n    <a mat-button class=\"social-button\" href=\"mailto:{{emailContact}}\" target=\"_blank\"><mat-icon class=\"social-icon\" inline=true>mail_outline</mat-icon></a>\n    \n    <a mat-button class=\"social-button\" href=\"https://www.instagram.com/{{instagramContact}}/?hl=en\" target=\"_blank\"><mat-icon class=\"social-icon\" inline=true>camera_alt</mat-icon></a>\n    \n    <a mat-button class=\"social-button\" href=\"{{shopContact}}\" target=\"_blank\"><mat-icon class=\"social-icon\" inline=true>store</mat-icon></a>\n</span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/faq/faq.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/faq/faq.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>FAQ</h1>\n\n<mat-accordion>\n    <mat-expansion-panel class=\"filter-panel\" *ngFor=\"let faq of FAQs; let i = index\">\n        <mat-expansion-panel-header >\n            <mat-panel-title class=\"faq-question\" [ngClass]=\"{'reduce-font': faq.longQuestion === true}\">\n                {{faq.question}}\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p>{{faq.answer}}</p>\n    </mat-expansion-panel>\n</mat-accordion>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filter-widget/filter-widget.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filter-widget/filter-widget.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFilterWidgetFilterWidgetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-accordion>\n    <mat-expansion-panel class=\"filter-panel\">\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                {{filterProperty}}\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n            <mat-checkbox *ngFor=\"let filter of filterCheckBoxes | keyvalue; let i = index\" class=\"mat-menu-item\" (change)=\"toggleFilter(filter, $event)\" [checked]=\"filter.value\"> {{ filter.key }}</mat-checkbox>\n    </mat-expansion-panel>\n</mat-accordion>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"bar footer\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bar fixed-bottom\">\n    <div class=\"container footer-container\">\n      <p class=\"m-0 text-center text-white footer-link nav-link\" inline=\"true\">\n        Copyright &copy; Robert Abarrota 2020\n      </p>\n\n      <a class=\"m-0 text-center text-white footer-link nav-link\" inline=\"true\" [routerLink]=\"['/TermsConditions']\">\n        Terms & Conditions\n      </a>\n\n      <a class=\"m-0 text-center text-white footer-link nav-link\" inline=\"true\" [routerLink]=\"['/PrivacyPolicy']\">\n        Privacy Policy\n      </a>\n    </div>\n  </nav>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"carousel-container carousel-height\">\n    <app-carousel-widget [slides]=\"slides\" [animationType]=\"animationType\"></app-carousel-widget>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/privacy-policy/privacy-policy.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/privacy-policy/privacy-policy.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Also kidding</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/product-details/product-details.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/product-details/product-details.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img class=\"product-image\" [src]=\"data.imagePath\" alt=\"\" (click)=\"close()\">\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/shop-page/shop-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/shop-page/shop-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopPageShopPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row shop-page\">\n    <div class=\"col-lg-3\">\n        <mat-expansion-panel class=\"filter-panel box-shadow\" #panel (mouseenter)=\"panel.open()\" (mouseleave)=\"panel.close()\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Filters\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <app-filter-widget *ngFor=\"let filter of filters\" [filterProperty]=\"filter.name\" [totalProducts]=\"totalProducts\" (applyFilter)=\"applyFilter($event)\"></app-filter-widget>\n            <button mat-button class=\"clear-filter-button\" (click)=\"resetFilters()\">Clear Filters</button>\n        </mat-expansion-panel>\n    </div>\n    <!-- /.col-lg-3 -->\n\n    <div class=\"col-lg-9\">\n        <div class=\"row\">\n            \n            <div *ngFor=\"let product of displayProducts; let i = index\" class=\"col-lg-4 col-md-6 mb-4 shop-product\">\n                <div class=\"card h-100 box-shadow\">\n                    <a (click)=\"viewDetails(product.images[0])\" class=\"product-image\"><img class=\"card-img-top\" [src]=\"product.images[0]\" alt=\"\"></a>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">\n                        <a (click)=\"viewDetails(product.images[0])\" class=\"product-details-link\">\n                            <span ng-if=\"product.pattern\">{{product.pattern}}</span>\n                            <span ng-if=\"product.scent\">{{product.scent}}</span>\n                        </a>\n                        </h4>\n                    </div>\n                    <div class=\"card-footer\">\n                        <small class=\"text-muted\">${{ product.price }}</small>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <div class=\"col-lg-4 col-md-6 mb-4\">\n                <div class=\"card h-100\">\n                <a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">\n                    <a href=\"#\">Item One</a>\n                    </h4>\n                    <h5>$24.99</h5>\n                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>\n                </div>\n                <div class=\"card-footer\">\n                    <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;</small>\n                </div>\n                </div>\n            </div> -->\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/terms-conditions/terms-conditions.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/terms-conditions/terms-conditions.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTermsConditionsTermsConditionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Just kidding</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/top-nav-bar/top-nav-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/top-nav-bar/top-nav-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTopNavBarTopNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bar fixed-top top-index box-shadow\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/Home']\" (click)=\"ToggleNavBar()\">Laura's Sew Shop</a>\n      <button class=\"navbar-toggler\" type=\"button\" #toggler data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"panel.close()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/Home']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <!-- <button class=\"nav-link shop-menu\" [matMenuTriggerFor]=\"menu\">Shop<mat-icon inline=true class=\"shop-arrow\">arrow_drop_down</mat-icon></button> -->\n              <mat-expansion-panel class=\"expansion-panel\" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" #panel>\n                <mat-expansion-panel-header class=\"nav-header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\n                  <mat-panel-title class=\"nav-link panel-title\">\n                    <span class=\"nav-link\">Browse</span>\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                  <a class=\"nav-link mat-menu-item\" [routerLink]=\"['/Shop', 'Scrunchies']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Scrunchies</a>\n                  <a class=\"nav-link mat-menu-item\" [routerLink]=\"['/Shop', 'Pouches']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Pouches</a>\n                  <a class=\"nav-link mat-menu-item\" [routerLink]=\"['/Shop', 'Bandanas']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Bandanas</a>\n                  <a class=\"nav-link mat-menu-item\" [routerLink]=\"['/Shop', 'Masks']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Masks</a>\n                  <a class=\"nav-link mat-menu-item\" [routerLink]=\"['/Shop', 'Candles']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Candles</a>\n                  <a class=\"nav-link mat-menu-item\" [routerLink]=\"['/Shop', 'All']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">All</a>\n              </mat-expansion-panel>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/About']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/Contact']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/FAQ']\" [routerLinkActive]=\"'active'\" (click)=\"ToggleNavBar()\">FAQ</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"home\">\n\n  <!-- Navigation -->\n  <app-top-nav-bar></app-top-nav-bar>\n\n  <!-- Page Content -->\n  <div id=\"page-container\" class=\"container\">\n    <div id=\"content-wrap\">\n      <router-outlet></router-outlet>\n    </div>\n\n  \n  </div>\n  <app-footer></app-footer>\n</body>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Components/about/about.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Components/about/about.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".portrait {\n  width: 25vw;\n  height: auto;\n  margin: auto;\n  display: block;\n  border-radius: 50%;\n  border: 0.5em solid rgba(255, 166, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydHJhaXQge1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMC41ZW0gc29saWQgcmdiYSgyNTUsIDE2NiwgMCwgMC4xOCk7XG59IiwiLnBvcnRyYWl0IHtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDAuNWVtIHNvbGlkIHJnYmEoMjU1LCAxNjYsIDAsIDAuMTgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/Components/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/Components/carousel-widget/carousel-widget.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/carousel-widget/carousel-widget.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCarouselWidgetCarouselWidgetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  flex: 1;\n}\n\n.carousel {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.5em;\n  margin: auto;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  margin: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n\n.slide:hover {\n  transform: scale(1.025);\n}\n\n.control {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  /* Position the buttons */\n}\n\n.control:hover, .control:focus {\n  opacity: 1;\n}\n\n.control.next {\n  right: 0;\n  top: 0;\n}\n\n.control.prev {\n  left: 0;\n  top: 0;\n}\n\n@media only screen and (min-width: 770px) {\n  .control.next {\n    right: 15vw;\n    top: 0;\n  }\n  .control.prev {\n    left: 15vw;\n    top: 0;\n  }\n}\n\n/* style the arrows */\n\n.arrow {\n  display: block;\n  border-left: 0.1em solid #343a40eb;\n  border-bottom: 0.1em solid #343a40eb;\n  width: 0.5em;\n  height: 0.5em;\n}\n\n.arrow.left {\n  transform: rotate(45deg);\n}\n\n.arrow.right {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2Nhcm91c2VsLXdpZGdldC9jYXJvdXNlbC13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvY2Fyb3VzZWwtd2lkZ2V0L2Nhcm91c2VsLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFFQSxnRUFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtBQ0FKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsOERBQUE7RUFNQSx5QkFBQTtBQ1RKOztBREtJO0VBQ0ksVUFBQTtBQ0hSOztBRE9JO0VBQ0ksUUFBQTtFQUNBLE1BQUE7QUNMUjs7QURPSTtFQUNJLE9BQUE7RUFDQSxNQUFBO0FDTFI7O0FET0k7RUFDSTtJQUNJLFdBQUE7SUFDQSxNQUFBO0VDTFY7RURPTTtJQUNJLFVBQUE7SUFDQSxNQUFBO0VDTFY7QUFDRjs7QURTQSxxQkFBQTs7QUFDQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNOSjs7QURRSTtFQUNJLHdCQUFBO0FDTlI7O0FEUUk7RUFDSSx5QkFBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jYXJvdXNlbC13aWRnZXQvY2Fyb3VzZWwtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGZsZXg6IDE7XG59XG4gIFxuLmNhcm91c2VsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2xpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC8vIHpvb20gZWZmZWN0IG9uIGhvdmVyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNsaWRlOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTmV4dCBhbmQgUHJldiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4uY29udHJvbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IDA7IC8vIHJlbW92ZSBibHVlIG91dGxpbmUgYm9yZGVyLCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlIHN0aWxsIGZvY3Vzc2FibGUgZm9yIGFjY2Vzc2liaWxpdHlcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDgwJTtcbiAgICAvLyBvcGFjaXR5IGVmZmVjdCBvbiBob3ZlclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuXG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLyogUG9zaXRpb24gdGhlIGJ1dHRvbnMgKi9cbiAgICAmLm5leHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAmLnByZXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgICAgICAgJi5uZXh0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXZ3O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgICYucHJldiB7XG4gICAgICAgICAgICBsZWZ0OiAxNXZ3O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBzdHlsZSB0aGUgYXJyb3dzICovXG4uYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCAjMzQzYTQwZWI7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgIzM0M2E0MGViO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBoZWlnaHQ6IDAuNWVtO1xuICAgIFxuICAgICYubGVmdCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgJi5yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgfVxufSIsIjpob3N0IHtcbiAgZmxleDogMTtcbn1cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG5cbi5zbGlkZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xufVxuXG4uY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiA4MCU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICAvKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xufVxuLmNvbnRyb2w6aG92ZXIsIC5jb250cm9sOmZvY3VzIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250cm9sLm5leHQge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmNvbnRyb2wucHJldiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgLmNvbnRyb2wubmV4dCB7XG4gICAgcmlnaHQ6IDE1dnc7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5jb250cm9sLnByZXYge1xuICAgIGxlZnQ6IDE1dnc7XG4gICAgdG9wOiAwO1xuICB9XG59XG5cbi8qIHN0eWxlIHRoZSBhcnJvd3MgKi9cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogMC4xZW0gc29saWQgIzM0M2E0MGViO1xuICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCAjMzQzYTQwZWI7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbn1cbi5hcnJvdy5sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmFycm93LnJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/carousel-widget/carousel-widget.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/carousel-widget/carousel-widget.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CarouselWidgetComponent */

  /***/
  function srcAppComponentsCarouselWidgetCarouselWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselWidgetComponent", function () {
      return CarouselWidgetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _carousel_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carousel.animations */
    "./src/app/Components/carousel-widget/carousel.animations.ts");

    var CarouselWidgetComponent = /*#__PURE__*/function () {
      function CarouselWidgetComponent() {
        _classCallCheck(this, CarouselWidgetComponent);

        this.animationType = _carousel_animations__WEBPACK_IMPORTED_MODULE_3__["AnimationType"].Scale;
        this.currentSlide = 0;
      }

      _createClass(CarouselWidgetComponent, [{
        key: "onPreviousClick",
        value: function onPreviousClick() {
          var previous = this.currentSlide - 1;
          this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
          console.log("previous clicked, new current slide is: ", this.currentSlide);
        }
      }, {
        key: "onNextClick",
        value: function onNextClick() {
          var next = this.currentSlide + 1;
          this.currentSlide = next === this.slides.length ? 0 : next;
          console.log("next clicked, new current slide is: ", this.currentSlide);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.preloadImages(); // for the demo
        }
      }, {
        key: "preloadImages",
        value: function preloadImages() {
          var _iterator = _createForOfIteratorHelper(this.slides),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var slide = _step.value;
              new Image().src = slide;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return CarouselWidgetComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselWidgetComponent.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselWidgetComponent.prototype, "animationType", void 0);
    CarouselWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-carousel-widget",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel-widget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/carousel-widget/carousel-widget.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideAnimation", [
      /* scale */
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => scale", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["scaleIn"], {
        params: {
          time: "500ms"
        }
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("scale => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["scaleOut"], {
        params: {
          time: "500ms"
        }
      })]),
      /* fade */
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => fade", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"], {
        params: {
          time: "500ms"
        }
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("fade => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["fadeOut"], {
        params: {
          time: "500ms"
        }
      })]),
      /* flip */
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => flip", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["flipIn"], {
        params: {
          time: "500ms"
        }
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("flip => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["flipOut"], {
        params: {
          time: "500ms"
        }
      })]),
      /* JackInTheBox */
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => jackInTheBox", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["jackIn"], {
        params: {
          time: "700ms"
        }
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("jackInTheBox => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_3__["jackOut"], {
        params: {
          time: "700ms"
        }
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel-widget.component.scss */
      "./src/app/Components/carousel-widget/carousel-widget.component.scss"))["default"]]
    })], CarouselWidgetComponent);
    /***/
  },

  /***/
  "./src/app/Components/carousel-widget/carousel.animations.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Components/carousel-widget/carousel.animations.ts ***!
    \*******************************************************************/

  /*! exports provided: AnimationType, fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut, scaleIn, scaleOut */

  /***/
  function srcAppComponentsCarouselWidgetCarouselAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationType", function () {
      return AnimationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return fadeIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return fadeOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flipIn", function () {
      return flipIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flipOut", function () {
      return flipOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jackIn", function () {
      return jackIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jackOut", function () {
      return jackOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn", function () {
      return scaleIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleOut", function () {
      return scaleOut;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var AnimationType;

    (function (AnimationType) {
      AnimationType["Scale"] = "scale";
      AnimationType["Fade"] = "fade";
      AnimationType["Flip"] = "flip";
      AnimationType["JackInTheBox"] = "jackInTheBox";
    })(AnimationType || (AnimationType = {})); // =========================
    // Fade
    // =========================


    var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }))]);
    var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }))]); // =========================
    // Flip
    // =========================

    var flipIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1,
      transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: "perspective(400px)",
      offset: 1
    })]))]);
    var flipOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([// just hide it
    ]); // =========================
    // Jack in the box
    // =========================

    var jackIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{time}} ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      animationFillMode: "forwards",
      transform: "scale(0.1) rotate(30deg)",
      transformOrigin: "center bottom",
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: "rotate(-10deg)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: "rotate(3deg)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: "perspective(400px)",
      offset: 1
    })]))]);
    var jackOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([// just hide it
    ]);
    var scaleIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: "scale(0.5)"
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1,
      transform: "scale(1)"
    }))]);
    var scaleOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: "scale(0.5)"
    }))]);
    /***/
  },

  /***/
  "./src/app/Components/contact/contact.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/Components/contact/contact.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".social-button {\n  width: 40px !important;\n  min-width: 40px !important;\n  padding: 0 !important;\n  line-height: 40px !important;\n}\n\n.social-icon {\n  height: 40px !important;\n  width: 40px !important;\n  font-size: 40px !important;\n  font-family: \"Material Icons Outlined\";\n}\n\n.social-bar {\n  text-align: center;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbi5zb2NpYWwtaWNvbiB7XG4gICAgaGVpZ2h0OjQwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDo0MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG59XG5cbi5zb2NpYWwtYmFyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLnNvY2lhbC1idXR0b24ge1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zIE91dGxpbmVkXCI7XG59XG5cbi5zb2NpYWwtYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_properties_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Services/properties/properties.service */
    "./src/app/Services/properties/properties.service.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(propertiesService) {
        _classCallCheck(this, ContactComponent);

        this.propertiesService = propertiesService;
        this.emailContact = "";
        this.instagramContact = "";
        this.shopContact = "";
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.emailContact = this.propertiesService.getEmailContact();
          this.instagramContact = this.propertiesService.getInstagramContact();
          this.shopContact = this.propertiesService.getShopContact();
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _Services_properties_properties_service__WEBPACK_IMPORTED_MODULE_2__["PropertiesService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/Components/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/Components/faq/faq.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/Components/faq/faq.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".faq-question {\n  font-weight: bold;\n}\n\n.filter-panel {\n  margin-bottom: 10px;\n  border-radius: 10px !important;\n}\n\n.reduce-font {\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFxLXF1ZXN0aW9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZpbHRlci1wYW5lbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWR1Y2UtZm9udCB7XG4gICAgZm9udC1zaXplOiA5MCVcbn0iLCIuZmFxLXF1ZXN0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maWx0ZXItcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWR1Y2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogOTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/faq/faq.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/Components/faq/faq.component.ts ***!
    \*************************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppComponentsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/data/data.service */
    "./src/app/Services/data/data.service.ts");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent(dataService) {
        _classCallCheck(this, FaqComponent);

        this.dataService = dataService;
        this.FAQs = this.dataService.getFAQs();
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/faq/faq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.scss */
      "./src/app/Components/faq/faq.component.scss"))["default"]]
    })], FaqComponent);
    /***/
  },

  /***/
  "./src/app/Components/filter-widget/filter-widget.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/filter-widget/filter-widget.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFilterWidgetFilterWidgetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter-panel {\n  margin-bottom: 5px;\n}\n\n.mat-menu-item {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2ZpbHRlci13aWRnZXQvZmlsdGVyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9maWx0ZXItd2lkZ2V0L2ZpbHRlci13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9maWx0ZXItd2lkZ2V0L2ZpbHRlci13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCIuZmlsdGVyLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/filter-widget/filter-widget.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Components/filter-widget/filter-widget.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FilterWidgetComponent */

  /***/
  function srcAppComponentsFilterWidgetFilterWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterWidgetComponent", function () {
      return FilterWidgetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FilterWidgetComponent = /*#__PURE__*/function () {
      function FilterWidgetComponent(router) {
        _classCallCheck(this, FilterWidgetComponent);

        this.router = router;
        this.filterCheckBoxes = new Map();
        this.totalProducts = [];
        this.applyFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FilterWidgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (val) {
            _this.updateFilterBoxes();
          });
          this.updateFilterBoxes();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.updateFilterBoxes();
        }
      }, {
        key: "updateFilterBoxes",
        value: function updateFilterBoxes() {
          var _this2 = this;

          this.filterCheckBoxes.clear();
          this.totalProducts.forEach(function (item, index) {
            if (!_this2.filterCheckBoxes.has(item[_this2.filterProperty.toLowerCase()]) && item[_this2.filterProperty.toLocaleLowerCase()]) _this2.filterCheckBoxes.set(item[_this2.filterProperty.toLowerCase()], false);
          });
          this.sortFilters();
          this.applyFilter.emit({
            propertyName: this.filterProperty,
            filterMap: this.filterCheckBoxes
          });
        }
      }, {
        key: "sortFilters",
        value: function sortFilters() {
          var checkboxesArray = Array.from(this.filterCheckBoxes);
          var sortedList = new Map();
          checkboxesArray.sort();
          checkboxesArray.forEach(function (element) {
            sortedList.set(element[0], element[1]);
          });
          this.filterCheckBoxes = sortedList;
        }
      }, {
        key: "toggleFilter",
        value: function toggleFilter(filter, event) {
          this.filterCheckBoxes.set(filter.key, event.checked);
          this.applyFilter.emit({
            propertyName: this.filterProperty,
            filterMap: this.filterCheckBoxes
          });
        }
      }]);

      return FilterWidgetComponent;
    }();

    FilterWidgetComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FilterWidgetComponent.prototype, "totalProducts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FilterWidgetComponent.prototype, "filterProperty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FilterWidgetComponent.prototype, "applyFilter", void 0);
    FilterWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter-widget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filter-widget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filter-widget/filter-widget.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filter-widget.component.scss */
      "./src/app/Components/filter-widget/filter-widget.component.scss"))["default"]]
    })], FilterWidgetComponent);
    /***/
  },

  /***/
  "./src/app/Components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 2% !important;\n  padding-bottom: 2% !important;\n}\n\n.footer-link {\n  width: 33%;\n  font-size: 0.6em;\n}\n\n@media only screen and (min-width: 420px) {\n  .footer-link {\n    width: 33%;\n    font-size: 0.8em;\n  }\n}\n\n.footer-container {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMiUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1saW5rIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgICAuZm9vdGVyLWxpbmsge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG59XG4iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMiUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItbGluayB7XG4gIHdpZHRoOiAzMyU7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgLmZvb3Rlci1saW5rIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cbi5mb290ZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/Components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/Components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/Components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carousel-container {\n  display: block;\n  width: 290px;\n  padding: 0em 2em;\n  margin: auto;\n}\n\n@media only screen and (min-width: 420px) {\n  .carousel-container {\n    display: block;\n    width: 394px;\n    padding: 0em 2em;\n    margin: auto;\n  }\n}\n\n.home-colour {\n  background: lavenderblush;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgcGFkZGluZzogMGVtIDJlbTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzOTRweDtcbiAgICAgICAgcGFkZGluZzogMGVtIDJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4uaG9tZS1jb2xvdXIge1xuICAgIGJhY2tncm91bmQ6IGxhdmVuZGVyYmx1c2g7XG59IiwiLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjkwcHg7XG4gIHBhZGRpbmc6IDBlbSAyZW07XG4gIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCkge1xuICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzk0cHg7XG4gICAgcGFkZGluZzogMGVtIDJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbi5ob21lLWNvbG91ciB7XG4gIGJhY2tncm91bmQ6IGxhdmVuZGVyYmx1c2g7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Services/data/data.service */
    "./src/app/Services/data/data.service.ts");
    /* harmony import */


    var _carousel_widget_carousel_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../carousel-widget/carousel-widget.component */
    "./src/app/Components/carousel-widget/carousel-widget.component.ts");
    /* harmony import */


    var _carousel_widget_carousel_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../carousel-widget/carousel.animations */
    "./src/app/Components/carousel-widget/carousel.animations.ts");

    var HomeComponent = function HomeComponent(dataService) {
      _classCallCheck(this, HomeComponent);

      this.dataService = dataService;
      this.slides = this.dataService.getAllCarouselImages();
      this.animationType = _carousel_widget_carousel_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationType"].Scale;
    };

    HomeComponent.ctorParameters = function () {
      return [{
        type: _Services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_carousel_widget_carousel_widget_component__WEBPACK_IMPORTED_MODULE_3__["CarouselWidgetComponent"], {
      "static": false
    })], HomeComponent.prototype, "carousel", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/Components/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/Components/privacy-policy/privacy-policy.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/privacy-policy/privacy-policy.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Components/privacy-policy/privacy-policy.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/privacy-policy/privacy-policy.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyPolicyComponent = /*#__PURE__*/function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/privacy-policy/privacy-policy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.component.scss */
      "./src/app/Components/privacy-policy/privacy-policy.component.scss"))["default"]]
    })], PrivacyPolicyComponent);
    /***/
  },

  /***/
  "./src/app/Components/product-details/product-details.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/product-details/product-details.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductDetailsProductDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-image {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIucHJvZHVjdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/product-details/product-details.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/product-details/product-details.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppComponentsProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ProductDetailsComponent = /*#__PURE__*/function () {
      function ProductDetailsComponent(dialogRef, data) {
        _classCallCheck(this, ProductDetailsComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ProductDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/product-details/product-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.component.scss */
      "./src/app/Components/product-details/product-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/Components/shop-page/shop-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Components/shop-page/shop-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopPageShopPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-group-item {\n  text-align: left;\n}\n\n.mat-menu-item {\n  outline: none;\n  border-radius: 4px;\n}\n\n.clear-filter-button {\n  background: #343a4038;\n  outline: none;\n}\n\n.product-details-link {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.product-details-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n.product-image {\n  cursor: pointer;\n}\n\n.shop-page {\n  padding-bottom: 5%;\n}\n\n.filter-panel {\n  margin-bottom: 10px;\n}\n\n.shop-product {\n  max-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL3Nob3AtcGFnZS9zaG9wLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvc2hvcC1wYWdlL3Nob3AtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zaG9wLXBhZ2Uvc2hvcC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2xlYXItZmlsdGVyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDM4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtbGluayB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNob3AtcGFnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uZmlsdGVyLXBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2hvcC1wcm9kdWN0IHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbn0iLCIubGlzdC1ncm91cC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jbGVhci1maWx0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzM0M2E0MDM4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWxpbmsge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wcm9kdWN0LWltYWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hvcC1wYWdlIHtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uZmlsdGVyLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNob3AtcHJvZHVjdCB7XG4gIG1heC13aWR0aDogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/shop-page/shop-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/shop-page/shop-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: ShopPageComponent */

  /***/
  function srcAppComponentsShopPageShopPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopPageComponent", function () {
      return ShopPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Services/products/products.service */
    "./src/app/Services/products/products.service.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-details/product-details.component */
    "./src/app/Components/product-details/product-details.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ShopPageComponent = /*#__PURE__*/function () {
      function ShopPageComponent(route, router, productsService, dialog) {
        _classCallCheck(this, ShopPageComponent);

        this.route = route;
        this.router = router;
        this.productsService = productsService;
        this.dialog = dialog;
        this.productData = new Map();
        this.displayProducts = [];
        this.totalProducts = [];
        this.filters = [];
        this.activeFilters = new Map();
        this.productData.set("Scrunchies", productsService.getScrunchyData());
        this.productData.set("Pouches", productsService.getPouchData());
        this.productData.set("Bandanas", productsService.getBandanaData());
        this.productData.set("Masks", productsService.getMaskData());
        this.productData.set("Candles", productsService.getCandleData());
        this.productData.set("All", productsService.getAllProducts());
      }

      _createClass(ShopPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // Set products on shop page init
          this.route.url.subscribe(function (url) {
            _this3.initialize(url[1].path);
          }); // Update products within shop page

          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]) {
              _this3.initialize(val.snapshot.params.Product);
            }
          });
        }
      }, {
        key: "initialize",
        value: function initialize(productPath) {
          this.totalProducts = this.productData.get(productPath);
          this.displayProducts = this.totalProducts;
          this.filters = this.productsService.getFilterableProperties(productPath);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterObject) {
          var _this4 = this;

          var filteredProducts = this.totalProducts;
          this.activeFilters.set(filterObject.propertyName, filterObject.filterMap);
          this.activeFilters.forEach(function (value, key) {
            filteredProducts = _this4.filterByProperty(key, filteredProducts);
          });
          this.displayProducts = filteredProducts;
        }
      }, {
        key: "filterByProperty",
        value: function filterByProperty(property, products) {
          var filtersForProperty = this.activeFilters.get(property);
          var filteredResult = products;
          var propertyFiltered = false;
          filtersForProperty.forEach(function (v, k) {
            if (v == true) propertyFiltered = true;
          });

          if (propertyFiltered) {
            filteredResult = products.filter(function (product) {
              return filtersForProperty.get(product[property.toLowerCase()]) == true;
            });
          }

          return filteredResult;
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.router.navigate([this.router.url]);
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(imagePath) {
          var dialogRef = this.dialog.open(_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], {
            height: 'auto',
            width: '90%',
            data: {
              imagePath: imagePath
            },
            panelClass: 'my-dialog'
          });
        }
      }]);

      return ShopPageComponent;
    }();

    ShopPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _Services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    ShopPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shop-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/shop-page/shop-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shop-page.component.scss */
      "./src/app/Components/shop-page/shop-page.component.scss"))["default"]]
    })], ShopPageComponent);
    /***/
  },

  /***/
  "./src/app/Components/terms-conditions/terms-conditions.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/Components/terms-conditions/terms-conditions.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTermsConditionsTermsConditionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Components/terms-conditions/terms-conditions.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/terms-conditions/terms-conditions.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TermsConditionsComponent */

  /***/
  function srcAppComponentsTermsConditionsTermsConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function () {
      return TermsConditionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsConditionsComponent = /*#__PURE__*/function () {
      function TermsConditionsComponent() {
        _classCallCheck(this, TermsConditionsComponent);
      }

      _createClass(TermsConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsConditionsComponent;
    }();

    TermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms-conditions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms-conditions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/terms-conditions/terms-conditions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms-conditions.component.scss */
      "./src/app/Components/terms-conditions/terms-conditions.component.scss"))["default"]]
    })], TermsConditionsComponent);
    /***/
  },

  /***/
  "./src/app/Components/top-nav-bar/top-nav-bar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/Components/top-nav-bar/top-nav-bar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTopNavBarTopNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .shop-menu {\n  background-color: transparent;\n  border-style: none;\n  outline: none !important;\n  padding-top: 0.4rem;\n  padding-right: 0.1rem;\n}\n\n::ng-deep .mat-menu-content {\n  background-color: darkgray !important;\n}\n\n::ng-deep .mat-menu-panel {\n  background-color: transparent;\n}\n\n.mat-menu-item {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.94rem;\n}\n\n.shop-arrow {\n  font-size: 16px !important;\n}\n\n::ng-deep .expansion-panel .mat-expansion-panel-body {\n  position: absolute !important;\n  background-color: darkgray;\n}\n\n.expansion-panel {\n  background-color: darkgray;\n  box-shadow: none;\n}\n\n.nav-header {\n  height: 40px !important;\n  font-size: inherit;\n  padding: 0px 8px;\n}\n\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover {\n    background: rgba(0, 0, 0, 0.04) !important;\n  }\n}\n\n::ng-deep .mat-expansion-indicator::after, .mat-expansion-panel-header-description {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.panel-title {\n  margin-right: 4px;\n}\n\n::ng-deep .mat-expansion-indicator {\n  padding-bottom: 5px;\n}\n\n.navbar-collapse {\n  max-height: 200px !important;\n}\n\n.top-index {\n  z-index: 10;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  box-shadow: 6px 11px 5px -4px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.12) !important;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9Db21wb25lbnRzL3RvcC1uYXYtYmFyL3RvcC1uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3RvcC1uYXYtYmFyL3RvcC1uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUNBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSTtJQUNJLDBDQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLCtCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSw2SEFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3RvcC1uYXYtYmFyL3RvcC1uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5zaG9wLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IC40cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG59XG5cbi5zaG9wLWFycm93IHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4uZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubmF2LWhlYWRlciB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgXG59XG5cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wNCkgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyLCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KVxufVxuXG4ucGFuZWwtdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHsgXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvcC1pbmRleCB7XG4gICAgei1pbmRleDogMTA7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgICBib3gtc2hhZG93OiA2cHggMTFweCA1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59IiwiOjpuZy1kZWVwIC5zaG9wLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwLjRyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbn1cblxuLnNob3AtYXJyb3cge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubmF2LWhlYWRlciB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG59XG5cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyLCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ucGFuZWwtdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9wLWluZGV4IHtcbiAgei1pbmRleDogMTA7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgYm94LXNoYWRvdzogNnB4IDExcHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/top-nav-bar/top-nav-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Components/top-nav-bar/top-nav-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TopNavBarComponent */

  /***/
  function srcAppComponentsTopNavBarTopNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function () {
      return TopNavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TopNavBarComponent = /*#__PURE__*/function () {
      function TopNavBarComponent(router) {
        _classCallCheck(this, TopNavBarComponent);

        this.router = router;
        this.panelOpenState = false;
      }

      _createClass(TopNavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ToggleNavBar",
        value: function ToggleNavBar() {
          var hamburger = document.getElementsByClassName('navbar-toggler')[0];

          if (hamburger.getAttribute('aria-expanded') == 'true') {
            hamburger.click();
          }

          if (this.mobileCheck()) {
            this.panel.close();
          }
        }
      }, {
        key: "mobileCheck",
        value: function mobileCheck() {
          var check = false;

          (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
          })(navigator.userAgent || navigator.vendor || window.opera);

          return check;
        }
      }]);

      return TopNavBarComponent;
    }();

    TopNavBarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel', {
      "static": false
    })], TopNavBarComponent.prototype, "panel", void 0);
    TopNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/top-nav-bar/top-nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-nav-bar.component.scss */
      "./src/app/Components/top-nav-bar/top-nav-bar.component.scss"))["default"]]
    })], TopNavBarComponent);
    /***/
  },

  /***/
  "./src/app/Services/data/data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Services/data/data.service.ts ***!
    \***********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_data_carouselImages_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/data/carouselImages.json */
    "./src/assets/data/carouselImages.json");

    var _assets_data_carouselImages_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/data/carouselImages.json */
    "./src/assets/data/carouselImages.json", 1);
    /* harmony import */


    var _assets_data_faq_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/data/faq.json */
    "./src/assets/data/faq.json");

    var _assets_data_faq_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/data/faq.json */
    "./src/assets/data/faq.json", 1);

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.carouselImages = _assets_data_carouselImages_json__WEBPACK_IMPORTED_MODULE_2__;
        this.faq = _assets_data_faq_json__WEBPACK_IMPORTED_MODULE_3__;
      }

      _createClass(DataService, [{
        key: "getAllCarouselImages",
        value: function getAllCarouselImages() {
          return this.carouselImages;
        }
      }, {
        key: "getFAQs",
        value: function getFAQs() {
          return this.faq;
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/Services/products/products.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/products/products.service.ts ***!
    \*******************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_products_productdata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/products/productdata.json */
    "./src/assets/products/productdata.json");

    var _assets_products_productdata_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/products/productdata.json */
    "./src/assets/products/productdata.json", 1);
    /* harmony import */


    var _assets_products_productproperties_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/products/productproperties.json */
    "./src/assets/products/productproperties.json");

    var _assets_products_productproperties_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/products/productproperties.json */
    "./src/assets/products/productproperties.json", 1);

    var ProductsService = /*#__PURE__*/function () {
      function ProductsService() {
        _classCallCheck(this, ProductsService);

        this.productdata = _assets_products_productdata_json__WEBPACK_IMPORTED_MODULE_2__;
        this.productproperties = _assets_products_productproperties_json__WEBPACK_IMPORTED_MODULE_3__;
      }

      _createClass(ProductsService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.productdata;
        }
      }, {
        key: "getScrunchyData",
        value: function getScrunchyData() {
          return this.productdata.filter(function (p) {
            return p.type == 'Scrunchy';
          });
        }
      }, {
        key: "getPouchData",
        value: function getPouchData() {
          return this.productdata.filter(function (p) {
            return p.type == 'Pouch';
          });
        }
      }, {
        key: "getBandanaData",
        value: function getBandanaData() {
          return this.productdata.filter(function (p) {
            return p.type == 'Bandana';
          });
        }
      }, {
        key: "getMaskData",
        value: function getMaskData() {
          return this.productdata.filter(function (p) {
            return p.type == 'Mask';
          });
        }
      }, {
        key: "getCandleData",
        value: function getCandleData() {
          return this.productdata.filter(function (p) {
            return p.type == 'Candle';
          });
        }
      }, {
        key: "getFilterableProperties",
        value: function getFilterableProperties(productType) {
          return this.productproperties.filter(function (p) {
            return p.filterable == true && p.applicableToTypes.includes(productType);
          });
        }
      }]);

      return ProductsService;
    }();

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductsService);
    /***/
  },

  /***/
  "./src/app/Services/properties/properties.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Services/properties/properties.service.ts ***!
    \***********************************************************/

  /*! exports provided: PropertiesService */

  /***/
  function srcAppServicesPropertiesPropertiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesService", function () {
      return PropertiesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_properties_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/properties.json */
    "./src/assets/properties.json");

    var src_assets_properties_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/assets/properties.json */
    "./src/assets/properties.json", 1);

    var PropertiesService = /*#__PURE__*/function () {
      function PropertiesService() {
        _classCallCheck(this, PropertiesService);

        this.properties = src_assets_properties_json__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(PropertiesService, [{
        key: "getEmailContact",
        value: function getEmailContact() {
          return this.properties.emailContact;
        }
      }, {
        key: "getInstagramContact",
        value: function getInstagramContact() {
          return this.properties.instagramContact;
        }
      }, {
        key: "getShopContact",
        value: function getShopContact() {
          return this.properties.shopContact;
        }
      }]);

      return PropertiesService;
    }();

    PropertiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PropertiesService);
    /***/
  },

  /***/
  "./src/app/app-material/app-material.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/app-material/app-material.module.ts ***!
    \*****************************************************/

  /*! exports provided: AppMaterialModule */

  /***/
  function srcAppAppMaterialAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
      return AppMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppMaterialModule = function AppMaterialModule() {
      _classCallCheck(this, AppMaterialModule);
    };

    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]]
    })], AppMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Components_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/shop-page/shop-page.component */
    "./src/app/Components/shop-page/shop-page.component.ts");
    /* harmony import */


    var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/contact/contact.component */
    "./src/app/Components/contact/contact.component.ts");
    /* harmony import */


    var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/about/about.component */
    "./src/app/Components/about/about.component.ts");
    /* harmony import */


    var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/home/home.component */
    "./src/app/Components/home/home.component.ts");
    /* harmony import */


    var _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/faq/faq.component */
    "./src/app/Components/faq/faq.component.ts");
    /* harmony import */


    var _Components_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Components/terms-conditions/terms-conditions.component */
    "./src/app/Components/terms-conditions/terms-conditions.component.ts");
    /* harmony import */


    var _Components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/privacy-policy/privacy-policy.component */
    "./src/app/Components/privacy-policy/privacy-policy.component.ts");

    var routes = [{
      path: 'Home',
      component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'Shop/:Product',
      component: _Components_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_3__["ShopPageComponent"]
    }, {
      path: 'Contact',
      component: _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }, {
      path: 'About',
      component: _Components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'FAQ',
      component: _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_7__["FaqComponent"]
    }, {
      path: 'TermsConditions',
      component: _Components_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionsComponent"]
    }, {
      path: 'PrivacyPolicy',
      component: _Components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyComponent"]
    }, {
      path: '**',
      redirectTo: 'Home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        // onSameUrlNavigation: 'ignore',
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#page-container {\n  position: relative;\n  min-height: 88%;\n}\n\n#content-wrap {\n  padding-bottom: 2.5rem;\n  /* Footer height */\n  width: 100%;\n}\n\n.home {\n  background: lavenderblush;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JhYmFycm90YS9EZXNrdG9wL2NyYWZ0LXNpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFBMkIsa0JBQUE7RUFDM0IsV0FBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA4OCU7XG59XG4gIFxuI2NvbnRlbnQtd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgICAgLyogRm9vdGVyIGhlaWdodCAqL1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZSB7XG4gICAgYmFja2dyb3VuZDogbGF2ZW5kZXJibHVzaDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn0iLCIjcGFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDg4JTtcbn1cblxuI2NvbnRlbnQtd3JhcCB7XG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIC8qIEZvb3RlciBoZWlnaHQgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob21lIHtcbiAgYmFja2dyb3VuZDogbGF2ZW5kZXJibHVzaDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var AppComponent = function AppComponent(titleService, meta) {
      _classCallCheck(this, AppComponent);

      this.titleService = titleService;
      this.meta = meta;
      this.title = 'Laura\'s Sew Shop';
      titleService.setTitle('Laura\'s Sew Shop');
      meta.addTag({
        name: 'descript',
        content: 'Laura\'s Sew Shop'
      }, true);
      meta.addTag({
        name: 'author',
        content: 'Robert Abarrota'
      }, true);
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Components_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/top-nav-bar/top-nav-bar.component */
    "./src/app/Components/top-nav-bar/top-nav-bar.component.ts");
    /* harmony import */


    var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Components/footer/footer.component */
    "./src/app/Components/footer/footer.component.ts");
    /* harmony import */


    var _Components_carousel_widget_carousel_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/carousel-widget/carousel-widget.component */
    "./src/app/Components/carousel-widget/carousel-widget.component.ts");
    /* harmony import */


    var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Components/contact/contact.component */
    "./src/app/Components/contact/contact.component.ts");
    /* harmony import */


    var _Components_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Components/shop-page/shop-page.component */
    "./src/app/Components/shop-page/shop-page.component.ts");
    /* harmony import */


    var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Components/about/about.component */
    "./src/app/Components/about/about.component.ts");
    /* harmony import */


    var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Components/home/home.component */
    "./src/app/Components/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-material/app-material.module */
    "./src/app/app-material/app-material.module.ts");
    /* harmony import */


    var _Components_filter_widget_filter_widget_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Components/filter-widget/filter-widget.component */
    "./src/app/Components/filter-widget/filter-widget.component.ts");
    /* harmony import */


    var _Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Components/product-details/product-details.component */
    "./src/app/Components/product-details/product-details.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Components/faq/faq.component */
    "./src/app/Components/faq/faq.component.ts");
    /* harmony import */


    var _Components_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Components/terms-conditions/terms-conditions.component */
    "./src/app/Components/terms-conditions/terms-conditions.component.ts");
    /* harmony import */


    var _Components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Components/privacy-policy/privacy-policy.component */
    "./src/app/Components/privacy-policy/privacy-policy.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Components_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopNavBarComponent"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _Components_carousel_widget_carousel_widget_component__WEBPACK_IMPORTED_MODULE_9__["CarouselWidgetComponent"], _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _Components_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_11__["ShopPageComponent"], _Components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _Components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _Components_filter_widget_filter_widget_component__WEBPACK_IMPORTED_MODULE_16__["FilterWidgetComponent"], _Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"], _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"], _Components_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_20__["TermsConditionsComponent"], _Components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_21__["PrivacyPolicyComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_15__["AppMaterialModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/assets/data/carouselImages.json":
  /*!*********************************************!*\
    !*** ./src/assets/data/carouselImages.json ***!
    \*********************************************/

  /*! exports provided: 0, 1, 2, 3, default */

  /***/
  function srcAssetsDataCarouselImagesJson(module) {
    module.exports = JSON.parse("[\"./assets/images/carousel-scrunchy-1.png\",\"./assets/images/carousel-scrunchy-2.png\",\"./assets/images/carousel-scrunchy-3.png\",\"./assets/images/candle_ladies_carousel.png\"]");
    /***/
  },

  /***/
  "./src/assets/data/faq.json":
  /*!**********************************!*\
    !*** ./src/assets/data/faq.json ***!
    \**********************************/

  /*! exports provided: 0, 1, 2, 3, default */

  /***/
  function srcAssetsDataFaqJson(module) {
    module.exports = JSON.parse("[{\"question\":\"Are your products washer friendly?\",\"answer\":\"Yes! All the fabrics I use are safe for the washer, but air dry only!\",\"longQuestion\":false},{\"question\":\"Do you do customized items?\",\"answer\":\"Reach out to me and I'll see what I can do!\",\"longQuestion\":false},{\"question\":\"Will your mask elastics work for me?\",\"answer\":\"The elastics are strong enough for all hair styles!\",\"longQuestion\":false},{\"question\":\"I see something I like, but I'm not sure if it's the size I would like. Are there other options?\",\"answer\":\"I offer most of my products in different sizes!\",\"longQuestion\":true}]");
    /***/
  },

  /***/
  "./src/assets/products/productdata.json":
  /*!**********************************************!*\
    !*** ./src/assets/products/productdata.json ***!
    \**********************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */

  /***/
  function srcAssetsProductsProductdataJson(module) {
    module.exports = JSON.parse("[{\"id\":0,\"type\":\"Pouch\",\"colour\":\"White\",\"material\":\"Cotton\",\"price\":\"5\",\"images\":[\"./assets/images/p0.png\"],\"pattern\":\"Leaves\"},{\"id\":1,\"type\":\"Pouch\",\"colour\":\"Blue\",\"material\":\"Polyester-Spandex\",\"price\":\"5\",\"images\":[\"./assets/images/p1.png\"],\"pattern\":\"Floral\"},{\"id\":2,\"type\":\"Pouch\",\"colour\":\"Red\",\"material\":\"Flannel\",\"price\":\"5\",\"images\":[\"./assets/images/p2.png\"],\"pattern\":\"Flannel\"},{\"id\":3,\"type\":\"Scrunchy\",\"colour\":\"Yellow-Green\",\"material\":\"Cotton\",\"price\":\"5\",\"images\":[\"./assets/images/p3.png\"],\"pattern\":\"Floral\"},{\"id\":4,\"type\":\"Scrunchy\",\"colour\":\"White\",\"material\":\"Cotton\",\"price\":\"5\",\"images\":[\"./assets/images/p4.png\"],\"pattern\":\"Leaves\"},{\"id\":5,\"type\":\"Scrunchy\",\"colour\":\"Blue\",\"material\":\"Polyester-Spandex\",\"price\":\"5\",\"images\":[\"./assets/images/TESTIMAGEBLUE.png\"],\"pattern\":\"Floral\"},{\"id\":6,\"type\":\"Bandana\",\"colour\":\"Red\",\"material\":\"Cotton\",\"price\":\"5\",\"images\":[\"./assets/images/p6.png\"],\"pattern\":\"Paw-print\"},{\"id\":7,\"type\":\"Bandana\",\"colour\":\"White\",\"material\":\"Cotton\",\"price\":\"5\",\"images\":[\"./assets/images/p7.png\"],\"pattern\":\"Dinosaur\"},{\"id\":7,\"type\":\"Bandana\",\"colour\":\"Black\",\"material\":\"Cotton\",\"price\":\"5\",\"images\":[\"./assets/images/p8.png\"],\"pattern\":\"Crossbones\"},{\"id\":8,\"type\":\"Mask\",\"colour\":\"Black\",\"material\":\"Cotton\",\"price\":\"10\",\"images\":[\"./assets/images/p8.png\"],\"pattern\":\"Crossbones\"},{\"id\":9,\"type\":\"Candle\",\"colour\":\"Pink\",\"price\":\"12\",\"images\":[\"./assets/images/pink_lady_candle.png\"],\"scent\":\"Vanilla\"}]");
    /***/
  },

  /***/
  "./src/assets/products/productproperties.json":
  /*!****************************************************!*\
    !*** ./src/assets/products/productproperties.json ***!
    \****************************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */

  /***/
  function srcAssetsProductsProductpropertiesJson(module) {
    module.exports = JSON.parse("[{\"id\":0,\"name\":\"Type\",\"filterable\":true,\"applicableToTypes\":[\"All\"]},{\"id\":1,\"name\":\"Colour\",\"filterable\":true,\"applicableToTypes\":[\"Masks\",\"Scrunchies\",\"Bandanas\",\"Pouches\",\"Candles\",\"All\"]},{\"id\":2,\"name\":\"Material\",\"filterable\":true,\"applicableToTypes\":[\"Masks\",\"Scrunchies\",\"Bandanas\",\"Pouches\",\"All\"]},{\"id\":3,\"name\":\"Price\",\"filterable\":false,\"applicableToTypes\":[\"Masks\",\"Scrunchies\",\"Bandanas\",\"Pouches\",\"Candles\",\"All\"]},{\"id\":4,\"name\":\"Images\",\"filterable\":false,\"applicableToTypes\":[]},{\"id\":5,\"name\":\"Pattern\",\"filterable\":true,\"applicableToTypes\":[\"Masks\",\"Scrunchies\",\"Bandanas\",\"Pouches\",\"All\"]},{\"id\":6,\"name\":\"Scent\",\"filterable\":true,\"applicableToTypes\":[\"Candles\",\"All\"]}]");
    /***/
  },

  /***/
  "./src/assets/properties.json":
  /*!************************************!*\
    !*** ./src/assets/properties.json ***!
    \************************************/

  /*! exports provided: emailContact, instagramContact, shopContact, default */

  /***/
  function srcAssetsPropertiesJson(module) {
    module.exports = JSON.parse("{\"emailContact\":\"blue95@sympatico.ca\",\"instagramContact\":\"thesewspot\",\"shopContact\":\"https://www.etsy.com\"}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/robabarrota/Desktop/craft-site/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map