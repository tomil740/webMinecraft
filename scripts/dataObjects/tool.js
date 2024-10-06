export class Tool{
    //will be the target of type the toll aming to (for destory kind of toll it will be default[sky])
    #actionToType;
    #matchedTypes;
    #counter;
    #id

    constructor(matchedTypes,counter,actionToType,id){
        this.#actionToType = actionToType;
        this.#matchedTypes = matchedTypes;
        this.#counter = counter;
        this.#id = id;
    }

    get id(){
        return this.#id;
    }

    get actionToType(){
        return this.#actionToType;
    }

    get counter(){
        return this.#counter;
    }

    restCounter(){
        this.#counter = 0;
    }

    subtractCounter(){
        if(this.#counter != -1){
            this.#counter--;
        }
    }

    incressCounter(){
        if(this.#counter != -1){
            this.#counter++;
        }
    }

    isMatchedType(theType){
        for(let type of this.#matchedTypes){
            if(type == theType){
                return true;
            }
        }
        return false;
    }
        
}