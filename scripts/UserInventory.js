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

    addToInventory(typeVal){
        let res = -1;
        for(let theToll of this.#tolls){
            if(theToll.actionToType == typeVal){
                res = theToll.incressCounter();
            }
        }

        return res;
    }

    #initalizeTolls(){
        const theTool = new Tool([3,5],-1,-1,6);
        this.#tolls.push(theTool);
        const theTool2 = new Tool([1],-1,-1,7);
        this.#tolls.push(theTool2);
        const theTool3 = new Tool([2,3],-1,-1,8);
        this.#tolls.push(theTool3);
        const theTool4 = new Tool([-1],0,5,15);
        this.#tolls.push(theTool4);
        const theTool5 = new Tool([-1],0,1,11);
        this.#tolls.push(theTool5);
        const theTool6 = new Tool([-1],0,2,12);
        this.#tolls.push(theTool6);
    }

}