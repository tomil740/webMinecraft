import {theGame} from './starter.js';


export class Game{
    #inventoryObj;
    #boardData;
    #drawData;
    constructor(inventoryObj,boardData,drawData){
        this.#inventoryObj = inventoryObj;
        this.#boardData = boardData;
        this.#drawData = drawData;
        //draw the board with the matched call back fun to eac obj
    }


    get boardArray(){

        return this.#boardData.boardArray;
    }

    startGame(){
        this.#drawData.drawBoard(
            this.#boardData.boardArray,
            this.#onUserAction
        );
    }

    
    #onUserAction(theId){
        const reference = theGame;
        //get the data item
        const theObj = reference.getIdIndex(theId);
        const theTool = reference.#inventoryObj.currentTool;
        //check in general if the types matched for action
        if(theTool.isMatchedType(theObj.typeValue) && (theTool.counter > 0 || theTool.counter == -1) ){
            //build tool
            if(theTool.counter > 0){
                currentTool.subtractCounter();
            }else if(theTool.counter == -1){
                //destrctuion toll...
                reference.#inventoryObj.addToInventory(theObj.typeValue);
            }
            theObj.applyNewType(theTool.actionToType);
            //draw the update item...
            reference.#drawData.updateUiElement(theId,theObj.typeName);
        }  
            
    }

    getIdIndex(theId){
        const breakRef = theId.indexOf('-');
        const xIndex = theId.slice(1,breakRef);
        //console.log(xIndex);
        const yIndex = theId.slice(breakRef+2);
        //console.log(yIndex);

        const result = this.boardArray[xIndex][yIndex];
        //console.log(result)

        return result;
    }


    

}