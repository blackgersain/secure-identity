export class KairosVerifyRsTransaction {

    private _status: string;
    private _subjectId: string;
    private _quality: number;
    private _width: number;
    private _height: number;
    private _topLeftX: number;
    private _topLeftY: number;
    private _confidence: number;
    private _galleryName: string;
    private _liveness: number;
    private _enrollmentTimestamp: string;
    private _eyeDistance: number;
    private _faceId: string;
    private _pitch: number;
    private _roll: number;

    /**
     * Getter liveness
     * @return {number}
     */
	public get liveness(): number {
		return this._liveness;
	}

    /**
     * Getter enrollmentTimestamp
     * @return {string}
     */
	public get enrollmentTimestamp(): string {
		return this._enrollmentTimestamp;
	}

    /**
     * Getter eyeDistance
     * @return {number}
     */
	public get eyeDistance(): number {
		return this._eyeDistance;
	}

    /**
     * Getter faceId
     * @return {string}
     */
	public get faceId(): string {
		return this._faceId;
	}

    /**
     * Getter pitch
     * @return {number}
     */
	public get pitch(): number {
		return this._pitch;
	}

    /**
     * Getter roll
     * @return {number}
     */
	public get roll(): number {
		return this._roll;
	}

    /**
     * Getter yaw
     * @return {number}
     */
	public get yaw(): number {
		return this._yaw;
	}

    /**
     * Setter liveness
     * @param {number} value
     */
	public set liveness(value: number) {
		this._liveness = value;
	}

    /**
     * Setter enrollmentTimestamp
     * @param {string} value
     */
	public set enrollmentTimestamp(value: string) {
		this._enrollmentTimestamp = value;
	}

    /**
     * Setter eyeDistance
     * @param {number} value
     */
	public set eyeDistance(value: number) {
		this._eyeDistance = value;
	}

    /**
     * Setter faceId
     * @param {string} value
     */
	public set faceId(value: string) {
		this._faceId = value;
	}

    /**
     * Setter pitch
     * @param {number} value
     */
	public set pitch(value: number) {
		this._pitch = value;
	}

    /**
     * Setter roll
     * @param {number} value
     */
	public set roll(value: number) {
		this._roll = value;
	}

    /**
     * Setter yaw
     * @param {number} value
     */
	public set yaw(value: number) {
		this._yaw = value;
	}
    private _yaw: number;

    public get status(): string {
        return this._status;
    }

    public set status(_status: string) {
        this._status = _status;
    }

    public get subjectId(): string {
        return this._subjectId;
    }

    public set subjectId(_subjectId: string) {
        this._subjectId = _subjectId;
    }

    public get quality(): number {
        return this._quality;
    }

    public set quality(_quality: number) {
        this._quality = _quality;
    }

    public get width(): number {
        return this._width;
    }

    public set width(_width: number) {
        this._width = _width;
    }

    public get height(): number {
        return this._height;
    }

    public set height(_height: number) {
        this._height = _height;
    }

    public get topLeftX(): number {
        return this._topLeftX;
    }

    public set topLeftX(_topLeftX: number) {
        this._topLeftX = _topLeftX;
    }

    public get topLeftY(): number {
        return this._topLeftY;
    }

    public set topLeftY(_topLeftY: number) {
        this._topLeftY = _topLeftY;
    }

    public get confidence(): number {
        return this._confidence;
    }

    public set confidence(_confidence: number) {
        this._confidence = _confidence;
    }

    public get galleryName(): string {
        return this._galleryName;
    }

    public set galleryName(_galleryName: string) {
        this._galleryName = _galleryName;
    }

   

    public static parse(json: any): KairosVerifyRsTransaction {
        let transaction: KairosVerifyRsTransaction = new KairosVerifyRsTransaction();
        transaction.status = json.status;
        transaction.subjectId = json.subject_id;
        transaction.quality = json.quality;
        transaction.width = json.width;
        transaction.height = json.heigth;
        transaction.topLeftX = json.topLeftX;
        transaction.topLeftY = json.topLeftY;
        transaction.confidence = json.confidence;
        transaction.galleryName = json.gallery_name;
        transaction.liveness = json.liveness;
        transaction.enrollmentTimestamp = json.enrollment_timestamp;
        transaction.eyeDistance = json.eyeDistance;
        transaction.faceId = json.face_id;
        transaction.pitch = json.pitch;
        transaction.roll = json.roll;
        transaction.yaw = json.yaw;
        return transaction;
    }
}