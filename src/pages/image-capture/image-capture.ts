import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-image-capture',
    templateUrl: 'image-capture.html',
})
export class ImageCapturePage {

    private readonly cameraOpts: CameraOptions = {
        quality: 100
        , destinationType: this.camera.DestinationType.DATA_URL
        , encodingType: this.camera.EncodingType.JPEG
        , mediaType: this.camera.MediaType.PICTURE
    };

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , private camera: Camera) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad');

        this.camera.getPicture(this.cameraOpts)
            .then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.navCtrl.getPrevious().data.image = base64Image;
                this.navCtrl.pop();
            }
                , (err) => {
                    console.log("getPicture error: " + err);
                });
    }
}
