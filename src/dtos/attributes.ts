import { Gender } from "./gender";

export class Attributes {

    private _lips: string;
    private _asian: number;
    private _gender: Gender;
    private _age: number;
    private _hispanic: number;
    private _other: number;
    private _black: number;
    private _white: number;
    private _glasses: string;

    /**
     * Getter lips
     * @return {string}
     */
	public get lips(): string {
		return this._lips;
	}

    /**
     * Getter asian
     * @return {number}
     */
	public get asian(): number {
		return this._asian;
	}

    /**
     * Getter gender
     * @return {Gender}
     */
	public get gender(): Gender {
		return this._gender;
	}

    /**
     * Getter age
     * @return {number}
     */
	public get age(): number {
		return this._age;
	}

    /**
     * Getter hispanic
     * @return {number}
     */
	public get hispanic(): number {
		return this._hispanic;
	}

    /**
     * Getter other
     * @return {number}
     */
	public get other(): number {
		return this._other;
	}

    /**
     * Getter black
     * @return {number}
     */
	public get black(): number {
		return this._black;
	}

    /**
     * Getter white
     * @return {number}
     */
	public get white(): number {
		return this._white;
	}

    /**
     * Getter glasses
     * @return {string}
     */
	public get glasses(): string {
		return this._glasses;
	}

    /**
     * Setter lips
     * @param {string} value
     */
	public set lips(value: string) {
		this._lips = value;
	}

    /**
     * Setter asian
     * @param {number} value
     */
	public set asian(value: number) {
		this._asian = value;
	}

    /**
     * Setter gender
     * @param {Gender} value
     */
	public set gender(value: Gender) {
		this._gender = value;
	}

    /**
     * Setter age
     * @param {number} value
     */
	public set age(value: number) {
		this._age = value;
	}

    /**
     * Setter hispanic
     * @param {number} value
     */
	public set hispanic(value: number) {
		this._hispanic = value;
	}

    /**
     * Setter other
     * @param {number} value
     */
	public set other(value: number) {
		this._other = value;
	}

    /**
     * Setter black
     * @param {number} value
     */
	public set black(value: number) {
		this._black = value;
	}

    /**
     * Setter white
     * @param {number} value
     */
	public set white(value: number) {
		this._white = value;
	}

    /**
     * Setter glasses
     * @param {string} value
     */
	public set glasses(value: string) {
		this._glasses = value;
    }
    
    public static parse(json: any): Attributes {
        let attributes: Attributes = new Attributes();
        attributes.age = json.age;
        attributes.asian = json.asian;
        attributes.black = json.black;
        attributes.gender = Gender.parse(json.gender);
        attributes.glasses = json.glasses;
        attributes.hispanic = json.hispanic;
        attributes.lips = json.lips;
        attributes.other = json.other;
        attributes.white = json.white;
        return attributes;
    }
}