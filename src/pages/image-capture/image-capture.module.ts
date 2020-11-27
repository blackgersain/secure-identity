import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageCapturePage } from './image-capture';

@NgModule({
  declarations: [
    ImageCapturePage,
  ],
  imports: [
    IonicPageModule.forChild(ImageCapturePage),
  ],
})
export class ImageCapturePageModule {}
