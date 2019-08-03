import React, { Component } from 'react';
import Connect from './utils/connect.js';
class Child extends Component {
  constructor(props){
    super(props);
  }
  state={
    count:0
  };
  //通过监听props的变化
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.count!=prevState.count){
      return {
        count:nextProps.count
      };
    }
    return null;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        child
        {this.state.count}
        {/* Disable react/prop-types for this line*/}
      </div>
    );
  }
  
  componentDidMount(nextProps,prevState){
  }

  getSnapshotBeforeUpdate(){
    return 1;//返回的值传给componentDidUpdate
  }
  componentDidUpdate(next,state,params){
    console.log(params);
  }
  // componentDidUpdate(prevProps,prevState,params){
  //   console.log('componentDidUpdate',params);
  // }
}
export default Connect(
  (val)=>{
    return {data:val.store};
  })(Child);