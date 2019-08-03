import React,{Component} from 'react';
import './App.css';
// import Shop from './shop/index.js'
// import {Provider} from 'react-redux'
// import  store from './store/index.js'
import Index from './高阶组件/gao/index.js'
class App extends Component{
  render(){
    return (
      // <Provider store={store}>
      //    <Shop/>        
      // </Provider>
      <Index title={'dfsdfsd'}/>
    );
  }

}

export default App;
