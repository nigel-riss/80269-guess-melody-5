import {combineReducers} from 'redux';
import {gameData} from './game-data/game-data.js';
import {gameProcess} from './game-process/game-process.js';


export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
};


export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
});
