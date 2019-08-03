import React, { Component } from 'react';
import Context from './utils/context.js';
class GrandSon extends Component {
  state={
    val:0
  }
  render() {
    return (
      <div>
        {/* <Context.Consumer> */}
        {/* 通过Context.Consumer接收数据并通过回调函数返回值 */}
        {
          // (value)=>{
          //   return <p>{value.count}</p>;
          // }
        }
        {/* </Context.Consumer> */}
        
            孙子
      </div>
    );
  }
}
export default GrandSon;