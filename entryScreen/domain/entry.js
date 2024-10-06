/*
entry file will be the initalizer file,in practice:
 * will take the requred inputs from the user 
 * and store them in the matched local storage 
 * the file also mange the navigation to the game and to the order page
*/
import {drawDataEntry} from "../presentation/drawDataEntry.js";
import { GameSetup } from "../domain/GameSetup.js";

export const gameSetup = new GameSetup(drawDataEntry);






  