/*
DrawDataEntry:
The drawData object need to supply all the UI sync from our data,in practice we will use that object to draw 
any data change to our UI and keep it sync and vi versa to update user inputs to the data 
*/
class DrawDataEntry{
    #rowsPick;
    #columnsPick;
    constructor(){
        this.#rowsPick = 25;
        this.#columnsPick = 20;
        this.#rowsMenuInit();
        this.#columnsMenuInit();
    }

    set columnsPick(pick){
        this.#columnsPick = pick;
    }

    set rowsPick(pick){
        this.#rowsPick = pick;
    }

    #dropDownMenuInit(theMenu,theBut,isRow){
        for(let index = 0; index < theMenu.children.length; index++){
            const a = theMenu.children[index]
            a.addEventListener("click",()=>{
                theMenu.classList.toggle("visable");
                if(isRow){
                    this.#rowsPick = a.textContent;
                    theBut.textContent = `tiles in a row: ${this.#rowsPick}`;
                }else{
                    this.#columnsPick = a.textContent;
                    theBut.textContent = `tiles in a column: ${this.#columnsPick}`;
                }
            });
        }

        theBut.addEventListener("click",()=>{
            theMenu.classList.toggle("visable")});
    }

    #columnsMenuInit(){
        const theMenuSec = document.querySelector("main form .dropDwonMenusSection div#columnMenuSec");
        const theMenu = theMenuSec.querySelector("ul");
        const theBut = theMenuSec.querySelector("a#columnSize");
        theBut.textContent = `tiles in a column: ${this.#columnsPick}`;

        this.#dropDownMenuInit(theMenu,theBut,false);
    }

    #rowsMenuInit(){
        const theMenuSec = document.querySelector("main form .dropDwonMenusSection div#rowsMenuSec");
        const theMenu = theMenuSec.querySelector("ul");
        const theBut = theMenuSec.querySelector("a#rowsSize");
        theBut.textContent = `tiles in a row: ${this.#rowsPick}`;
        this.#dropDownMenuInit(theMenu,theBut,true);
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

        return [this.#rowsPick,this.#columnsPick];
    }

    #actionButtonInit(startGame){
        const rulesElement = document.querySelector("main article.gameRules");
        const startButElement = document.querySelector("body #startBut");
        const rulesButElement = document.querySelector("body .actionButsSection .rulesBut");
        startButElement.addEventListener('click', startGame);
        rulesButElement.addEventListener('mouseover',()=>{rulesElement.classList.toggle("gameRules2")});
    }
}
export const drawDataEntry = new DrawDataEntry();