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
        this.#drawData.drawMenu(
            this.#onMenuPick
        );
    }

    restGame(){
        console.log("rest");
        console.log(this.#boardData);

        this.#boardData.initalizeBoard();
        console.log(this.#boardData);
        this.#drawData.drawBoard(
            this.#boardData.boardArray,
            this.#onUserAction
        );
        this.#inventoryObj.resetTollsCounter();
        this.#drawData.drawMenu();
    }

    
    #onUserAction(theId){
        const reference = theGame;
        //get the data item
        const theObj = reference.getIdIndex(theId);
        const theTool = reference.#inventoryObj.currentTool;
        //check in general if the types matched for action
        if(theTool.isMatchedType(theObj.typeValue) && (theTool.counter > 0 || theTool.counter == -1) ){
            let inventoryObjToDraw = theTool;

            //build tool
            if(theTool.counter > 0){
                inventoryObjToDraw.subtractCounter();
            }else if(theTool.counter == -1){
                //destrctuion toll...
                inventoryObjToDraw = reference.#inventoryObj.getTollById(theObj.typeValue+10);
                inventoryObjToDraw.incressCounter();
            }

            theObj.applyNewType(theTool.actionToType);
            //draw the update item...
            reference.#drawData.updateUiElement(theId,theObj.typeName);
            reference.#drawData.updateInventoryCounter(inventoryObjToDraw.counter,`squareItemType-${inventoryObjToDraw.id}p`);
        }  
            
    }

    #onMenuPick(theId){
        const reference = theGame;
        //rest but
        if(theId == "rest"){
            reference.restGame();
        }else{

            //get the toll id
            reference.#inventoryObj.setCurrentToll(theId.slice(theId.indexOf("-")));
            //draw the update
            reference.#drawData.onMenuPick(theId);
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