import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { KairosVerifyRq } from '../../dtos/kairos-verify-rq';
import { KairosVerifyRs } from '../../dtos/kairos-verify-rs';

import { map } from 'rxjs/operators';
import { Props } from '../../shared/properties';
import { CommonProvider } from '../common/common';
import { KairosEnrollRs } from '../../dtos/kairos-enroll-rs';

@Injectable()
export class KairosProvider {

    constructor(public http: HttpClient
        , private common: CommonProvider) {
        console.log('Hello KairosProvider Provider');
    }

    enroll(kairosVerifyRq: KairosVerifyRq): Observable<KairosEnrollRs> {
        let url: string = "https://api.kairos.com/enroll";
        let headers: HttpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('app_id', Props.appId)
            .append('app_key', Props.appKey);
        kairosVerifyRq.galleryName = Props.galleryName;
        return this.http.post(url, kairosVerifyRq.stringify(), { headers: headers })
            .pipe(
                map(result => {
                    let resultStr: string = JSON.stringify(result);

                    if (resultStr.includes("Errors")) {
                        let message: string = '';
                        if (resultStr.includes("5002")) message = 'La imagen capturada no contiene un rostro.'; 
                        else message = 'kairos verify with errors: ' + resultStr;

                        this.common.presentAcceptAlert('Reconocimiento Facial Denegado', message);
                    }
                    return KairosEnrollRs.parse(result);
                })
            );
    }

    verify(kairosVerifyRq: KairosVerifyRq): Observable<KairosVerifyRs> {
        let url: string = "https://api.kairos.com/recognize";
        let headers: HttpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('app_id', Props.appId)
            .append('app_key', Props.appKey);
        kairosVerifyRq.galleryName = Props.galleryName;
        return this.http.post(url, kairosVerifyRq.stringify(), { headers: headers })
            .pipe(
                map(result => {
                    let resultStr: string = JSON.stringify(result);

                    let message: string = '';
                    if (resultStr.includes("Errors")) {
                        if (resultStr.includes("5002")) message = 'La imagen capturada no contiene un rostro.'; 
                        else if (resultStr.includes("5004")) message = 'La imagen capturada no coincide con algún perfil facial registrado.';
                        else message = 'kairos verify with errors: ' + resultStr;  
                        this.common.presentAcceptAlert('Reconocimiento Facial Denegado', message);
                    } 
                    else if (resultStr.includes("failure")) {
                        message = 'La imagen capturada no coincide con algún perfil facial registrado.';
                        this.common.presentAcceptAlert('Reconocimiento Facial Denegado', message);
                    }

                    return KairosVerifyRs.parse(result);
                })
            );
    }
}
