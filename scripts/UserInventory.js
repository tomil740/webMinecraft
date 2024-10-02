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

    addToInventory(typeVal){
        for(let theToll of this.#tolls){
            if(theToll == typeVal){
                theToll.incressCounter();
            }
        }
    }

    #initalizeTolls(){
        const theTool = new Tool([3,5],-1,-1);
        this.#tolls.push(theTool);
    }

}