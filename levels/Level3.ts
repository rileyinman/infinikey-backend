import { Cell } from '../consts/index.js';
import Level from '../Level.js';


let Level3 =
  new Level(3, 10, 10, [
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.DOOR5, Cell.WALL,
    Cell.WALL, Cell.KEY4, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.FLOOR, Cell.DOOR3, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.NPC, Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.DOOR3, Cell.WALL, Cell.WALL, Cell.FLOOR, Cell.DOOR4, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.KEY1, Cell.DOOR3, Cell.FLOOR, Cell.KEY3, Cell.WALL, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.DOOR2, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.KEY5, Cell.WALL, Cell.WALL, Cell.KEY3, Cell.WALL, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.KEY3, Cell.WALL, Cell.DOOR2, Cell.FLOOR, Cell.DOOR1, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.PLAYER, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL
  ]);

export default Level3;