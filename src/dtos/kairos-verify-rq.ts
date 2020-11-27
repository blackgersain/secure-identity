export class KairosVerifyRq {

    private _image: string;
    private _galleryName: string;
    private _subjectId: string;

    public get image(): string {
        return this._image;
    }

    public set image(image: string) {
        this._image = image;
    }

    public get galleryName(): string {
        return this._galleryName;
    }

    public set galleryName(galleryName: string) {
        this._galleryName = galleryName;
    }

    public get subjectId(): string {
        return this._subjectId;
    }

    public set subjectId(subjectId: string) {
        this._subjectId = subjectId;
    }

    public stringify(): string {
        return JSON.stringify(
            {
                  gallery_name: this.galleryName
                , subject_id: this.subjectId
                , image: this.image
            }
        )
    }
}