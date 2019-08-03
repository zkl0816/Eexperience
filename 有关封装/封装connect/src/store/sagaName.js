
import {takeEvery,put} from 'redux-saga/effects';
//put就是要获取到真是的dispatch
function* changeNum(){
  yield put({
    type:'ADD'
  });
}

//监听action的变化
export function* listenAction(){
  yield takeEvery('ADDNUM',changeNum);
} 

