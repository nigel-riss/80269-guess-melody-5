import {combineReducers} from 'redux';
import {gameData} from './game-data/game-data.js';
import {gameProcess} from './game-process/game-process.js';
import {user} from './user/user.js';


export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`,
};


export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
  [NameSpace.USER]: user,
});
