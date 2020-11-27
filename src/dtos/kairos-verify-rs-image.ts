import { KairosVerifyRsTransaction } from "./kairos-verify-rs-transaction";

export class KairosVerifyRsImage {

    private _transaction: KairosVerifyRsTransaction;

    public get transaction(): KairosVerifyRsTransaction {
        return this._transaction;
    }

    public set transaction(transaction: KairosVerifyRsTransaction) {
        this._transaction = transaction;
    }

    public static parse(json: any): KairosVerifyRsImage {
        let image: KairosVerifyRsImage = new KairosVerifyRsImage();
        image.transaction = KairosVerifyRsTransaction.parse(json.transaction);
        return image;
    }
}