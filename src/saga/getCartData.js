import { call,put,fork,all, spawn } from 'redux-saga/effects'
import {cartSuccess,cartFailure} from '../actions/'
import axios from 'axios'

const fetchData = async () => (await axios.get('http://localhost:8000/menu')).data

function* worker() {
    try{
        const data = yield call(fetchData)
   
        yield put(cartSuccess(data))
    }catch (err) {
        yield put(cartFailure(err))
    }
   
}

function* watcher() {
    yield all([
        fork(worker)
    ])
}


export default function* rootSaga() {
    const sagas = [watcher]

    const retrySagas = sagas.map(saga => {
        return spawn(function* () {
            while(true) {
                try{
                    yield call(saga)
                    break;
                }catch (err) {
                    console.log(err)
                }
            }
        })
    })

    yield all(retrySagas)
}

