import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KairosEnrollRs } from '../../dtos/kairos-enroll-rs';
import { KairosVerifyRq } from '../../dtos/kairos-verify-rq';
import { CommonProvider } from '../../providers/common/common';
import { KairosProvider } from '../../providers/kairos/kairos';
import { PAGES } from '../../shared/pages';

@IonicPage()
@Component({
    selector: 'page-enrollment',
    templateUrl: 'enrollment.html',
})
export class EnrollmentPage {

    private readonly faceImageShadow: string = '../../assets/imgs/person-shadow.png';

    private formGroup: FormGroup;
    private faceImage: string = this.faceImageShadow;
    
    constructor(public navCtrl: NavController
              , public navParams: NavParams
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
                      Validators.required
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

    enroll(): void {
        if (!this.formGroup.valid) return; 

        let kairosVerifyRq: KairosVerifyRq = new KairosVerifyRq();

        kairosVerifyRq.subjectId = this.formGroup.value.documentoIdentidadFormCtrl;
        kairosVerifyRq.image = this.faceImage;

        this.kairosProvider.enroll(kairosVerifyRq).subscribe(
            (kairosEnrollRs: KairosEnrollRs): void => {
                console.log('Kairos response: ' + JSON.stringify(kairosEnrollRs));
                let patient =  {
                      "id": this.formGroup.value.documentoIdentidadFormCtrl
                    , "name": this.formGroup.value.nombreFormCtrl
                    , "surname": this.formGroup.value.apellidoFormCtrl
                };
                let message: string = 'El paciente ' + patient.name + ' ' + patient.surname + ' con cédula de ciudadanína número ' + patient.id + ' ha sido inscrito exitosamente a biometría facial.';
                this.common.presentAcceptAlert('Inscripción Exitosa!', message);
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
