import React,{Component} from 'react';
import Child from './Child.js';
import GrangSon from './grandSon.js';
import Connext from './utils/connect.js';
import Context from './utils/context.js';
import {BrowserRouter as Router} from 'react-router-dom';
import MaxRoute from './router';
import rou from './router/config.js';
import {connect} from 'redux';
let {routes}=rou;
// console.log(routes);
class Extc extends Component{
  constructor(props){
    //不是生命周期函数
    super(props);
    this.state={
      count:0
    };
  }
  
  componentWillMount(){
      
  }
  render(){
    let {count} =this.state;
    // console.log(this.props);
    return <div className='coun'>
      <Router>
        <Child count={this.state.count} />
        {/* <Context.Provider value={{count}}> */}
        <GrangSon/>
        {/* </Context.Provider> */}
        <button onClick={()=>{this.setState({count:2});}}>添加购物车数量</button>
        <MaxRoute route={routes}/>
        <button onClick={()=>{
          // this.props.dispatch({
          //   type:'ADDNUM'
          // });
        }}>点击action变化</button>
      </Router>
      
    </div>; 
  }
  // componentDidMount(nextProps,prevState){
  //   console.log(this.state.count);
  // }
}

export default connect((state)=>{
  return {state};
},(dispatch)=>{
  
})(Extc);


