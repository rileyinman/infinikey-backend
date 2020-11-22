import { LevelData } from '../consts/index.js';
import Level0 from './Level0.js'
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import Level3 from './Level3.js';

const Levels = [
  Level0, Level1, Level2, Level3
];

for (const level of Levels) {
  LevelData.set(level.id.toString(), level);
}

export default Levels;
