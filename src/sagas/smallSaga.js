import { call, put, takeEvery} from 'redux-saga/effects';

import { getSmallDb, setLocalSmallDb, getLocalSmallDb } from '../api';
import { smallSuccess, SMALL_REQUEST, smallFailer } from '../ducks/smallDb';


export default function* (action) {
    yield takeEvery(SMALL_REQUEST, smallFlow)
}


export function* smallFlow (action) {
    try {
        if(getLocalSmallDb()){
            let payload = yield call(getLocalSmallDb)
            yield put(smallSuccess(JSON.parse(payload)))
        }
        else {
        
        let payload = yield call(getSmallDb);
        
        yield put(smallSuccess(payload.data));
        yield call(setLocalSmallDb, payload.data)
        
    }
    } catch (error) {
        
        yield put(smallFailer(error.message))
    }
        
}