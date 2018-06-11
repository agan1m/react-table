import { call, put, takeEvery } from 'redux-saga/effects';

import { getBigDb, setLocalBigDb, getLocalBigDb } from '../api';
import { bigSuccess, BIG_REQUEST, bigFailer } from '../ducks/bigDb';


export default function* (action) {
    yield takeEvery(BIG_REQUEST, bigFlow)
}


export function* bigFlow (action) {
  try {
    if (getLocalBigDb()) {
    let payload = yield call(getLocalBigDb);
    yield put(bigSuccess(JSON.parse(payload)));
  } else {
    let payload = yield call(getBigDb);

    yield put(bigSuccess(payload.data));
    yield call(setLocalBigDb, payload.data);
  }
  } catch (error) {
    
      yield put(bigFailer(error.message))
  }
  
}
