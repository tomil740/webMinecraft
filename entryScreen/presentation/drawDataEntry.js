class DrawDataEntry{

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
        console.log("actionbut",startButElement)
        startButElement.addEventListener('click', startGame);
    }
}
export const drawDataEntry = new DrawDataEntry();