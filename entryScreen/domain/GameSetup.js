import {gameSetup} from "../domain/entry.js"

/*
The Game setup object will initalize our game with the matched helper objects 
*/
export class GameSetup{
    #worldTemplate;
    #drawObj;
 
    constructor(drawObj){
        this.#drawObj = drawObj;
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