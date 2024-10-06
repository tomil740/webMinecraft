import {Board} from './dataObjects/board.js';
import {Game} from "./Game.js";
import {UserInventory} from "./UserInventory.js";
import {drawData} from "./DrawData.js";
import {dao} from "./dataLayer/dao.js";

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