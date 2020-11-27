import { KairosVerifyRsImage } from "./kairos-verify-rs-image";

export class KairosVerifyRs {

    private _images: KairosVerifyRsImage[];

    public get images(): KairosVerifyRsImage[] {
        return this._images;
    }

    public set images(images: KairosVerifyRsImage[]) {
        this._images = images;
    }

    public static parse(json: any): KairosVerifyRs {
        let kairosVerifyRs: KairosVerifyRs = new KairosVerifyRs();
        kairosVerifyRs.images = json.images.map(image => KairosVerifyRsImage.parse(image));
        return kairosVerifyRs;
    }
}