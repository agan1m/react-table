import { fork } from 'redux-saga/effects';

import bigSagaFlow from './bigSaga'
import smallSagaFlow from './smallSaga'


export default function* () {
    yield fork( smallSagaFlow)
    yield fork( bigSagaFlow)
}