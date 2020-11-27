import { Attributes } from "./attributes";
import { KairosVerifyRsTransaction } from "./kairos-verify-rs-transaction";

export class KairosEnrollImage {

    private _attributes: Attributes;
    private _transaction: KairosVerifyRsTransaction;

    /**
     * Getter attributes
     * @return {Attributes}
     */
	public get attributes(): Attributes {
		return this._attributes;
	}

    /**
     * Setter attributes
     * @param {Attributes} value
     */
	public set attributes(value: Attributes) {
		this._attributes = value;
	}
   
    public get transaction(): KairosVerifyRsTransaction {
        return this._transaction;
    }

    public set transaction(transaction: KairosVerifyRsTransaction) {
        this._transaction = transaction;
    }

    public static parse(json: any): KairosEnrollImage {
        let image: KairosEnrollImage = new KairosEnrollImage();
        image.attributes = Attributes.parse(json.attributes);
        image.transaction = KairosVerifyRsTransaction.parse(json.transaction);
        return image;
    }
}