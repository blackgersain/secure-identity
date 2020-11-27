webpackJsonp([5],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonProvider = /** @class */ (function () {
    function CommonProvider(modalCtrl, loadingCtrl, toastCtrl, alertCtrl, platform) {
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.modalStack = new Array();
        //urlServidor:string = "http://201.184.243.195:8095"; // publica
        //urlServidor: string = "http://172.16.0.20:8095";
        this.urlServidor = "http://172.16.0.20:9095";
        this.submenu = {
            sHuellas: false,
            sAvistamientos: false,
            sEntorno: false,
            sOrdenamiento: false,
            sVigias: false,
            sMovilidad: false,
            sConcursoFotografia: false
        };
        this.stackActiveLayersSubcapas = new Array();
        /*
          menuPreferencias = {
            Huellas: false,
            Avistamientos: false,
            Entorno: false,
            Ordenamiento: false,
            Vigias: false,
            Movilidad: false
          };
        */
        this.capas = [];
        this.activeLayers = {
            ids: [],
            level: ''
        };
        this.alertCtrl.create();
        CommonProvider_1.alert = this.alertCtrl;
    }
    CommonProvider_1 = CommonProvider;
    CommonProvider.prototype.createModal = function (component, data, opts) {
        var modal = this.modalCtrl.create(component, data, opts);
        this.modalStack.push(modal);
        return modal;
    };
    CommonProvider.prototype.dismissModal = function (data, role, navOptions) {
        if (this.canDismissModal()) {
            //
            console.log('dismissing modal');
            var modal = this.modalStack.pop();
            return modal.dismiss(data, role, navOptions);
        }
        return null;
    };
    CommonProvider.prototype.canDismissModal = function () {
        console.log('modalStack ' + this.modalStack.length);
        return this.modalStack.length > 0;
    };
    CommonProvider.prototype.presentAcceptAlert = function (title, message, onAccept) {
        var _this = this;
        if (this.alert)
            return;
        var options = {
            title: title,
            enableBackdropDismiss: true,
            message: message,
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: onAccept
                }
            ]
        };
        this.alert = this.alertCtrl.create(options);
        this.alert.onDidDismiss(function (data, role) {
            _this.alert = null;
        });
        this.alert.present();
    };
    CommonProvider.prototype.dissmisAlert = function () {
        if (this.alert)
            this.alert.dismiss();
    };
    CommonProvider.prototype.presentAcceptCancelAlert = function (title, message, onAccept) {
        var _this = this;
        if (this.alert)
            return;
        var options = {
            title: title,
            enableBackdropDismiss: true,
            message: message,
            buttons: [
                {
                    text: 'Aceptar',
                    handler: onAccept
                },
                {
                    text: 'Regresar'
                },
                {
                    text: '',
                    cssClass: 'closeBt',
                }
            ]
        };
        this.alert = this.alertCtrl.create(options);
        this.alert.onDidDismiss(function (data, role) {
            _this.alert = null;
        });
        this.alert.present();
    };
    CommonProvider.prototype.presentAlert = function (alertOptions) {
        var _this = this;
        if (this.alert)
            return;
        this.alert = this.alertCtrl.create(alertOptions);
        this.alert.onDidDismiss(function (data, role) {
            _this.alert = null;
        });
        this.alert.present();
    };
    CommonProvider.prototype.presentLoading = function () {
        if (this.loading)
            return;
        this.loading = this.loadingCtrl.create({
            content: "Un momento por favor...",
        });
        this.loading.present();
    };
    CommonProvider.prototype.presentLoadingCancel = function () {
        if (this.loading)
            return;
        this.loading = this.loadingCtrl.create({
            content: "Un momento por favor...",
            enableBackdropDismiss: true,
        });
        this.loading.present();
    };
    CommonProvider.prototype.presentFullLoading = function () {
        if (this.loading)
            return;
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/logo3.png"/>',
            cssClass: 'custom-loading',
        });
        this.loading.present();
    };
    CommonProvider.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismissAll();
            this.loading = null;
        }
    };
    CommonProvider.prototype.appLoading = function (mensajeLoading, duration) {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n        <!-- <div class=\"custom-spinner-box\"></div>-->\n        <h5>" + mensajeLoading + "</h5>\n      </div>",
            duration: duration || 5000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    CommonProvider.prototype.appToast = function (objetoToast) {
        var toast = this.toastCtrl.create({
            message: objetoToast.mensaje,
            duration: objetoToast.duration,
            position: objetoToast.posicion
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CommonProvider.prototype.menuApp = function (opocion, valor) {
        this.submenu[opocion] = valor;
    };
    CommonProvider.prototype.generalAlert = function (pTitle, pSubtitle) {
        var alert = this.alertCtrl.create({
            title: '<ion-toolbar color="primary">' + pTitle + '</ion-toolbar>',
            subTitle: pSubtitle,
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        //this.platform.exitApp();
                    }
                },
                {
                    text: '',
                    cssClass: 'closeBt',
                    handler: function () {
                        // reject(false);
                    }
                }
            ],
            cssClass: '{background-color: white; color: red; button{ color: red;}}'
        });
        alert.present();
    };
    CommonProvider.prototype.basicAlert = function (titulo, mensaje) {
        var alert = CommonProvider_1.alert.create({
            title: titulo,
            enableBackdropDismiss: true,
            subTitle: mensaje,
            cssClass: 'alertAv',
            buttons: [
                {
                    text: 'Aceptar',
                },
                {
                    text: '',
                    cssClass: 'closeBt',
                }
            ]
        });
        alert.present();
    };
    CommonProvider.prototype.confirmAlert = function (titulo, mensaje) {
        return new Promise(function (resolve, reject) {
            var alert = CommonProvider_1.alert.create({
                title: titulo,
                enableBackdropDismiss: true,
                subTitle: mensaje,
                cssClass: 'warning  alertAv',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function () {
                            reject(false);
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: function () {
                            resolve(true);
                        }
                    },
                    {
                        text: '',
                        cssClass: 'closeBt',
                        handler: function () {
                            reject(false);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    CommonProvider.prototype.confirmAlertCss = function (titulo, mensaje, cssClass) {
        return new Promise(function (resolve, reject) {
            var alert = CommonProvider_1.alert.create({
                title: titulo,
                enableBackdropDismiss: true,
                subTitle: mensaje,
                cssClass: 'warning  alertAv sGenRep',
                buttons: [
                    {
                        text: 'Regresar',
                        handler: function () {
                            reject(false);
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: function () {
                            resolve(true);
                        }
                    },
                    {
                        text: '',
                        cssClass: 'closeBt',
                        handler: function () {
                            reject(false);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    CommonProvider.prototype.basicAlePrtCss = function (titulo, mensaje, css, boton) {
        return new Promise(function (resolve, reject) {
            var alert = CommonProvider_1.alert.create({
                title: titulo,
                enableBackdropDismiss: true,
                cssClass: css,
                subTitle: mensaje,
                buttons: [
                    {
                        text: boton,
                        handler: function () {
                            resolve(true);
                        }
                    },
                    {
                        text: '',
                        cssClass: 'closeBt',
                        handler: function () {
                            reject(false);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    CommonProvider = CommonProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], CommonProvider);
    return CommonProvider;
    var CommonProvider_1;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/enrollment/enrollment.module": [
		407,
		1
	],
	"../pages/home/home.module": [
		408,
		0
	],
	"../pages/image-capture/image-capture.module": [
		409,
		4
	],
	"../pages/login/login.module": [
		410,
		3
	],
	"../pages/welcome/welcome.module": [
		411,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 180;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosVerifyRsTransaction; });
var KairosVerifyRsTransaction = /** @class */ (function () {
    function KairosVerifyRsTransaction() {
    }
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "liveness", {
        /**
         * Getter liveness
         * @return {number}
         */
        get: function () {
            return this._liveness;
        },
        /**
         * Setter liveness
         * @param {number} value
         */
        set: function (value) {
            this._liveness = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "enrollmentTimestamp", {
        /**
         * Getter enrollmentTimestamp
         * @return {string}
         */
        get: function () {
            return this._enrollmentTimestamp;
        },
        /**
         * Setter enrollmentTimestamp
         * @param {string} value
         */
        set: function (value) {
            this._enrollmentTimestamp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "eyeDistance", {
        /**
         * Getter eyeDistance
         * @return {number}
         */
        get: function () {
            return this._eyeDistance;
        },
        /**
         * Setter eyeDistance
         * @param {number} value
         */
        set: function (value) {
            this._eyeDistance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "faceId", {
        /**
         * Getter faceId
         * @return {string}
         */
        get: function () {
            return this._faceId;
        },
        /**
         * Setter faceId
         * @param {string} value
         */
        set: function (value) {
            this._faceId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "pitch", {
        /**
         * Getter pitch
         * @return {number}
         */
        get: function () {
            return this._pitch;
        },
        /**
         * Setter pitch
         * @param {number} value
         */
        set: function (value) {
            this._pitch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "roll", {
        /**
         * Getter roll
         * @return {number}
         */
        get: function () {
            return this._roll;
        },
        /**
         * Setter roll
         * @param {number} value
         */
        set: function (value) {
            this._roll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "yaw", {
        /**
         * Getter yaw
         * @return {number}
         */
        get: function () {
            return this._yaw;
        },
        /**
         * Setter yaw
         * @param {number} value
         */
        set: function (value) {
            this._yaw = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (_status) {
            this._status = _status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "subjectId", {
        get: function () {
            return this._subjectId;
        },
        set: function (_subjectId) {
            this._subjectId = _subjectId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "quality", {
        get: function () {
            return this._quality;
        },
        set: function (_quality) {
            this._quality = _quality;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (_width) {
            this._width = _width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (_height) {
            this._height = _height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "topLeftX", {
        get: function () {
            return this._topLeftX;
        },
        set: function (_topLeftX) {
            this._topLeftX = _topLeftX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "topLeftY", {
        get: function () {
            return this._topLeftY;
        },
        set: function (_topLeftY) {
            this._topLeftY = _topLeftY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        set: function (_confidence) {
            this._confidence = _confidence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRsTransaction.prototype, "galleryName", {
        get: function () {
            return this._galleryName;
        },
        set: function (_galleryName) {
            this._galleryName = _galleryName;
        },
        enumerable: true,
        configurable: true
    });
    KairosVerifyRsTransaction.parse = function (json) {
        var transaction = new KairosVerifyRsTransaction();
        transaction.status = json.status;
        transaction.subjectId = json.subject_id;
        transaction.quality = json.quality;
        transaction.width = json.width;
        transaction.height = json.heigth;
        transaction.topLeftX = json.topLeftX;
        transaction.topLeftY = json.topLeftY;
        transaction.confidence = json.confidence;
        transaction.galleryName = json.gallery_name;
        transaction.liveness = json.liveness;
        transaction.enrollmentTimestamp = json.enrollment_timestamp;
        transaction.eyeDistance = json.eyeDistance;
        transaction.faceId = json.face_id;
        transaction.pitch = json.pitch;
        transaction.roll = json.roll;
        transaction.yaw = json.yaw;
        return transaction;
    };
    return KairosVerifyRsTransaction;
}());

//# sourceMappingURL=kairos-verify-rs-transaction.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES; });
var PAGES = {
    ImageCapture: "ImageCapturePage",
    Home: "HomePage",
    Login: "LoginPage",
    Welcome: "WelcomePage"
};
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtos_kairos_verify_rs__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_properties__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dtos_kairos_enroll_rs__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KairosProvider = /** @class */ (function () {
    function KairosProvider(http, common) {
        this.http = http;
        this.common = common;
        console.log('Hello KairosProvider Provider');
    }
    KairosProvider.prototype.enroll = function (kairosVerifyRq) {
        var _this = this;
        var url = "https://api.kairos.com/enroll";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .append('Content-Type', 'application/json')
            .append('app_id', __WEBPACK_IMPORTED_MODULE_4__shared_properties__["a" /* Props */].appId)
            .append('app_key', __WEBPACK_IMPORTED_MODULE_4__shared_properties__["a" /* Props */].appKey);
        kairosVerifyRq.galleryName = __WEBPACK_IMPORTED_MODULE_4__shared_properties__["a" /* Props */].galleryName;
        return this.http.post(url, kairosVerifyRq.stringify(), { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (result) {
            var resultStr = JSON.stringify(result);
            if (resultStr.includes("Errors")) {
                var message = '';
                if (resultStr.includes("5002"))
                    message = 'La imagen capturada no contiene un rostro.';
                else
                    message = 'kairos verify with errors: ' + resultStr;
                _this.common.presentAcceptAlert('Reconocimiento Facial Denegado', message);
            }
            return __WEBPACK_IMPORTED_MODULE_6__dtos_kairos_enroll_rs__["a" /* KairosEnrollRs */].parse(result);
        }));
    };
    KairosProvider.prototype.verify = function (kairosVerifyRq) {
        var _this = this;
        var url = "https://api.kairos.com/recognize";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .append('Content-Type', 'application/json')
            .append('app_id', __WEBPACK_IMPORTED_MODULE_4__shared_properties__["a" /* Props */].appId)
            .append('app_key', __WEBPACK_IMPORTED_MODULE_4__shared_properties__["a" /* Props */].appKey);
        kairosVerifyRq.galleryName = __WEBPACK_IMPORTED_MODULE_4__shared_properties__["a" /* Props */].galleryName;
        return this.http.post(url, kairosVerifyRq.stringify(), { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (result) {
            var resultStr = JSON.stringify(result);
            var message = '';
            if (resultStr.includes("Errors")) {
                if (resultStr.includes("5002"))
                    message = 'La imagen capturada no contiene un rostro.';
                else if (resultStr.includes("5004"))
                    message = 'La imagen capturada no coincide con algún perfil facial registrado.';
                else
                    message = 'kairos verify with errors: ' + resultStr;
                _this.common.presentAcceptAlert('Reconocimiento Facial Denegado', message);
            }
            else if (resultStr.includes("failure")) {
                message = 'La imagen capturada no coincide con algún perfil facial registrado.';
                _this.common.presentAcceptAlert('Reconocimiento Facial Denegado', message);
            }
            return __WEBPACK_IMPORTED_MODULE_2__dtos_kairos_verify_rs__["a" /* KairosVerifyRs */].parse(result);
        }));
    };
    KairosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__common_common__["a" /* CommonProvider */]])
    ], KairosProvider);
    return KairosProvider;
}());

//# sourceMappingURL=kairos.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(253);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_kairos_kairos__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/enrollment/enrollment.module#EnrollmentPageModule', name: 'EnrollmentPage', segment: 'enrollment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-capture/image-capture.module#ImageCapturePageModule', name: 'ImageCapturePage', segment: 'image-capture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__providers_kairos_kairos__["a" /* KairosProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_common_common__["a" /* CommonProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosVerifyRs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kairos_verify_rs_image__ = __webpack_require__(278);

var KairosVerifyRs = /** @class */ (function () {
    function KairosVerifyRs() {
    }
    Object.defineProperty(KairosVerifyRs.prototype, "images", {
        get: function () {
            return this._images;
        },
        set: function (images) {
            this._images = images;
        },
        enumerable: true,
        configurable: true
    });
    KairosVerifyRs.parse = function (json) {
        var kairosVerifyRs = new KairosVerifyRs();
        kairosVerifyRs.images = json.images.map(function (image) { return __WEBPACK_IMPORTED_MODULE_0__kairos_verify_rs_image__["a" /* KairosVerifyRsImage */].parse(image); });
        return kairosVerifyRs;
    };
    return KairosVerifyRs;
}());

//# sourceMappingURL=kairos-verify-rs.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosVerifyRsImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kairos_verify_rs_transaction__ = __webpack_require__(183);

var KairosVerifyRsImage = /** @class */ (function () {
    function KairosVerifyRsImage() {
    }
    Object.defineProperty(KairosVerifyRsImage.prototype, "transaction", {
        get: function () {
            return this._transaction;
        },
        set: function (transaction) {
            this._transaction = transaction;
        },
        enumerable: true,
        configurable: true
    });
    KairosVerifyRsImage.parse = function (json) {
        var image = new KairosVerifyRsImage();
        image.transaction = __WEBPACK_IMPORTED_MODULE_0__kairos_verify_rs_transaction__["a" /* KairosVerifyRsTransaction */].parse(json.transaction);
        return image;
    };
    return KairosVerifyRsImage;
}());

//# sourceMappingURL=kairos-verify-rs-image.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Props; });
var Props = {
    appId: "269fafa4",
    appKey: "3770148d0a9897b6d6f289792ff6deee",
    galleryName: "secure-identity-dev-2020-11-23"
};
//# sourceMappingURL=properties.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosEnrollRs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kairos_enroll_image__ = __webpack_require__(379);

var KairosEnrollRs = /** @class */ (function () {
    function KairosEnrollRs() {
    }
    Object.defineProperty(KairosEnrollRs.prototype, "faceId", {
        /**
         * Getter faceId
         * @return {string}
         */
        get: function () {
            return this._faceId;
        },
        /**
         * Setter faceId
         * @param {string} value
         */
        set: function (value) {
            this._faceId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosEnrollRs.prototype, "images", {
        /**
         * Getter images
         * @return {KairosEnrollImage[]}
         */
        get: function () {
            return this._images;
        },
        /**
         * Setter images
         * @param {KairosEnrollImage[]} value
         */
        set: function (value) {
            this._images = value;
        },
        enumerable: true,
        configurable: true
    });
    KairosEnrollRs.parse = function (json) {
        var kairosEnrollRs = new KairosEnrollRs();
        kairosEnrollRs.faceId = json.face_id;
        kairosEnrollRs.images = json.images.map(function (image) { return __WEBPACK_IMPORTED_MODULE_0__kairos_enroll_image__["a" /* KairosEnrollImage */].parse(image); });
        return kairosEnrollRs;
    };
    return KairosEnrollRs;
}());

//# sourceMappingURL=kairos-enroll-rs.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosEnrollImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kairos_verify_rs_transaction__ = __webpack_require__(183);


var KairosEnrollImage = /** @class */ (function () {
    function KairosEnrollImage() {
    }
    Object.defineProperty(KairosEnrollImage.prototype, "attributes", {
        /**
         * Getter attributes
         * @return {Attributes}
         */
        get: function () {
            return this._attributes;
        },
        /**
         * Setter attributes
         * @param {Attributes} value
         */
        set: function (value) {
            this._attributes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosEnrollImage.prototype, "transaction", {
        get: function () {
            return this._transaction;
        },
        set: function (transaction) {
            this._transaction = transaction;
        },
        enumerable: true,
        configurable: true
    });
    KairosEnrollImage.parse = function (json) {
        var image = new KairosEnrollImage();
        image.attributes = __WEBPACK_IMPORTED_MODULE_0__attributes__["a" /* Attributes */].parse(json.attributes);
        image.transaction = __WEBPACK_IMPORTED_MODULE_1__kairos_verify_rs_transaction__["a" /* KairosVerifyRsTransaction */].parse(json.transaction);
        return image;
    };
    return KairosEnrollImage;
}());

//# sourceMappingURL=kairos-enroll-image.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attributes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gender__ = __webpack_require__(381);

var Attributes = /** @class */ (function () {
    function Attributes() {
    }
    Object.defineProperty(Attributes.prototype, "lips", {
        /**
         * Getter lips
         * @return {string}
         */
        get: function () {
            return this._lips;
        },
        /**
         * Setter lips
         * @param {string} value
         */
        set: function (value) {
            this._lips = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "asian", {
        /**
         * Getter asian
         * @return {number}
         */
        get: function () {
            return this._asian;
        },
        /**
         * Setter asian
         * @param {number} value
         */
        set: function (value) {
            this._asian = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "gender", {
        /**
         * Getter gender
         * @return {Gender}
         */
        get: function () {
            return this._gender;
        },
        /**
         * Setter gender
         * @param {Gender} value
         */
        set: function (value) {
            this._gender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "age", {
        /**
         * Getter age
         * @return {number}
         */
        get: function () {
            return this._age;
        },
        /**
         * Setter age
         * @param {number} value
         */
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "hispanic", {
        /**
         * Getter hispanic
         * @return {number}
         */
        get: function () {
            return this._hispanic;
        },
        /**
         * Setter hispanic
         * @param {number} value
         */
        set: function (value) {
            this._hispanic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "other", {
        /**
         * Getter other
         * @return {number}
         */
        get: function () {
            return this._other;
        },
        /**
         * Setter other
         * @param {number} value
         */
        set: function (value) {
            this._other = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "black", {
        /**
         * Getter black
         * @return {number}
         */
        get: function () {
            return this._black;
        },
        /**
         * Setter black
         * @param {number} value
         */
        set: function (value) {
            this._black = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "white", {
        /**
         * Getter white
         * @return {number}
         */
        get: function () {
            return this._white;
        },
        /**
         * Setter white
         * @param {number} value
         */
        set: function (value) {
            this._white = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attributes.prototype, "glasses", {
        /**
         * Getter glasses
         * @return {string}
         */
        get: function () {
            return this._glasses;
        },
        /**
         * Setter glasses
         * @param {string} value
         */
        set: function (value) {
            this._glasses = value;
        },
        enumerable: true,
        configurable: true
    });
    Attributes.parse = function (json) {
        var attributes = new Attributes();
        attributes.age = json.age;
        attributes.asian = json.asian;
        attributes.black = json.black;
        attributes.gender = __WEBPACK_IMPORTED_MODULE_0__gender__["a" /* Gender */].parse(json.gender);
        attributes.glasses = json.glasses;
        attributes.hispanic = json.hispanic;
        attributes.lips = json.lips;
        attributes.other = json.other;
        attributes.white = json.white;
        return attributes;
    };
    return Attributes;
}());

//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gender; });
var Gender = /** @class */ (function () {
    function Gender() {
    }
    Object.defineProperty(Gender.prototype, "type", {
        /**
         * Getter type
         * @return {string}
         */
        get: function () {
            return this._type;
        },
        /**
         * Setter type
         * @param {string} value
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Gender.parse = function (json) {
        var gender = new Gender();
        gender.type = json.type;
        return gender;
    };
    return Gender;
}());

//# sourceMappingURL=gender.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pages__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__shared_pages__["a" /* PAGES */].Welcome;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/blackgersain/Apps/secure-identity/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/blackgersain/Apps/secure-identity/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map