class DrawData{
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

    drawMenu(onMenuPickData){
        //menu items id
        const menuItemsId = [6,7,8,15,11,12];
        const theMenuItem = document.querySelectorAll("#userMenu .menuItem");
        let counter = 0;
        theMenuItem.forEach((menuItem)=>{
            const theId =`squareItemType-${menuItemsId[counter]}`
            //initalaze the default menu pick 
            if(counter == 0){
                this.onMenuPick(theId);
            }
            //console.log("calledWith",theId)
            menuItem.addEventListener("click",()=>{onMenuPickData(theId)});

            counter++;
        })
    }

    updateUiElement(theId,elementType){
        const theElement = document.querySelector(`#${theId}`);
        this.removeAllTypes(theElement);
        if(elementType[elementType.length]!=-1){
            theElement.classList.add(elementType);
        }
    }

    updateInventoryCounter(counterVal,itemId2){
        let itemId = itemId2;
        document.querySelector(`#userMenu .menuItem p#${itemId}`).textContent = `amount : ${counterVal}`;
    }

    removeAllTypes(theElement){
        for(let classType = 1; classType < 6; classType++){
            theElement.classList.remove(`squareItemType${classType}`);
        }
    }

    onMenuPick(toPick){
        this.cleanMenuPick();
        const current = document.querySelector(`#${toPick}`);
        current.classList.add("pickedItem");
    }

    cleanMenuPick(){
        document.querySelectorAll(".menuItemIcon").forEach((item)=>{
            item.classList.remove("pickedItem");
        })
    }

    drawWorldTem(onPick,startGame){
        //menu items id
        const theMenuItem = document.querySelectorAll("main form .worldTemplatePicker .worldTemlateitem");
        let counter = 0;
        theMenuItem.forEach((menuItem)=>{
            const theId =`worldTemplate-${counter}`
            //initalaze the default menu pick 
            if(counter == 0){
                this.onTemplatePick(theId);
            }
            //console.log("calledWith",theId)
            menuItem.addEventListener("click",()=>{onPick(theId)});

            counter++;
        })

        this.#actionButtonInit(startGame);
    }

    onTemplatePick(toPick){
        this.cleanTemplatePick();
        const current = document.querySelector(`#${toPick}`);
        current.classList.add("pickedItem");
    }

    cleanTemplatePick(){
        document.querySelectorAll(".worldTemplatePicker .worldTemlateitem").forEach((item)=>{
            item.classList.remove("pickedItem");
        })
    }

    getFormValues(){
        let res = [];
        document.querySelectorAll("form .dropDwonMenusSection select")
        .forEach((item)=>{
            res.push(item.value);
        })

        return res;
    }

    #actionButtonInit(startGame){
        const startButElement = document.querySelector("body #startBut");
        startButElement.addEventListener('click', startGame);
    }


}

export const drawData = new DrawData();
