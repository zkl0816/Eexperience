
// 主要就是模拟connect是咋样实现的？其实他就是借助context完成的
import React, { Component } from 'react';
import Context from './context.js';
function Connect(ckb){
  
  return function(Com){
    //Disable react/display-name for this line
    return class extends Component{//匿名组件
      render(){
        console.log(this.props);
        return <Context.Consumer>
          {
            (value)=>{
              // ckb && ckb(value);
              let resed=null;
              if(ckb){
                resed=ckb(value);//获取所需要的数据
              }
              return <Com {...resed} {...this.props}/>;//通过父子传参把数据全部传到返回组件的props上
            }
          }
        </Context.Consumer>;
        
      }
    };
  };
}

export default Connect;