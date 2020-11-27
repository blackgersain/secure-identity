import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KairosVerifyRq } from '../../dtos/kairos-verify-rq';
import { KairosVerifyRs } from '../../dtos/kairos-verify-rs';
import { CommonProvider } from '../../providers/common/common';
import { KairosProvider } from '../../providers/kairos/kairos';
import { PAGES } from '../../shared/pages';
import { PATIENTS } from '../../shared/patients';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private readonly faceImageShadow: string = '../../assets/imgs/person-shadow.png';

    private formGroup: FormGroup;
    private faceImage: string = this.faceImageShadow;

    constructor(public navCtrl: NavController
              , private navParams: NavParams
              , private kairosProvider: KairosProvider
              , private formBuilder: FormBuilder
              , private common: CommonProvider) 
    {
        this.formGroup = this.formBuilder.group({
            nombreFormCtrl: [
                ''
                , Validators.compose([])
            ],
            apellidoFormCtrl: [
                ''
                , Validators.compose([])
            ],
            documentoIdentidadFormCtrl: [
                ''
                , Validators.compose([
                ])
            ],
            idFormulaFormCtrl: [
                ''
                , Validators.compose([])
            ]
        });
    }

    ionViewWillEnter(): void {
        let image = this.navParams.get('image') || null;
        if (image) this.faceImage = image;
    }

    captureImage(): void {
        this.navCtrl.push(PAGES.ImageCapture);
    }

    captureFingerprint(): void {

    }

    validarIdentidad(): void {
        if (!this.formGroup.valid) return; 

        let kairosVerifyRq: KairosVerifyRq = new KairosVerifyRq();
        kairosVerifyRq.subjectId = this.formGroup.value.documentoIdentidadFormCtrl;
        kairosVerifyRq.image = this.faceImage;

        this.kairosProvider.verify(kairosVerifyRq).subscribe(
            (kairosVerifyRs: KairosVerifyRs): void => {
                console.log('Kairos response: ' + JSON.stringify(kairosVerifyRs));
                let patient = PATIENTS.find((_patient) => _patient.id == kairosVerifyRs.images[0].transaction.subjectId);
                let message: string = 'El paciente ' + patient.name + ' ' + patient.surname + ' con cédula de ciudadanína número ' + patient.id + ' está autorizado para realizar la transacción requerida.';
                this.common.presentAcceptAlert('Autenticación Exitosa!', message);
                this.formGroup.controls['nombreFormCtrl'].setValue(patient.name);
                this.formGroup.controls['apellidoFormCtrl'].setValue(patient.surname);
                this.formGroup.controls['documentoIdentidadFormCtrl'].setValue(patient.id);
            },
            (error: any): void => {
                this.common.presentAcceptAlert('Alerta', "kairosProvider.verify error: " + error);
            }
        );
    }

    reset(): void {
        this.faceImage = this.faceImageShadow; 
        this.formGroup.reset();
    }
}