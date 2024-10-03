export class SquareItem{
    #type;
    constructor(theType){
        this.#type = theType;
    }

    get typeValue(){
        return this.#type;
    }
 
    get typeName(){
        return `squareItemType${this.#type}`;
    }

    applyNewType(theType){
        this.#type = theType;
    }
}


/*
Square items types:
-1 : sky
1 = block
2 = ground
3 = wood
4 = leaves
5 = grass 
*/