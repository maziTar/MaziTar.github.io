(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-weather-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather-container.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather-container.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"weather-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1>Forecast for the next 5 days</h1>\n  <form>\n    <mat-form-field>\n      <input [formControl]=\"weatherSearchControl\" [matAutocomplete]=\"auto\" aria-label=\"Number\" matInput\n             placeholder=\"Find a city's weather\"\n             type=\"text\">\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onAutocompleteSelection($event)\"\n                        [displayWith]=\"displayAutoCompleteFn\">\n        <mat-option *ngFor=\"let option of filteredOptions$ | async\" [value]=\"option\">\n          {{option.localizedName}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n  <mat-card *ngIf=\"currentWeatherData$ | async as currentWeatherData\" fxLayout=\"column\"\n            fxLayoutGap=\"2rem\">\n\n    <div *ngIf=\"selectedAutoCompleteOption$ | async as autocompleteSelected\" class=\"main-header\"\n         fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n      <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"row\" fxLayoutAlign=\"start\">\n        <img [src]=\"iconsGeneratorFunc(currentWeatherData?.weatherIcon)\" alt=\"weather icon\" class=\"img-responsive\"\n             height=\"45\"\n             typeof=\"foaf:Image\">\n        <mat-card-title-group>\n          <mat-card-title>{{autocompleteSelected?.localizedName}}</mat-card-title>\n          <mat-card-subtitle>\n            {{currentWeatherData?.temperature.Value}} C°\n          </mat-card-subtitle>\n        </mat-card-title-group>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"0.5rem\">\n        <mat-icon>favorite</mat-icon>\n        <button (click)=\"handleFavoriteEvent(currentWeatherData)\" mat-raised-button>\n          {{ !!(isCurrentCityExistInFavoriteList$ | async) ? 'Remove From Favorites' : 'Add To Favorites' }}\n        </button>\n      </div>\n    </div>\n    <mat-card-title fxLayoutAlign=\"center center\">\n      {{currentWeatherData?.weatherText}}\n    </mat-card-title>\n\n    <mat-card-content *ngIf=\"!!(selectedLocationFiveDailyDetails$ | async)\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2rem\">\n      <mat-card *ngFor=\"let day of selectedLocationFiveDailyDetails$ | async\" fxLayout=\"column\" class=\"inner-forecast-cards\"\n                fxLayoutAlign=\"center center\" fxLayoutGap=\"0.5rem\">\n        <img [src]=\"iconsGeneratorFunc(day.DayIcon)\" alt=\"weather icon\" class=\"img-responsive\" mat-card-avatar\n             typeof=\"foaf:Image\">\n        <mat-card-header fxLayoutAlign=\"center center\">\n          <mat-card-title>{{day.Date | date : 'EEEE' }}</mat-card-title>\n          <mat-card-subtitle>{{day.Temperature.Maximum.Value}} C° - {{day.Temperature.Minimum.Value }} C°\n          </mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./src/app/shared/models/favorities.models.ts": 
        /*!****************************************************!*\
          !*** ./src/app/shared/models/favorities.models.ts ***!
          \****************************************************/
        /*! exports provided: WeatherLocationFavorite */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherLocationFavorite", function () { return WeatherLocationFavorite; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WeatherLocationFavorite = /** @class */ (function () {
                function WeatherLocationFavorite(name, degrees, currentWeatherText, icon, key) {
                    this.key = key;
                    this.name = name;
                    this.degrees = degrees;
                    this.currentWeatherText = currentWeatherText;
                    this.icon = icon;
                }
                return WeatherLocationFavorite;
            }());
            /***/ 
        }),
        /***/ "./src/app/weather/weather-container.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/weather/weather-container.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".weather-container {\n  padding: 1rem;\n}\n.weather-container h1 {\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n}\n.weather-container ::ng-deep mat-card .mat-card-header-text {\n  margin: 0;\n}\n.weather-container .main-header {\n  margin: 1rem 1rem 0 0;\n}\n.weather-container mat-card-content {\n  margin: 0 1rem 1rem 1rem;\n}\n.weather-container .inner-forecast-cards {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9DOlxcRGV2XFxNYXppVGFyMjIxMTIwMTlfTmdyeC9zcmNcXGFwcFxcd2VhdGhlclxcd2VhdGhlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURDRTtFQUNFLHdCQUFBO1VBQUEscUJBQUE7RUFDQSx1QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURHSTtFQUNFLFNBQUE7QUNETjtBREtFO0VBQ0UscUJBQUE7QUNISjtBRE1FO0VBQ0Usd0JBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VhdGhlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbWF0LWNhcmQge1xyXG4gICAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1haW4taGVhZGVyIHtcclxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMDtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDFyZW0gMXJlbSAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyLWZvcmVjYXN0LWNhcmRze1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCIud2VhdGhlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLndlYXRoZXItY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xufVxuLndlYXRoZXItY29udGFpbmVyIDo6bmctZGVlcCBtYXQtY2FyZCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDA7XG59XG4ud2VhdGhlci1jb250YWluZXIgLm1haW4taGVhZGVyIHtcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMCAwO1xufVxuLndlYXRoZXItY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW46IDAgMXJlbSAxcmVtIDFyZW07XG59XG4ud2VhdGhlci1jb250YWluZXIgLmlubmVyLWZvcmVjYXN0LWNhcmRzIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/weather/weather-container.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/weather/weather-container.component.ts ***!
          \********************************************************/
        /*! exports provided: WeatherContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherContainerComponent", function () { return WeatherContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _shared_consts_weather_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/consts/weather.consts */ "./src/app/shared/consts/weather.consts.ts");
            /* harmony import */ var _shared_models_favorities_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/favorities.models */ "./src/app/shared/models/favorities.models.ts");
            /* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducers */ "./src/app/store/reducers/index.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/weather.actions */ "./src/app/store/actions/weather.actions.ts");
            /* harmony import */ var _store_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/favorites.actions */ "./src/app/store/actions/favorites.actions.ts");
            /* harmony import */ var _shared_models_weather_view_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/models/weather-view.models */ "./src/app/shared/models/weather-view.models.ts");
            /* harmony import */ var _shared_services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/util.service */ "./src/app/shared/services/util.service.ts");
            var WeatherContainerComponent = /** @class */ (function () {
                function WeatherContainerComponent(store) {
                    this.store = store;
                    this.weatherSearchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.iconsGeneratorFunc = _shared_services_util_service__WEBPACK_IMPORTED_MODULE_11__["iconsGeneratorFunc"];
                    this.searchString = '';
                }
                WeatherContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedFavorite"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (data) {
                        var isFavorite = !!data;
                        var defaultVal = _shared_consts_weather_consts__WEBPACK_IMPORTED_MODULE_4__["ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH"];
                        var key = isFavorite ? data.key : defaultVal.key;
                        var localizedName = isFavorite ? data.name : defaultVal.localizedName;
                        _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["setAutocompleteSelectedValue"]({ data: new _shared_models_weather_view_models__WEBPACK_IMPORTED_MODULE_10__["ACCUWeatherAutocompleteViewModel"]({ LocalizedName: localizedName, Key: key }) }));
                        _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["getCurrentSelectedPlaceWeather"]({ data: key }));
                        _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["getFiveDailyWeatherForecasts"]({ data: key }));
                        _this.store.dispatch(_store_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__["setSelectedFavorite"]({ data: null }));
                        _this.filteredOptions$ = _this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getAutocompleteResults"]);
                        _this.selectedAutoCompleteOption$ = _this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getAutocompleteSelected"]);
                        _this.favorites$ = _this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getFavoritesArray"]);
                        _this.isCurrentCityExistInFavoriteList$ = _this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getIsCurrentCityExistInFavoriteList"]);
                        _this.checkIfCurrentCityExistInFavoriteArray();
                        _this.setCurrentWeather();
                        _this.setDailyForecasts();
                        _this.setFilersSubscriptions();
                    });
                };
                WeatherContainerComponent.prototype.displayAutoCompleteFn = function (option) {
                    return option ? option.LocalizedName : null;
                };
                WeatherContainerComponent.prototype.onAutocompleteSelection = function (selectionEvent) {
                    var selectedValue = selectionEvent.option.value;
                    this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["setAutocompleteSelectedValue"]({ data: selectedValue }));
                    this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["getCurrentSelectedPlaceWeather"]({ data: selectedValue.key }));
                    this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["getFiveDailyWeatherForecasts"]({ data: selectedValue.key }));
                    this.checkIfCurrentCityExistInFavoriteArray();
                };
                WeatherContainerComponent.prototype.handleFavoriteEvent = function (currentSelectionData) {
                    var _this = this;
                    this.favorites$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((function (favData) {
                        if (favData === void 0) { favData = []; }
                        _this.selectedAutoCompleteOption$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (autoData) {
                            var isFavExist = !!favData.find(function (fav) { return fav.key === autoData.key; });
                            _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["setCurrentCityExistInFavoriteList"]({ data: isFavExist }));
                            var favorite = new _shared_models_favorities_models__WEBPACK_IMPORTED_MODULE_5__["WeatherLocationFavorite"](autoData.localizedName, currentSelectionData.temperature.Value, currentSelectionData.weatherText, currentSelectionData.weatherIcon, autoData.key);
                            if (!isFavExist) {
                                _this.store.dispatch(_store_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__["addToFavorites"]({ data: favorite }));
                            }
                            else {
                                _this.store.dispatch(_store_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__["removeFromFavorites"]({ data: favorite }));
                            }
                            _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["setCurrentCityExistInFavoriteList"]({ data: !isFavExist }));
                        });
                    }))).subscribe();
                };
                WeatherContainerComponent.prototype.checkIfCurrentCityExistInFavoriteArray = function () {
                    var _this = this;
                    this.favorites$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((function (favData) {
                        if (favData === void 0) { favData = []; }
                        _this.selectedAutoCompleteOption$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (autoData) {
                            var isFavExist = !!favData.find(function (fav) { return fav.key === autoData.key; });
                            _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["setCurrentCityExistInFavoriteList"]({ data: isFavExist }));
                        });
                    }))).subscribe();
                };
                WeatherContainerComponent.prototype.setFilersSubscriptions = function () {
                    var _this = this;
                    this.allAutocompleteOptions$ = this.weatherSearchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
                    // TODO - move to the store
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (searchStr) { return _this.searchString = searchStr; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (searchText) {
                        _this.store.dispatch(_store_actions_weather_actions__WEBPACK_IMPORTED_MODULE_8__["getWeatherAutocomplete"]({ data: searchText }));
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getAutocompleteResults"]); }));
                    this.filteredOptions$ = this.allAutocompleteOptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (opt) { return !!opt; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (options) { return options.filter(function (opt) { return opt.localizedName && !!_this.searchString ?
                        opt.localizedName.toLowerCase().includes(String(_this.searchString).toLowerCase()) : null; }); }));
                };
                WeatherContainerComponent.prototype.setDailyForecasts = function () {
                    this.selectedLocationFiveDailyDetails$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getFiveDaysForecast"]);
                };
                WeatherContainerComponent.prototype.setCurrentWeather = function () {
                    this.currentWeatherData$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getCurrentSelectedData"]);
                };
                return WeatherContainerComponent;
            }());
            WeatherContainerComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
            ]; };
            WeatherContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-weather-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather-container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-container.component.scss */ "./src/app/weather/weather-container.component.scss")).default]
                })
            ], WeatherContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/weather/weather-routing.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/weather/weather-routing.module.ts ***!
          \***************************************************/
        /*! exports provided: WeatherRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRoutingModule", function () { return WeatherRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _weather_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-container.component */ "./src/app/weather/weather-container.component.ts");
            var routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'main'
                },
                {
                    path: 'main',
                    component: _weather_container_component__WEBPACK_IMPORTED_MODULE_3__["WeatherContainerComponent"]
                }
            ];
            var WeatherRoutingModule = /** @class */ (function () {
                function WeatherRoutingModule() {
                }
                return WeatherRoutingModule;
            }());
            WeatherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], WeatherRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/weather/weather.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/weather/weather.module.ts ***!
          \*******************************************/
        /*! exports provided: WeatherModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherModule", function () { return WeatherModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _weather_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-container.component */ "./src/app/weather/weather-container.component.ts");
            /* harmony import */ var _app_common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-common/common.module */ "./src/app/app-common/common.module.ts");
            /* harmony import */ var _weather_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-routing.module */ "./src/app/weather/weather-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            var WeatherModule = /** @class */ (function () {
                function WeatherModule() {
                }
                return WeatherModule;
            }());
            WeatherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_weather_container_component__WEBPACK_IMPORTED_MODULE_3__["WeatherContainerComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                        _weather_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeatherRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                    ]
                })
            ], WeatherModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=weather-weather-module-es2015.js.map
//# sourceMappingURL=weather-weather-module-es5.js.map
//# sourceMappingURL=weather-weather-module-es5.js.map