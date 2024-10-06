import {SquareItem} from "./squreItem.js";

export class Board{
    #boardInitSetup;
    #boardArray;
    //#boardElement;
    constructor(boardTemp,boardXsize,boardYsize){
        this.#boardInitSetup = [boardTemp,boardXsize,boardYsize];
        this.#boardArray = [[]];
        //this.#boardElement = document.querySelector("article#gameBoard");
        this.initalizeBoard(boardTemp,boardXsize,boardYsize);
        //this.drawBoard();
    }
 
    get boardArray(){
        return this.#boardArray;
    }
 
    initalizeBoard(){
        const boardTemp = this.#boardInitSetup[0];
        const boardXsize = this.#boardInitSetup[1];
        const boardYsize = this.#boardInitSetup[2];
        //get board temp values
        const boardTemplate =  this.getMatchedTemBoardValues(boardTemp,boardXsize,boardYsize);
        const cleanBoard = [];
        for(let column = 0; column < boardXsize; column++){
            const theColumn = [];
            for(let row = 0; row < boardYsize; row++){
                let objType = -1;
                for(let templateObj of boardTemplate){
                    if(column <= templateObj.xPortion && row >= templateObj.yPortion){
                        objType = templateObj.toType;
                        break;
                    }
                }
/*
                let objType = -1;
                //the ground bottom 40%
                if(row > 11){
                    objType = 2;
                }else if(row == 11){
                    objType = 1;
                }else if(row == 10){
                    objType = 5;
                }
                */
                theColumn.push(new SquareItem(objType));
            }
            cleanBoard.push(theColumn);
        }
        this.#boardArray = cleanBoard;
    }

    getMatchedTemBoardValues(boardTemp,boardXsize,boardYsize){
        for(let tempObj of boardTemp){
            tempObj.xPortion = parseInt(tempObj.xPortion*boardXsize);
            tempObj.yPortion = parseInt(tempObj.yPortion*boardYsize);
        }

        return boardTemp;
    }
/*
    drawBoard(){
        //container of 100vh that will be flex column
        //container of 100 wh that will be a flex row
        for(let column of this.boardArray){
            const theColumnElement = document.createElement("div");
            theColumnElement.classList.add("boardColumn");
            for(let squareItem of column){
                const theElement = document.createElement("div");
                theElement.classList.add("squareItem");

                //add general callBack for click
                //theElement.addEventListener("click",);

                //add the extra squarItem type :
                theElement.classList.add(squareItem.type);

                theColumnElement.appendChild(theElement);
            }
            //add to the main board
            this.#boardElement.appendChild(theColumnElement);
        }
    }
        */


}

