export class Card{
    private _num: number;
    private _image: string;
    private _isFlipped: boolean;
    private _isMatched: boolean;

    constructor(num: number, image: string){
        this._num = num;
        this._image = image;
        this._isFlipped = false;
        this._isMatched = false;
    }

    get num() : number {
        return this._num;
    }

    set num(n : number) {
        this._num = n;
    }

    get image() : string {
        return this._image;
    }

    Flip(){
        this._isFlipped = !this._isFlipped;
    }

    get isFlipped() : boolean {
        return this._isFlipped;
    }

    Match(){
        this._isMatched = true;
    }

    get isMatched() : boolean {
        return this._isMatched;
    }
}