export class Gender {

    private _type: string;


    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    public static parse(json: any): Gender {
        let gender: Gender = new Gender();
        gender.type = json.type;
        return gender;
    }
}