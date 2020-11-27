import { Injectable, Injector } from '@angular/core';
import { AlertController, Alert, AlertOptions, Loading, LoadingController, ToastController, Platform, Events, ModalController, ModalOptions, Modal, NavOptions } from 'ionic-angular';

@Injectable()
export class CommonProvider {

  private static injector: Injector;


  private loading: Loading;
  private alert: Alert;
  private modalStack: Modal[] = new Array<Modal>();

  loader: any;
  static alert: any;
  //urlServidor:string = "http://201.184.243.195:8095"; // publica
  //urlServidor: string = "http://172.16.0.20:8095";
  urlServidor: string = "http://172.16.0.20:9095";

  submenu = {
    sHuellas: false,
    sAvistamientos: false,
    sEntorno: false,
    sOrdenamiento: false,
    sVigias: false,
    sMovilidad: false,
    sConcursoFotografia: false
  };

  stackActiveLayersSubcapas: number[] = new Array();

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
 capas = []
  activeLayers = {
    ids: [],
    level: ''
  }

  constructor(
    private modalCtrl: ModalController
    , private loadingCtrl: LoadingController
    , private toastCtrl: ToastController
    , public alertCtrl: AlertController
    , public platform: Platform){
    this.alertCtrl.create();
    CommonProvider.alert = this.alertCtrl;
  }

  createModal(component: any, data?: any, opts?: ModalOptions): Modal {
    let modal: Modal = this.modalCtrl.create(component, data, opts);
    this.modalStack.push(modal);
    return modal;
  }

  dismissModal(data?: any, role?: string, navOptions?: NavOptions): Promise<any> {
    if (this.canDismissModal()) {
      //
      console.log('dismissing modal');
      let modal: Modal = this.modalStack.pop();
      return modal.dismiss(data, role, navOptions);
    }
    return null;
  }

  canDismissModal(): boolean {
    console.log('modalStack ' + this.modalStack.length);
    return this.modalStack.length > 0;
  }

  presentAcceptAlert(title: string, message: string, onAccept?: () => void): void {
    if (this.alert) return;

    let options: AlertOptions = {
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
    this.alert.onDidDismiss((data: any, role: string) => {
      this.alert = null;
    });
    this.alert.present();
  }

  dissmisAlert() {
    if (this.alert) this.alert.dismiss();
  }

  presentAcceptCancelAlert(title: string, message: string, onAccept: () => void) {
    if (this.alert) return;
    let options: AlertOptions = {
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
    this.alert.onDidDismiss((data: any, role: string) => {
      this.alert = null;
    });
    this.alert.present();
  }

  presentAlert(alertOptions: AlertOptions): void {
    if (this.alert) return;
    this.alert = this.alertCtrl.create(alertOptions);
    this.alert.onDidDismiss((data: any, role: string) => {
      this.alert = null;
    });
    this.alert.present();
  }

  presentLoading(): void {
    if (this.loading) return;

    this.loading = this.loadingCtrl.create({
      content: "Un momento por favor...",
    });
    this.loading.present();
  }
  presentLoadingCancel(): void {
    if (this.loading) return;

    this.loading = this.loadingCtrl.create({
      content: "Un momento por favor...",
      enableBackdropDismiss: true,
    });
    this.loading.present();
  }

  presentFullLoading(): void {
    if (this.loading) return;

    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/logo3.png"/>',
      cssClass: 'custom-loading',
    });
    this.loading.present();
  }

  dismissLoading(): void {
    if (this.loading) {
      this.loading.dismissAll();
      this.loading = null;
    }
  }

  appLoading(mensajeLoading, duration: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <ion-spinner name="bubbles"></ion-spinner>
        <!-- <div class="custom-spinner-box"></div>-->
        <h5>`+ mensajeLoading + `</h5>
      </div>`,
      duration: duration || 5000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

  appToast(objetoToast: any) {
    let toast = this.toastCtrl.create({
      message: objetoToast.mensaje,
      duration: objetoToast.duration,
      position: objetoToast.posicion
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  menuApp(opocion, valor) {
    this.submenu[opocion] = valor;
  }

  
  generalAlert(pTitle, pSubtitle) {
    let alert = this.alertCtrl.create({
      title: '<ion-toolbar color="primary">' + pTitle + '</ion-toolbar>',
      subTitle: pSubtitle,
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            //this.platform.exitApp();

          }
        },
        {
          text: '',
          cssClass: 'closeBt',
          handler: () => {
            // reject(false);
          }
        }
      ],
      cssClass: '{background-color: white; color: red; button{ color: red;}}'
    });

    alert.present();
  }



  basicAlert(titulo: string, mensaje: string, ) {
      let alert = CommonProvider.alert.create({
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
  }

  confirmAlert(titulo: string, mensaje: string, ) {
    return new Promise((resolve, reject) => {
      let alert = CommonProvider.alert.create({
        title: titulo,
        enableBackdropDismiss: true,
        subTitle: mensaje,
        cssClass: 'warning  alertAv',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              reject(false);
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              resolve(true);
            }
          },
          {
            text: '',
            cssClass: 'closeBt',
            handler: () => {
              reject(false);
            }
          }
        ]
      });
      alert.present();
    });
  }

  confirmAlertCss(titulo: string, mensaje: string, cssClass: string) {
    return new Promise((resolve, reject) => {
      let alert = CommonProvider.alert.create({
        title: titulo,
        enableBackdropDismiss: true,
        subTitle: mensaje,
        cssClass: 'warning  alertAv sGenRep',
        buttons: [
          {
            text: 'Regresar',
            handler: () => {
              reject(false);
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              resolve(true);
            }
          },
          {
            text: '',
            cssClass: 'closeBt',
            handler: () => {
              reject(false);
            }
          }
        ]
      });
      alert.present();
    });
  }

  basicAlePrtCss(titulo: string, mensaje: string, css: string, boton: string) {
    return new Promise((resolve, reject) => {
      let alert = CommonProvider.alert.create({
        title: titulo,
        enableBackdropDismiss: true,
        cssClass: css,
        subTitle: mensaje,
        buttons: [
          {
            text: boton,
            handler: () => {
              resolve(true);
            }
          },
          {
            text: '',
            cssClass: 'closeBt',
            handler: () => {
              reject(false);
            }
          }
        ]
      });
      alert.present();
    });
  }


  
  
 

}
