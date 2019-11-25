(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-nav-bar></app-top-nav-bar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 *ngIf=\"data.titleKey\" mat-dialog-title>{{data.titleKey}}</h1>\n<div mat-dialog-content>\n  <p *ngIf=\"!!(data.dialogText)\">{{data.dialogText}}</p>\n  <ng-content></ng-content>\n</div>\n<div mat-dialog-actions>\n  <ng-container *ngIf=\"data.extraButtonArray\">\n    <ng-container *ngFor=\"let button of data.extraButtonArray\">\n      <button (click)=\"emitAction(button.buttonAction)\" [color]=\"button.buttonColor\"\n              mat-button>{{button.buttonText}}</button>\n    </ng-container>\n  </ng-container>\n  <button (click)=\"onNoClick()\" *ngIf=\"!data.noCancel\" mat-button>אישור</button>\n  <button [mat-dialog-close]=\"true\" mat-button>ביטול</button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-nav-bar/top-nav-bar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-nav-bar/top-nav-bar.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <h3>Herolo Weather Task</h3>\n  <div fxLayout=\"row\" fxLayoutGap=\"1rem\">\n    <a mat-raised-button routerLink=\"{{routingPath.WEATHER}}\">Weather</a>\n    <a mat-raised-button routerLink=\"{{routingPath.FAVORITES}}\">Favorites</a>\n  </div>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-common/common.module.ts":
/*!*********************************************!*\
  !*** ./src/app/app-common/common.module.ts ***!
  \*********************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/app-common/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






/**
 * This module contains all of the elements that are not App-Specific (usually 3rd party features/ elements):
 * For example: Material, Angular Flex Layout etc...
 * Any element found in this module has NO dependency to any of the App features
 */
let AppCommonModule = class AppCommonModule {
};
AppCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ useColumnBasisZero: true }),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
        ]
    })
], AppCommonModule);



/***/ }),

/***/ "./src/app/app-common/material.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-common/material.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
















const MODULES = [
    // Navigation.
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
    // Layout
    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    // Buttons & Indicators
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
    // Form Controls.
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
    // Popups & Modals
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            MODULES
        ],
        exports: [
            MODULES
        ],
        declarations: [],
        providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_models_routing_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/models/routing.models */ "./src/app/shared/models/routing.models.ts");




const routes = [
    { path: _shared_models_routing_models__WEBPACK_IMPORTED_MODULE_3__["RoutingPath"].DEFAULT, redirectTo: _shared_models_routing_models__WEBPACK_IMPORTED_MODULE_3__["RoutingPath"].WEATHER, pathMatch: 'full' },
    {
        path: _shared_models_routing_models__WEBPACK_IMPORTED_MODULE_3__["RoutingPath"].WEATHER,
        loadChildren: () => Promise.all(/*! import() | weather-weather-module */[__webpack_require__.e("common"), __webpack_require__.e("weather-weather-module")]).then(__webpack_require__.bind(null, /*! ./weather/weather.module */ "./src/app/weather/weather.module.ts")).then(m => m.WeatherModule),
    },
    {
        path: _shared_models_routing_models__WEBPACK_IMPORTED_MODULE_3__["RoutingPath"].FAVORITES,
        loadChildren: () => Promise.all(/*! import() | favorites-favorites-module */[__webpack_require__.e("common"), __webpack_require__.e("favorites-favorites-module")]).then(__webpack_require__.bind(null, /*! ./favorites/favorites.module */ "./src/app/favorites/favorites.module.ts")).then(m => m.FavoritesModule),
    },
    // otherwise redirect to home
    { path: '*', redirectTo: _shared_models_routing_models__WEBPACK_IMPORTED_MODULE_3__["RoutingPath"].WEATHER }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERldlxcTWF6aVRhcjIyMTEyMDE5X05ncngvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_effects_app_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/effects/app.effects */ "./src/app/store/effects/app.effects.ts");
/* harmony import */ var _store_effects_weather_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/effects/weather.effects */ "./src/app/store/effects/weather.effects.ts");
/* harmony import */ var _store_effects_favorites_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/effects/favorites.effects */ "./src/app/store/effects/favorites.effects.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_store_effects_app_effects__WEBPACK_IMPORTED_MODULE_14__["AppEffects"], _store_effects_weather_effects__WEBPACK_IMPORTED_MODULE_15__["WeatherEffects"], _store_effects_favorites_effects__WEBPACK_IMPORTED_MODULE_16__["FavoritesEffects"]])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_api_error_normalization_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api-error-normalization.interceptor */ "./src/app/core/services/api-error-normalization.interceptor.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_toaster_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/toaster-interceptor.service */ "./src/app/core/services/toaster-interceptor.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _mock_mockBackend_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/mockBackend.interceptor */ "./src/app/core/mock/mockBackend.interceptor.ts");









const devProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _mock_mockBackend_interceptor__WEBPACK_IMPORTED_MODULE_8__["MockBackendInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_toaster_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["ToasterInterceptorService"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_api_error_normalization_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiErrorNormalizationInterceptor"], multi: true },
];
const prodProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _mock_mockBackend_interceptor__WEBPACK_IMPORTED_MODULE_8__["MockBackendInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_toaster_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["ToasterInterceptorService"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_api_error_normalization_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiErrorNormalizationInterceptor"], multi: true }
    // TODO:: OPTIONAL Add Error monitoring for production -> https://sentry.io/for/angular/
    // { provide: ErrorHandler, useFactory: provideErrorHandler } -  see example: https://alligator.io/angular/error-tracking-sentry/
];
const providers = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? prodProviders : devProviders;
let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"] // to use with ToasterInterceptorService
        ],
        providers,
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/mock/mockBackend.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/mock/mockBackend.interceptor.ts ***!
  \******************************************************/
/*! exports provided: MockBackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBackendInterceptor", function() { return MockBackendInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _mockBackend_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mockBackend.model */ "./src/app/core/mock/mockBackend.model.ts");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm2015/ajax/index.js");
/* harmony import */ var _shared_consts_weather_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/consts/weather.consts */ "./src/app/shared/consts/weather.consts.ts");
/* harmony import */ var _models_api_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/api.models */ "./src/app/core/models/api.models.ts");









let MockBackendInterceptor = class MockBackendInterceptor {
    constructor() {
        this.apiAutocompleteNamespace = _shared_consts_weather_consts__WEBPACK_IMPORTED_MODULE_7__["ACCUWEATHER_API_AUTOCOMPLETE_URL"];
        this.apiConditionsNamespace = _shared_consts_weather_consts__WEBPACK_IMPORTED_MODULE_7__["ACCUWEATHER_API_CONDITIONS_URL"];
        this.apiForecastNamespace = _shared_consts_weather_consts__WEBPACK_IMPORTED_MODULE_7__["ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL"];
    }
    intercept(request, next) {
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => {
            if (request.url.includes(this.apiAutocompleteNamespace) && request.method === 'GET') {
                return this.getApiCall(request, next, 'GetAccuweatherAutocomplete');
            }
            else if (request.url.includes(this.apiConditionsNamespace) && request.method === 'GET') {
                return this.getApiCall(request, next, 'GetAccuweatherCurrentConditions');
            }
            else if (request.url.includes(this.apiForecastNamespace) && request.method === 'GET') {
                return this.getApiCall(request, next, 'GetAccuweather5DaysOfForecast');
            }
            // pass through any requests not handled above
            return next.handle(request);
        }));
    }
    getApiCall(request, next, mockFileName) {
        const url = `/assets/mock/${mockFileName}.json`;
        return rxjs_ajax__WEBPACK_IMPORTED_MODULE_6__["ajax"].getJSON(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(body => new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: _models_api_models__WEBPACK_IMPORTED_MODULE_8__["EResultCodes"].Success, body: Object(_mockBackend_model__WEBPACK_IMPORTED_MODULE_5__["AppHttpResponse"])(body) })));
    }
};
MockBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MockBackendInterceptor);



/***/ }),

/***/ "./src/app/core/mock/mockBackend.model.ts":
/*!************************************************!*\
  !*** ./src/app/core/mock/mockBackend.model.ts ***!
  \************************************************/
/*! exports provided: AppHttpResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpResponse", function() { return AppHttpResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function AppHttpResponse(payload) {
    return {
        data: payload
    };
}


/***/ }),

/***/ "./src/app/core/models/api.models.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/api.models.ts ***!
  \*******************************************/
/*! exports provided: AppResponse, EResultCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppResponse", function() { return AppResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EResultCodes", function() { return EResultCodes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppResponse {
    constructor({ data }) {
        this.data = data;
    }
}
var EResultCodes;
(function (EResultCodes) {
    EResultCodes[EResultCodes["Ok"] = 0] = "Ok";
    EResultCodes[EResultCodes["Success"] = 200] = "Success";
    EResultCodes[EResultCodes["BadRequest"] = 400] = "BadRequest";
    EResultCodes[EResultCodes["Unauthorized"] = 401] = "Unauthorized";
    EResultCodes[EResultCodes["Forbidden"] = 403] = "Forbidden";
    EResultCodes[EResultCodes["NotFound"] = 404] = "NotFound";
    EResultCodes[EResultCodes["InternalServerError"] = 500] = "InternalServerError";
    EResultCodes[EResultCodes["UnknownError"] = 9999] = "UnknownError";
})(EResultCodes || (EResultCodes = {}));


/***/ }),

/***/ "./src/app/core/models/error.model.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/error.model.ts ***!
  \********************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.models */ "./src/app/core/models/api.models.ts");


const DEFAULT_APP_ERROR_TYPE = 9999;
const AppErrorsTranslationMapping = {
    9999: 'ERRORS.ERROR_DEFUALT',
    401: 'ERRORS.ERROR_NOT_AUTHORIZED',
    500: 'ERRORS.ERROR_GENERAL',
    0: 'ERRORS.ERROR_DEFUALT',
    801: 'ERRORS.NO_MESSAGES_FOUND',
};
class AppError {
    constructor({ status = DEFAULT_APP_ERROR_TYPE, error }) {
        this.status = status;
        this.value = error;
        if (!_api_models__WEBPACK_IMPORTED_MODULE_1__["EResultCodes"][status]) {
            console.error('New Type of Error found:', status);
        }
        this.translateKey = !!AppErrorsTranslationMapping[status] ?
            AppErrorsTranslationMapping[status] :
            AppErrorsTranslationMapping[DEFAULT_APP_ERROR_TYPE];
    }
}


/***/ }),

/***/ "./src/app/core/services/api-error-normalization.interceptor.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/services/api-error-normalization.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: ApiErrorNormalizationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiErrorNormalizationInterceptor", function() { return ApiErrorNormalizationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/error.model */ "./src/app/core/models/error.model.ts");






let ApiErrorNormalizationInterceptor = class ApiErrorNormalizationInterceptor {
    constructor() {
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            if (!(response.body)) {
                // Error
                throw (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({ error: response.body }));
            }
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => this.normalizeError(e)));
    }
    normalizeError(event) {
        if (!event.error && event.message) {
            console.error(`Backend returned code ${event.code}, ` +
                `body was: ${event.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_5__["AppError"]({ status: event.code, error: event.message }));
        }
        // tslint:disable-next-line:variable-name
        const _errorMessage = event.error.message || event.statusText;
        const status = event && event.status ? event.status : event.error;
        if (event.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', event.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            let error = '';
            if (typeof event.error === 'string') {
                error = event.error;
            }
            else {
                try {
                    error = JSON.stringify(event.error);
                }
                catch (e) {
                    error = event.error;
                }
            }
            console.error(`Backend returned code ${status}, ` +
                `body was: ${error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _models_error_model__WEBPACK_IMPORTED_MODULE_5__["AppError"]({ status, error: _errorMessage }));
    }
};
ApiErrorNormalizationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiErrorNormalizationInterceptor);



/***/ }),

/***/ "./src/app/core/services/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_api_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/api.models */ "./src/app/core/models/api.models.ts");







let HttpService = class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(url, options) {
        const requestOptions = this.createRequestOptions(options, 'GET');
        return this.httpClient.get(`${url}`, requestOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    post(url, body, options) {
        const requestOptions = this.createRequestOptions(options, 'POST');
        return this.httpClient.post(`${url}`, body, requestOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    put(url, body, options) {
        const requestOptions = this.createRequestOptions(options, 'PUT');
        return this.httpClient.put(`${url}`, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    delete(url, options) {
        const requestOptions = this.createRequestOptions(options, 'DELETE');
        return this.httpClient.delete(`${url}`, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            return this.handleDeleteResponse(res['body']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createRequestOptions(options, method) {
        let headers = options && options.headers ? (options.headers) : null;
        let params = null;
        switch (method) {
            case 'GET':
                // headers = (new HttpHeaders(headers)).set('Accept', '*');
                break;
            case 'PUT':
                if (!this.headersOfType(headers, 'Content-Type')) { // Add only if there is no such Header
                    headers = (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers)).set('Content-Type', 'application/json');
                }
                break;
            case 'DELETE':
                headers = (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers));
                break;
            case 'POST':
                headers = (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers)); // .set('Content-Type', 'application/json'); // Must be JSON
                break;
        }
        if (options && options.params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            Object.keys(options.params).map(key => params = params.set(key, options.params[key]));
        }
        const observe = 'response';
        const withCredentials = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production; // needs to be false in order to see the data from the server
        return Object.assign({}, options, { headers,
            params,
            observe,
            withCredentials // Add cookies to each api call
         });
    }
    headersOfType(headers, contentType) {
        return headers !== null && headers instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] && headers.has(contentType);
    }
    /**
     * handleDeleteResponse
     * Map response to AppResponse model
     * @param response HttpResponseBody
     */
    handleDeleteResponse(response) {
        return new _models_api_models__WEBPACK_IMPORTED_MODULE_6__["AppResponse"]({ data: response });
    }
    /**
     * handleResponse
     * Map response to AppResponse model
     * @param response HttpResponse
     */
    handleResponse(response) {
        if (response.body instanceof Blob) {
            return new _models_api_models__WEBPACK_IMPORTED_MODULE_6__["AppResponse"]({ data: response.body });
        }
        return new _models_api_models__WEBPACK_IMPORTED_MODULE_6__["AppResponse"]({ data: response.body.data });
    }
    handleError(error) {
        // Optional - Handle specific Http-Errors (other then the Error.interceptor)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], HttpService);



/***/ }),

/***/ "./src/app/core/services/toaster-interceptor.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/toaster-interceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: ToasterInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterInterceptorService", function() { return ToasterInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");





let ToasterInterceptorService = class ToasterInterceptorService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => this.handleError(e)));
    }
    handleError(req) {
        if (req.status >= 1000) { // internal server message - display as is
            this.showSnackbar(req.value);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(req);
    }
    showSnackbar(massage) {
        this.snackBar.open(massage, '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'error'
        });
    }
};
ToasterInterceptorService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ToasterInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToasterInterceptorService);



/***/ }),

/***/ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    emitAction(buttonAction) {
        this.actionEvent.emit(buttonAction);
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConfirmDialogComponent.prototype, "actionEvent", void 0);
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/shared/components/top-nav-bar/top-nav-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/top-nav-bar/top-nav-bar.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar img {\n  margin: 0 16px;\n}\n\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wLW5hdi1iYXIvQzpcXERldlxcTWF6aVRhcjIyMTEyMDE5X05ncngvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdG9wLW5hdi1iYXJcXHRvcC1uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b3AtbmF2LWJhci90b3AtbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b3AtbmF2LWJhci90b3AtbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAtOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4iLCIudG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAtOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b29sYmFyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/top-nav-bar/top-nav-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/top-nav-bar/top-nav-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: TopNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function() { return TopNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_routing_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/routing.models */ "./src/app/shared/models/routing.models.ts");



let TopNavBarComponent = class TopNavBarComponent {
    constructor() {
        this.routingPath = _models_routing_models__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"];
    }
};
TopNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-nav-bar/top-nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-nav-bar.component.scss */ "./src/app/shared/components/top-nav-bar/top-nav-bar.component.scss")).default]
    })
], TopNavBarComponent);



/***/ }),

/***/ "./src/app/shared/consts/weather.consts.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/consts/weather.consts.ts ***!
  \*************************************************/
/*! exports provided: ACCUWEATHER_API_AUTOCOMPLETE_URL, ACCUWEATHER_API_CONDITIONS_URL, ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL, ACCUWEATHER_API_ICONS_URL, ACCUWEATHER_API_ICONS_URL_END, ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWEATHER_API_AUTOCOMPLETE_URL", function() { return ACCUWEATHER_API_AUTOCOMPLETE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWEATHER_API_CONDITIONS_URL", function() { return ACCUWEATHER_API_CONDITIONS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL", function() { return ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWEATHER_API_ICONS_URL", function() { return ACCUWEATHER_API_ICONS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWEATHER_API_ICONS_URL_END", function() { return ACCUWEATHER_API_ICONS_URL_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH", function() { return ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ACCUWEATHER_API_AUTOCOMPLETE_URL = 'locations/v1/cities/autocomplete';
const ACCUWEATHER_API_CONDITIONS_URL = 'currentconditions/v1';
const ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL = 'forecasts/v1/daily/5day';
const ACCUWEATHER_API_ICONS_URL = 'https://developer.accuweather.com/sites/default/files/';
const ACCUWEATHER_API_ICONS_URL_END = '-s.png';
const ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH = {
    key: '215854',
    localizedName: 'Tel Aviv'
};


/***/ }),

/***/ "./src/app/shared/models/routing.models.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/routing.models.ts ***!
  \*************************************************/
/*! exports provided: RoutingPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingPath", function() { return RoutingPath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var RoutingPath;
(function (RoutingPath) {
    RoutingPath["DEFAULT"] = "";
    RoutingPath["WEATHER"] = "weather-forecast";
    RoutingPath["FAVORITES"] = "favorites";
})(RoutingPath || (RoutingPath = {}));


/***/ }),

/***/ "./src/app/shared/models/weather-view.models.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/weather-view.models.ts ***!
  \******************************************************/
/*! exports provided: ACCUWeatherAutocompleteViewModel, ACCUWeatherAutocompleteResultsViewModel, CurrentConditionsViewModel, FiveDaysOfForecastViewModel, DailyForecastViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWeatherAutocompleteViewModel", function() { return ACCUWeatherAutocompleteViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUWeatherAutocompleteResultsViewModel", function() { return ACCUWeatherAutocompleteResultsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsViewModel", function() { return CurrentConditionsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiveDaysOfForecastViewModel", function() { return FiveDaysOfForecastViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyForecastViewModel", function() { return DailyForecastViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Autocomplete
class ACCUWeatherAutocompleteViewModel {
    constructor(data) {
        this.key = data.Key;
        this.localizedName = data.LocalizedName;
    }
}
class ACCUWeatherAutocompleteResultsViewModel {
    constructor(data) {
        this.autocompleteResults = [];
        this.autocompleteResults = this.generateResults(data);
    }
    generateResults(rawData) {
        return rawData.reduce((prev = [], current) => {
            return !prev.length ? [new ACCUWeatherAutocompleteViewModel(current)] : [...prev, new ACCUWeatherAutocompleteViewModel(current)];
        }, []);
    }
}
// current conditions
class CurrentConditionsViewModel {
    constructor(data) {
        this.weatherText = data.WeatherText;
        this.weatherIcon = data.WeatherIcon;
        this.temperature = data.Temperature.Metric;
        this.id = data.LocalObservationDateTime;
    }
}
class FiveDaysOfForecastViewModel {
    constructor(data) {
        this.forecasts = [];
        this.forecasts = this.generateForecasts(data.DailyForecasts);
    }
    generateForecasts(rawData) {
        return rawData.reduce((prev = [], current) => {
            return !prev.length ? [new DailyForecastViewModel(current)] : [...prev, new DailyForecastViewModel(current)];
        }, []);
    }
}
class DailyForecastViewModel {
    constructor(data) {
        this.Date = data.Date;
        this.Temperature = data.Temperature;
        this.DayIcon = data.Day.Icon;
        this.NightIcon = data.Night.Icon;
    }
}


/***/ }),

/***/ "./src/app/shared/services/weather-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/weather-api.service.ts ***!
  \********************************************************/
/*! exports provided: WeatherApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApiService", function() { return WeatherApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _consts_weather_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts/weather.consts */ "./src/app/shared/consts/weather.consts.ts");





let WeatherApiService = class WeatherApiService {
    constructor(http) {
        this.http = http;
        this.apiAutocompleteNamespace = _consts_weather_consts__WEBPACK_IMPORTED_MODULE_4__["ACCUWEATHER_API_AUTOCOMPLETE_URL"];
        this.apiConditionsNamespace = _consts_weather_consts__WEBPACK_IMPORTED_MODULE_4__["ACCUWEATHER_API_CONDITIONS_URL"];
        this.apiForecastNamespace = _consts_weather_consts__WEBPACK_IMPORTED_MODULE_4__["ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL"];
        this.apiBaseUrlNamespace = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ACCUWEATHER_API_BASE_URL;
        this.apiKeyNamespace = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ACCUWEATHER_API_KEY;
    }
    getAutocompleteResults(query) {
        const url = `${this.apiBaseUrlNamespace}/${this.apiAutocompleteNamespace}`;
        return this.http.get(url, {
            params: {
                apikey: this.apiKeyNamespace,
                q: query ? query : 'tel',
                language: 'en-us'
            }
        });
    }
    getCurrentConditions(locationKey) {
        const url = `${this.apiBaseUrlNamespace}/${this.apiConditionsNamespace}/${locationKey}`;
        return this.http.get(url, {
            params: {
                language: 'en-us',
                apikey: this.apiKeyNamespace,
                details: true
            }
        });
    }
    get5DaysOfDailyForecasts(locationKey) {
        const url = `${this.apiBaseUrlNamespace}/${this.apiForecastNamespace}/${locationKey}`;
        return this.http.get(url, {
            params: {
                language: 'en-us',
                apikey: this.apiKeyNamespace,
                details: true,
                metric: true
            }
        });
    }
};
WeatherApiService.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
WeatherApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherApiService);



/***/ }),

/***/ "./src/app/shared/services/weather.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/weather.service.ts ***!
  \****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-api.service */ "./src/app/shared/services/weather-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let WeatherService = class WeatherService {
    constructor(weatherApiService) {
        this.weatherApiService = weatherApiService;
    }
    getAutocompleteResults(query) {
        return this.weatherApiService.getAutocompleteResults(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.data));
    }
    getCurrentSelectedPlaceForecast(locationKey) {
        return this.weatherApiService.getCurrentConditions(locationKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.data[0]));
    }
    get5DaysOfDailyForecasts(locationKey) {
        return this.weatherApiService.get5DaysOfDailyForecasts(locationKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.data));
    }
};
WeatherService.ctorParameters = () => [
    { type: _weather_api_service__WEBPACK_IMPORTED_MODULE_2__["WeatherApiService"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _app_common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-common/common.module */ "./src/app/app-common/common.module.ts");
/* harmony import */ var _components_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/top-nav-bar/top-nav-bar.component */ "./src/app/shared/components/top-nav-bar/top-nav-bar.component.ts");






const components = [
    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"],
    _components_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopNavBarComponent"]
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [components],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]
        ],
        exports: [components],
        entryComponents: [_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/store/actions/favorites.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/store/actions/favorites.actions.ts ***!
  \****************************************************/
/*! exports provided: addToFavorites, removeFromFavorites, setSelectedFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToFavorites", function() { return addToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromFavorites", function() { return removeFromFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedFavorite", function() { return setSelectedFavorite; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const addToFavorites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Favorites] add to Favorites', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeFromFavorites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Favorites] Remove From to Favorites', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const setSelectedFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Favorites] Set Selected Favorite', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/store/actions/weather.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/weather.actions.ts ***!
  \**************************************************/
/*! exports provided: getWeatherAutocomplete, getWeatherAutocompleteSuccess, setWeatherAutocomplete, getWeatherAutocompleteFailure, getCurrentSelectedPlaceWeather, getCurrentSelectedPlaceWeatherSuccess, setCurrentSelectedPlaceWeather, getCurrentSelectedPlaceWeatherFailure, getFiveDailyWeatherForecasts, getFiveDailyWeatherForecastsSuccess, setFiveDailyWeatherForecasts, getFiveDailyWeatherForecastsFailure, setAutocompleteSelectedValue, setCurrentCityExistInFavoriteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherAutocomplete", function() { return getWeatherAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherAutocompleteSuccess", function() { return getWeatherAutocompleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWeatherAutocomplete", function() { return setWeatherAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherAutocompleteFailure", function() { return getWeatherAutocompleteFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSelectedPlaceWeather", function() { return getCurrentSelectedPlaceWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSelectedPlaceWeatherSuccess", function() { return getCurrentSelectedPlaceWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentSelectedPlaceWeather", function() { return setCurrentSelectedPlaceWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSelectedPlaceWeatherFailure", function() { return getCurrentSelectedPlaceWeatherFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDailyWeatherForecasts", function() { return getFiveDailyWeatherForecasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDailyWeatherForecastsSuccess", function() { return getFiveDailyWeatherForecastsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFiveDailyWeatherForecasts", function() { return setFiveDailyWeatherForecasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDailyWeatherForecastsFailure", function() { return getFiveDailyWeatherForecastsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutocompleteSelectedValue", function() { return setAutocompleteSelectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentCityExistInFavoriteList", function() { return setCurrentCityExistInFavoriteList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const getWeatherAutocomplete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Weather Autocomplete Weather', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getWeatherAutocompleteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Weather Autocomplete Weather Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const setWeatherAutocomplete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] set Weather Autocomplete', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getWeatherAutocompleteFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Weather Autocomplete Weather Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getCurrentSelectedPlaceWeather = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Current Selected Place Weather', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getCurrentSelectedPlaceWeatherSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Current Selected Place Weather Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const setCurrentSelectedPlaceWeather = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] set Current Selected Place Weather', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getCurrentSelectedPlaceWeatherFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Current Selected Place Weather Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getFiveDailyWeatherForecasts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Five Daily Weather Forecasts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getFiveDailyWeatherForecastsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Five Daily Weather Forecasts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const setFiveDailyWeatherForecasts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] set Five Daily Weather Forecasts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const getFiveDailyWeatherForecastsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] Get Five Daily Weather Forecasts Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const setAutocompleteSelectedValue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] set Autocomplete Selected Value', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const setCurrentCityExistInFavoriteList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Weather] set Current City Exist In Favorites List', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/store/effects/app.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/store/effects/app.effects.ts ***!
  \**********************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppEffects = class AppEffects {
};
AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppEffects);



/***/ }),

/***/ "./src/app/store/effects/favorites.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/store/effects/favorites.effects.ts ***!
  \****************************************************/
/*! exports provided: FavoritesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesEffects", function() { return FavoritesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/weather.service */ "./src/app/shared/services/weather.service.ts");




let FavoritesEffects = class FavoritesEffects {
    constructor(actions$, weatherApiService) {
        this.actions$ = actions$;
        this.weatherApiService = weatherApiService;
    }
};
FavoritesEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
];
FavoritesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FavoritesEffects);



/***/ }),

/***/ "./src/app/store/effects/weather.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/store/effects/weather.effects.ts ***!
  \**************************************************/
/*! exports provided: WeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherEffects", function() { return WeatherEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/weather.actions */ "./src/app/store/actions/weather.actions.ts");
/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/weather.service */ "./src/app/shared/services/weather.service.ts");
/* harmony import */ var _shared_models_weather_view_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/weather-view.models */ "./src/app/shared/models/weather-view.models.ts");








let WeatherEffects = class WeatherEffects {
    constructor(actions$, weatherApiService) {
        this.actions$ = actions$;
        this.weatherApiService = weatherApiService;
        this.getWeatherAutocomplete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getWeatherAutocomplete"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => {
            return this.weatherApiService.getAutocompleteResults(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getWeatherAutocompleteFailure"]({ error: err }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getWeatherAutocompleteSuccess"]({
                data: (new _shared_models_weather_view_models__WEBPACK_IMPORTED_MODULE_7__["ACCUWeatherAutocompleteResultsViewModel"](data).autocompleteResults)
            });
        }));
        this.getWeatherAutocompleteSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getWeatherAutocompleteSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["setWeatherAutocomplete"](data)));
        this.setCurrentSelectedPlaceWeather$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getCurrentSelectedPlaceWeather"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => {
            return this.weatherApiService.getCurrentSelectedPlaceForecast(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getCurrentSelectedPlaceWeatherFailure"]({ error: err }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getCurrentSelectedPlaceWeatherSuccess"]({
                data: (new _shared_models_weather_view_models__WEBPACK_IMPORTED_MODULE_7__["CurrentConditionsViewModel"](data))
            });
        }));
        this.getCurrentSelectedPlaceWeatherSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getCurrentSelectedPlaceWeatherSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentSelectedPlaceWeather"](data)));
        this.getFiveDailyWeatherForecasts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getFiveDailyWeatherForecasts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => {
            return this.weatherApiService.get5DaysOfDailyForecasts(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getFiveDailyWeatherForecastsFailure"]({ error: err }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getFiveDailyWeatherForecastsSuccess"]({
                data: (new _shared_models_weather_view_models__WEBPACK_IMPORTED_MODULE_7__["FiveDaysOfForecastViewModel"](data).forecasts)
            });
        }));
        this.getFiveDailyWeatherForecastsSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["getFiveDailyWeatherForecastsSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["setFiveDailyWeatherForecasts"](data)));
    }
};
WeatherEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "getWeatherAutocomplete$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "getWeatherAutocompleteSuccess$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "setCurrentSelectedPlaceWeather$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "getCurrentSelectedPlaceWeatherSuccess$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "getFiveDailyWeatherForecasts$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "getFiveDailyWeatherForecastsSuccess$", void 0);
WeatherEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WeatherEffects);



/***/ }),

/***/ "./src/app/store/reducers/favorites.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/favorites.reducer.ts ***!
  \*****************************************************/
/*! exports provided: favoritesFeatureKey, favInitialState, reducer, getFavoritesArray, getSelectedFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoritesFeatureKey", function() { return favoritesFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favInitialState", function() { return favInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritesArray", function() { return getFavoritesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedFavorite", function() { return getSelectedFavorite; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/favorites.actions */ "./src/app/store/actions/favorites.actions.ts");



const favoritesFeatureKey = 'favorites';
const favInitialState = {
    favoritesArray: [],
    selectedFavorite: null
};
const favoritesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(favInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_2__["setSelectedFavorite"], (state, { data }) => (Object.assign({}, state, { selectedFavorite: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_2__["addToFavorites"], (state, { data }) => (Object.assign({}, state, { favoritesArray: [...state.favoritesArray, data] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_2__["setSelectedFavorite"], (state, { data }) => (Object.assign({}, state, { selectedFavorite: data }))));
function reducer(state = favInitialState, action) {
    return favoritesReducer(state, action);
}
const getFavoritesArray = (state) => state.favoritesArray;
const getSelectedFavorite = (state) => state.selectedFavorite;


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers, selectWeatherState, getAutocompleteResults, getCurrentSelectedData, getFiveDaysForecast, getAutocompleteSelected, getIsCurrentCityExistInFavoriteList, selectFavoritesState, getSelectedFavorite, getFavoritesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWeatherState", function() { return selectWeatherState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutocompleteResults", function() { return getAutocompleteResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSelectedData", function() { return getCurrentSelectedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDaysForecast", function() { return getFiveDaysForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutocompleteSelected", function() { return getAutocompleteSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCurrentCityExistInFavoriteList", function() { return getIsCurrentCityExistInFavoriteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFavoritesState", function() { return selectFavoritesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedFavorite", function() { return getSelectedFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritesArray", function() { return getFavoritesArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _weather_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.reducer */ "./src/app/store/reducers/weather.reducer.ts");
/* harmony import */ var _favorites_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites.reducer */ "./src/app/store/reducers/favorites.reducer.ts");





const reducers = {
    favorites: _favorites_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    weather: _weather_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? [] : [];
const selectWeatherState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_weather_reducer__WEBPACK_IMPORTED_MODULE_3__["weatherFeatureKey"]);
const getAutocompleteResults = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducer__WEBPACK_IMPORTED_MODULE_3__["getAutocompleteResults"]);
const getCurrentSelectedData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducer__WEBPACK_IMPORTED_MODULE_3__["getCurrentSelectedData"]);
const getFiveDaysForecast = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducer__WEBPACK_IMPORTED_MODULE_3__["getFiveDaysForecast"]);
const getAutocompleteSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducer__WEBPACK_IMPORTED_MODULE_3__["getAutocompleteSelectedValue"]);
const getIsCurrentCityExistInFavoriteList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsCurrentCityExistInFavoriteList"]);
const selectFavoritesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_favorites_reducer__WEBPACK_IMPORTED_MODULE_4__["favoritesFeatureKey"]);
const getSelectedFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFavoritesState, _favorites_reducer__WEBPACK_IMPORTED_MODULE_4__["getSelectedFavorite"]);
const getFavoritesArray = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFavoritesState, _favorites_reducer__WEBPACK_IMPORTED_MODULE_4__["getFavoritesArray"]);


/***/ }),

/***/ "./src/app/store/reducers/weather.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/weather.reducer.ts ***!
  \***************************************************/
/*! exports provided: weatherFeatureKey, initialState, reducer, getAutocompleteSelectedValue, getAutocompleteResults, getCurrentSelectedData, getFiveDaysForecast, getIsCurrentCityExistInFavoriteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherFeatureKey", function() { return weatherFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutocompleteSelectedValue", function() { return getAutocompleteSelectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutocompleteResults", function() { return getAutocompleteResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSelectedData", function() { return getCurrentSelectedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDaysForecast", function() { return getFiveDaysForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCurrentCityExistInFavoriteList", function() { return getIsCurrentCityExistInFavoriteList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_weather_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/weather.actions */ "./src/app/store/actions/weather.actions.ts");



const weatherFeatureKey = 'weather';
const initialState = {
    autocompleteResults: [],
    autocompleteSelectedValue: null,
    currentSelectedData: null,
    fiveDaysForecast: null,
    isCurrentCityExistInFavoriteList: false
};
const weatherReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_2__["setWeatherAutocomplete"], (state, { data }) => (Object.assign({}, state, { autocompleteResults: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentSelectedPlaceWeather"], (state, { data }) => (Object.assign({}, state, { currentSelectedData: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_2__["setFiveDailyWeatherForecasts"], (state, { data }) => (Object.assign({}, state, { fiveDaysForecast: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_2__["setAutocompleteSelectedValue"], (state, { data }) => (Object.assign({}, state, { autocompleteSelectedValue: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentCityExistInFavoriteList"], (state, { data }) => (Object.assign({}, state, { isCurrentCityExistInFavoriteList: data }))));
function reducer(state = initialState, action) {
    return weatherReducer(state, action);
}
const getAutocompleteSelectedValue = (state) => state.autocompleteSelectedValue;
const getAutocompleteResults = (state) => state.autocompleteResults;
const getCurrentSelectedData = (state) => state.currentSelectedData;
const getFiveDaysForecast = (state) => state.fiveDaysForecast;
const getIsCurrentCityExistInFavoriteList = (state) => state.isCurrentCityExistInFavoriteList;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    ACCUWEATHER_API_KEY: 'Sn9dKUpfAnUsFh7xatHDhWv5p31rN0Vo',
    ACCUWEATHER_API_BASE_URL: 'http://dataservice.accuweather.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\MaziTar22112019_Ngrx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map