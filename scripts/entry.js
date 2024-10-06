/*
entry file will be the initalizer file,in practice:
 * will take the requred inputs from the user 
 * and store them in the matched local storage 
 * the file also mange the navigation to the game and to the order page
*/
import {drawData} from "./DrawData.js";
import { GameSetup } from "./dataObjects/gameSetup.js";

export const gameSetup = new GameSetup(drawData);




//const arrayInString = JSON.string();

/*
*/
function startGame(){
    let res = drawData.getFormValues();
    localStorage.setItem("gmaeSetup",`${gameSetup.worldTemplate},${res[0]},${res[1]}`);
    window.location.href = 'game.html'
}


//console.log(gameData);
const startButElement = document.querySelector("body #startBut");
startButElement.addEventListener('click', startGame);





  