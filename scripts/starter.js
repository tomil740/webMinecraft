import {Board} from './dataObjects/board.js';
import {Game} from "./Game.js";
import {UserInventory} from "./UserInventory.js";
import {DrawData} from "./DrawData.js";
import {Dao} from "./dataLayer/dao.js";

const dao = new Dao();
const pickedBoard = dao.getBoardTemp(0);


const theBoard = new Board(pickedBoard,25,20);
const userInventory = new UserInventory(dao.inventoryTolls);
const drawData = new DrawData();

export const theGame = new Game(userInventory,theBoard,drawData);
theGame.startGame();