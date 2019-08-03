import {createStore} from 'redux'

import reducer from './reducer/reducer.js'

let store=createStore(reducer);

export default store;