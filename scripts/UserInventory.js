import {Tool} from "./dataObjects/tool.js";


export class UserInventory{
    #currentTool;
    #tolls;
    constructor(){
        this.#tolls = [];
        this.#initalizeTolls();
        this.#currentTool = this.#tolls[0];
    }

    get currentTool(){
        return this.#currentTool;
    }

    setCurrentToll(pickedToll){
        this.#currentTool = this.#tolls[pickedToll-6];
    }

    addToInventory(typeVal){
        for(let theToll of this.#tolls){
            if(theToll.actionToType == typeVal){
                theToll.incressCounter();
            }
        }
    }

    #initalizeTolls(){
        const theTool = new Tool([3,5],-1,-1);
        this.#tolls.push(theTool);
        const theTool2 = new Tool([1],-1,-1);
        this.#tolls.push(theTool2);
        const theTool3 = new Tool([2,3],-1,-1);
        this.#tolls.push(theTool3);
        const theTool4 = new Tool([-1],0,5);
        this.#tolls.push(theTool4);
        const theTool5 = new Tool([-1],0,2);
        this.#tolls.push(theTool5);
    }

}