import {Board} from '../domain/models/board.js';
import {Game} from "../domain/Game.js";
import {UserInventory} from "./models/UserInventory.js";
import {drawData} from "../presntation/DrawData.js";
import {dao} from "../data/dao.js";

const gameData = localStorage.getItem("gmaeSetup");

const res = [];
let outCome = "";
for (let i = 0; i < gameData.length; i++) {
    if(gameData[i] != ","){
        outCome+=gameData[i];
    }else{
        res.push(Number(outCome));
        outCome = "";
    }
}
if(outCome.length > 0){
    res.push(Number(outCome));
}


const pickedBoard = dao.getBoardTemp(res[0]);


const theBoard = new Board(pickedBoard,res[1],res[2]);
const userInventory = new UserInventory(dao.inventoryTolls);


export const theGame = new Game(userInventory,theBoard,drawData);
theGame.startGame();