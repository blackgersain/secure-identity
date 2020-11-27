webpackJsonp([1],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentPageModule", function() { return EnrollmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enrollment__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnrollmentPageModule = /** @class */ (function () {
    function EnrollmentPageModule() {
    }
    EnrollmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enrollment__["a" /* EnrollmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enrollment__["a" /* EnrollmentPage */]),
            ],
        })
    ], EnrollmentPageModule);
    return EnrollmentPageModule;
}());

//# sourceMappingURL=enrollment.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KairosVerifyRq; });
var KairosVerifyRq = /** @class */ (function () {
    function KairosVerifyRq() {
    }
    Object.defineProperty(KairosVerifyRq.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (image) {
            this._image = image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRq.prototype, "galleryName", {
        get: function () {
            return this._galleryName;
        },
        set: function (galleryName) {
            this._galleryName = galleryName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KairosVerifyRq.prototype, "subjectId", {
        get: function () {
            return this._subjectId;
        },
        set: function (subjectId) {
            this._subjectId = subjectId;
        },
        enumerable: true,
        configurable: true
    });
    KairosVerifyRq.prototype.stringify = function () {
        return JSON.stringify({
            gallery_name: this.galleryName,
            subject_id: this.subjectId,
            image: this.image
        });
    };
    return KairosVerifyRq;
}());

//# sourceMappingURL=kairos-verify-rq.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtos_kairos_verify_rq__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_kairos_kairos__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pages__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnrollmentPage = /** @class */ (function () {
    function EnrollmentPage(navCtrl, navParams, kairosProvider, formBuilder, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.kairosProvider = kairosProvider;
        this.formBuilder = formBuilder;
        this.common = common;
        this.faceImageShadow = '../../assets/imgs/person-shadow.png';
        this.faceImage = this.faceImageShadow;
        this.formGroup = this.formBuilder.group({
            nombreFormCtrl: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([])
            ],
            apellidoFormCtrl: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([])
            ],
            documentoIdentidadFormCtrl: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])
            ],
            idFormulaFormCtrl: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([])
            ]
        });
    }
    EnrollmentPage.prototype.ionViewWillEnter = function () {
        var image = this.navParams.get('image') || null;
        if (image)
            this.faceImage = image;
    };
    EnrollmentPage.prototype.captureImage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__shared_pages__["a" /* PAGES */].ImageCapture);
    };
    EnrollmentPage.prototype.captureFingerprint = function () {
    };
    EnrollmentPage.prototype.enroll = function () {
        var _this = this;
        if (!this.formGroup.valid)
            return;
        var kairosVerifyRq = new __WEBPACK_IMPORTED_MODULE_3__dtos_kairos_verify_rq__["a" /* KairosVerifyRq */]();
        kairosVerifyRq.subjectId = this.formGroup.value.documentoIdentidadFormCtrl;
        kairosVerifyRq.image = this.faceImage;
        this.kairosProvider.enroll(kairosVerifyRq).subscribe(function (kairosEnrollRs) {
            console.log('Kairos response: ' + JSON.stringify(kairosEnrollRs));
            var patient = {
                "id": _this.formGroup.value.documentoIdentidadFormCtrl,
                "name": _this.formGroup.value.nombreFormCtrl,
                "surname": _this.formGroup.value.apellidoFormCtrl
            };
            var message = 'El paciente ' + patient.name + ' ' + patient.surname + ' con cédula de ciudadanína número ' + patient.id + ' ha sido inscrito exitosamente a biometría facial.';
            _this.common.presentAcceptAlert('Inscripción Exitosa!', message);
        }, function (error) {
            _this.common.presentAcceptAlert('Alerta', "kairosProvider.verify error: " + error);
        });
    };
    EnrollmentPage.prototype.reset = function () {
        this.faceImage = this.faceImageShadow;
        this.formGroup.reset();
    };
    EnrollmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enrollment',template:/*ion-inline-start:"/home/blackgersain/Apps/secure-identity/src/pages/enrollment/enrollment.html"*/'<ion-content padding>\n    <h1>Inscripción Perfil Facial - Dactilar</h1>\n\n    <form [formGroup]="formGroup">\n        <ion-list>\n            <ion-item>\n                <ion-label>Nombres</ion-label>\n                <ion-input type="text" formControlName="nombreFormCtrl"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-item>\n                <ion-label>Apellidos</ion-label>\n                <ion-input type="text" formControlName="apellidoFormCtrl"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-item>\n                <ion-label>Documento Identidad</ion-label>\n                <ion-input type="text" formControlName="documentoIdentidadFormCtrl"></ion-input>\n            </ion-item>\n        </ion-list>\n    </form>\n\n    <div>\n        <div class="div-face">\n            <img [src]="faceImage" alt="image not found">\n    \n            <button ion-button (click)="captureImage()">Capturar Imagen</button>\n        </div>\n    \n        <div class="div-fingerprint">\n            <img  src="../../assets/imgs/fingerprint.jpg" alt="image not found">\n    \n            <button ion-button (click)="captureFingerprint()">Capturar Huella</button>\n        </div>\n    </div>\n\n    <button ion-button (click)="enroll()">Inscribir</button>\n</ion-content>\n'/*ion-inline-end:"/home/blackgersain/Apps/secure-identity/src/pages/enrollment/enrollment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_kairos_kairos__["a" /* KairosProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]])
    ], EnrollmentPage);
    return EnrollmentPage;
}());

//# sourceMappingURL=enrollment.js.map

/***/ })

});
//# sourceMappingURL=1.js.map