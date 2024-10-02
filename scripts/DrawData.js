export class DrawData{
    #boardElement;

    constructor(){
        this.#boardElement = document.querySelector("article#gameBoard");
    }

    drawBoard(boardArray,onActionFun){
        //container of 100vh that will be flex column
        //container of 100 wh that will be a flex row
        let columnCounter = 0;
        for(let column of boardArray){
            const theColumnElement = document.createElement("div");
            theColumnElement.classList.add("boardColumn");
            let rowCounter = 0;
            for(let squareItem of column){
                const theElement = document.createElement("div");
                theElement.classList.add("squareItem");

                //add general callBack for click
                const theElementId = `x${columnCounter}-y${rowCounter}`;
                theElement.id = theElementId;
                theElement.addEventListener("click",()=>{onActionFun(theElementId)});

                //add the extra squarItem type :
                theElement.classList.add(squareItem.typeName);

                theColumnElement.appendChild(theElement);

                rowCounter++;
            }
            //add to the main board
            this.#boardElement.appendChild(theColumnElement);
            columnCounter++;
        }
    }

    updateUiElement(theId,elementType){
        const theElement = document.querySelector(`#${theId}`);
        this.removeAllTypes(theElement);
        if(elementType[elementType.length]!=-1){
            theElement.classList.add(elementType);
        }
    }

    removeAllTypes(theElement){
        for(let classType = 1; classType < 6; classType++){
            theElement.classList.remove(`squareItemType${classType}`);
        }
    }

}
