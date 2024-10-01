export class SquareItem{
    #type;
    constructor(theType){
        this.#type = theType;
    }

    get type(){
        return `squareItemType${this.#type}`;
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