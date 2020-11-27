import { KairosEnrollImage } from "./kairos-enroll-image";

export class KairosEnrollRs {

    private _faceId: string;
    private _images: KairosEnrollImage[];

    /**
     * Getter faceId
     * @return {string}
     */
	public get faceId(): string {
		return this._faceId;
	}

    /**
     * Getter images
     * @return {KairosEnrollImage[]}
     */
	public get images(): KairosEnrollImage[] {
		return this._images;
	}

    /**
     * Setter faceId
     * @param {string} value
     */
	public set faceId(value: string) {
		this._faceId = value;
	}

    /**
     * Setter images
     * @param {KairosEnrollImage[]} value
     */
	public set images(value: KairosEnrollImage[]) {
		this._images = value;
	}
    
    public static parse(json: any): KairosEnrollRs {
        let kairosEnrollRs: KairosEnrollRs = new KairosEnrollRs();
        kairosEnrollRs.faceId = json.face_id;
        kairosEnrollRs.images = json.images.map(image => KairosEnrollImage.parse(image));
        return kairosEnrollRs;
    }

}