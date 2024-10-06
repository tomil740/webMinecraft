import {Tool} from "../domain/models/tool.js";
import { BoardTemplate } from "./dataObjects/BoardTemplate.js";

/*
the dao in practice should acess the source for the data (data base local/remote),we will just set the 
data in global variables in the matched file and acess it from matched functions...
*/
class Dao{
    #inventoryTolls;
    #boardTemplates = [];

    constructor(){
        this.#inventoryTolls = [];
        this.#initalizeTolls();
        this.#initalizeBoardTemp1();
        this.#initalizeBoardTemp2();
    }

    get inventoryTolls(){
        return this.#inventoryTolls;
    }

    getBoardTemp(index){
        if(index < this.#boardTemplates.length){
            return this.#boardTemplates[index];
        }else
        return this.#boardTemplates[0];
    }

    #initalizeBoardTemp1(){
        let temp1 = [];
        const part1 = new BoardTemplate(1,0.6,2);
        temp1.push(part1);
        const part2 = new BoardTemplate(1,0.5,1);
        temp1.push(part2);
        const part3 = new BoardTemplate(1,0.45,5);
        temp1.push(part3);
        const part4 = new BoardTemplate(0.4,0.4,5);
        temp1.push(part4);
        const part5 = new BoardTemplate(1,1,-1);
        temp1.push(part5);

        this.#boardTemplates.push(temp1);
    }

    #initalizeBoardTemp2(){
        let temp1 = [];
        const part1 = new BoardTemplate(1,0.9,2);
        temp1.push(part1);
        const part2 = new BoardTemplate(1,0.7,1);
        temp1.push(part2);
        const part3 = new BoardTemplate(1,0.4,5);
        temp1.push(part3);
        const part4 = new BoardTemplate(0.4,0.4,5);
        temp1.push(part4);
        const part5 = new BoardTemplate(1,1,-1);
        temp1.push(part5);

        this.#boardTemplates.push(temp1);
    }

    #initalizeTolls(){
        const theTool = new Tool([3,5],-1,-1,6);
        this.#inventoryTolls.push(theTool);
        const theTool2 = new Tool([1],-1,-1,7);
        this.#inventoryTolls.push(theTool2);
        const theTool3 = new Tool([2,3],-1,-1,8);
        this.#inventoryTolls.push(theTool3);
        const theTool4 = new Tool([-1],0,5,15);
        this.#inventoryTolls.push(theTool4);
        const theTool5 = new Tool([-1],0,1,11);
        this.#inventoryTolls.push(theTool5);
        const theTool6 = new Tool([-1],0,2,12);
        this.#inventoryTolls.push(theTool6);
        
    }
}
export const dao = new Dao();