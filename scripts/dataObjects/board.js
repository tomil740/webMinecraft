import {SquareItem} from "./squreItem.js";

export class Board{
    #boardArray;
    #boardElement;
    constructor(){
        this.#boardArray = [[]];
        this.#boardElement = document.querySelector("article#gameBoard");
        this.initalizeBoard();
        this.drawBoard();
    }

    get boardArray(){
        return this.#boardArray;
    }

    initalizeBoard(){
        const cleanBoard = [];
        for(let column = 0; column < 25; column++){
            const theColumn = [];
            for(let row = 0; row < 20; row++){
                let objType = -1;
                //the ground bottom 40%
                if(row > 11){
                    objType = 2;
                }else if(row == 11){
                    objType = 1;
                }else if(row == 10){
                    objType = 5;
                }
                theColumn.push(new SquareItem(objType));
            }
            cleanBoard.push(theColumn);
        }
        this.#boardArray = cleanBoard;
    }

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
                theElement.addEventListener("click",);

                //add the extra squarItem type :
                theElement.classList.add(squareItem.type);

                theColumnElement.appendChild(theElement);
            }
            //add to the main board
            this.#boardElement.appendChild(theColumnElement);
        }
    }

    SqureItemAction(){
        
    }


}

