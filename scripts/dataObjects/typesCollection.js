export class SquareItemsTypes{
    #squareItemTypes;
    constructor(){
        this.#squareItemTypes = [];
        this.#initalizeTypes();
        
    }
    #initalizeTypes(){
        for(let counter = -1; counter < 6; counter++){
            if(counter != 0){
                this.#squareItemTypes.push(
                    new SquareItemTypes(counter)
                )
            }
        }
    }
}

class SquareItemTypes{
    #value;
    #name;
    typesName = ["block","ground","wood","leaves","grass"];
    constructor(name,value){
        this.#value = value;
        this.#name = this.getValueName(value);
    }

    getValueName(value){
        let result = "sky"
        if(value != -1){
            result = this.typesName[value-1];
        }

        return result;
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