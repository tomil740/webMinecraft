import {gameSetup} from "../domain/entry.js"

export class GameSetup{
    #rowTiles;
    #columnTiles;
    #worldTemplate;
    #drawObj;
 
    constructor(drawObj){
        this.#drawObj = drawObj;
        this.#rowTiles = 10;
        this.#columnTiles = 10;
        this.#worldTemplate = 0;
        this.#drawObj.drawWorldTem(this.#onMenuPick,this.#startGame);
    }

    get drawObj(){
        return this.#drawObj;
    }
 
    get worldTemplate(){
        return this.#worldTemplate 
    }

    set worldTemplate(index){
        this.#worldTemplate = index;
    }

    #onMenuPick(tempIndex){
        const reference = gameSetup;
        reference.worldTemplate = tempIndex.slice(tempIndex.indexOf("-")+1);
        //draw the update
        reference.#drawObj.onTemplatePick(tempIndex);
    }

    #startGame(){
        const reference = gameSetup;
        let res = reference.drawObj.getFormValues();
        localStorage.setItem("gmaeSetup",`${reference.worldTemplate},${res[0]},${res[1]}`);
        window.location.href = '../../gameScreen/presntation/game.html';
    }
}