import {Board} from './dataObjects/board.js';
import {Game} from "./Game.js";
import {UserInventory} from "./UserInventory.js";
import {DrawData} from "./DrawData.js"


const theBoard = new Board();
const userInventory = new UserInventory();
const drawData = new DrawData();

export const theGame = new Game(userInventory,theBoard,drawData);
theGame.startGame();