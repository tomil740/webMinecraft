export class BoardTemplate{
    #xRange;
    #yRange;
    #result;

    constructor(xPortion,yPortion,result){
        this.#xRange = xPortion;
        this.#yRange = yPortion
        this.#result =result;
    }

    get xPortion(){
        return this.#xRange;
    }

    set xPortion(theObj){
        this.#xRange = theObj;
    }

    set yPortion(theObj){
        this.#yRange = theObj;
    }

    get yPortion(){
        return this.#yRange;
    }
    get toType(){
        return this.#result;
    }
}