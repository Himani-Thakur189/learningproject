import {delay} from 'redux-saga/effects'
import {takeLatest,put} from 'redux-saga/effects';

function* incrementAsync(){
yield delay(3000)
yield put({type:'INCREMENT'})
}
function* decrementAsync(){
    yield delay(3000)
    yield put({type:'DECREMENT'})
    }
function* incrementAsync5(){
    yield delay(3000)
    yield put({type:'INCREMENT5'})
}
export function* watchCounter(){
    yield  takeLatest('INC',incrementAsync);
   yield takeLatest('DEC',decrementAsync)
   yield  takeLatest('INC5',incrementAsync5);
}