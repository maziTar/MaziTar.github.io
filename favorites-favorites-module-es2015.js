(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-container.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-container.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fav-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1>Your Favorites List</h1>\n  <mat-card class=\"fav-container-card\" fxLayout=\"row wrap\" fxLayoutGap=\"1rem\">\n    <mat-card (click)=\"favoriteClicked(favorite)\"\n              *ngFor=\"let favorite of favoritesArray$ | async\"\n              class=\"inner-fav-cards\"\n              fxLayout=\"column\" fxLayoutAlign=\"center center\"\n              fxLayoutGap=\"0.5rem\">\n      <img [src]=\"iconsGeneratorFunc(favorite.icon)\" alt=\"weather icon\" class=\"img-responsive\" mat-card-avatar\n           typeof=\"foaf:Image\">\n      <mat-card-header fxLayoutAlign=\"center center\">\n        <mat-card-title>{{favorite.name }}</mat-card-title>\n        <mat-card-title>{{favorite.currentWeatherText }}</mat-card-title>\n        <mat-card-subtitle>{{favorite.degrees}} C°\n        </mat-card-subtitle>\n      </mat-card-header>\n    </mat-card>\n    <h3 *ngIf=\"!(favoritesArray$ | async).length\">Nothing here yet</h3>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./src/app/favorites/favorites-container.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/favorites/favorites-container.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fav-container {\n  padding: 1rem;\n}\n.fav-container .fav-container-card {\n  max-width: 50rem;\n}\n.fav-container .fav-container-card .inner-fav-cards {\n  max-width: 10rem;\n  min-width: 10rem;\n  margin: 1rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL0M6XFxEZXZcXE1hemlUYXIyMjExMjAxOV9OZ3J4L3NyY1xcYXBwXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIC5mYXYtY29udGFpbmVyLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcclxuXHJcbiAgICAuaW5uZXItZmF2LWNhcmRzIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuZmF2LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uZmF2LWNvbnRhaW5lciAuZmF2LWNvbnRhaW5lci1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cbi5mYXYtY29udGFpbmVyIC5mYXYtY29udGFpbmVyLWNhcmQgLmlubmVyLWZhdi1jYXJkcyB7XG4gIG1heC13aWR0aDogMTByZW07XG4gIG1pbi13aWR0aDogMTByZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/favorites/favorites-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/favorites/favorites-container.component.ts ***!
  \************************************************************/
/*! exports provided: FavoritesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesContainerComponent", function() { return FavoritesContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/favorites.actions */ "./src/app/store/actions/favorites.actions.ts");
/* harmony import */ var _shared_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/util.service */ "./src/app/shared/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let FavoritesContainerComponent = class FavoritesContainerComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.iconsGeneratorFunc = _shared_services_util_service__WEBPACK_IMPORTED_MODULE_5__["iconsGeneratorFunc"];
    }
    ngOnInit() {
        this.favoritesArray$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getFavoritesArray"]);
    }
    favoriteClicked(fav) {
        this.store.dispatch(_store_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_4__["setSelectedFavorite"]({ data: fav }));
        this.router.navigateByUrl('weather-forecast/main').then();
    }
};
FavoritesContainerComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FavoritesContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites-container.component.scss */ "./src/app/favorites/favorites-container.component.scss")).default]
    })
], FavoritesContainerComponent);



/***/ }),

/***/ "./src/app/favorites/favorites-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FavoritesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesRoutingModule", function() { return FavoritesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _favorites_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites-container.component */ "./src/app/favorites/favorites-container.component.ts");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
    },
    {
        path: 'main',
        component: _favorites_container_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesContainerComponent"]
    }
];
let FavoritesRoutingModule = class FavoritesRoutingModule {
};
FavoritesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FavoritesRoutingModule);



/***/ }),

/***/ "./src/app/favorites/favorites.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _favorites_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites-container.component */ "./src/app/favorites/favorites-container.component.ts");
/* harmony import */ var _app_common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-common/common.module */ "./src/app/app-common/common.module.ts");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "./src/app/favorites/favorites-routing.module.ts");






let FavoritesModule = class FavoritesModule {
};
FavoritesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_favorites_container_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesContainerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesRoutingModule"],
            _app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]
        ]
    })
], FavoritesModule);



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module-es2015.js.map