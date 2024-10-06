export class UserInventory{
    #currentTool;
    #tolls;
    constructor(tolls){
        this.#tolls = tolls;
        this.#currentTool = this.#tolls[0];
    }

    get currentTool(){
        return this.#currentTool;
    }

    getTollById(theId){
        let res = -1;
        for(let toll of this.#tolls){
            if(toll.id == theId){
                res = toll;
                break;
            }
        }
        return res;
    }

    setCurrentToll(pickedToll){
        this.#currentTool = this.getTollById(pickedToll.slice(pickedToll.indexOf("-")+1))
    }

    resetTollsCounter(){
        for(let toll of this.#tolls){
            toll.restCounter();
        }
    }
}