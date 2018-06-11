import { combineReducers } from 'redux';

import bigDb from './bigDb';
import smallDb from './smallDb';

export default combineReducers({ bigDb , smallDb });
