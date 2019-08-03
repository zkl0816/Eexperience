
//封装provider是为了为每个组件提供store仓库
import React,{Component} from 'react';
import Context from './utils/context.js';
class Provider extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {store,children}=this.props;
    // console.log(this.props);//现在把仓库里面的数据已获取到,现在的目标是咋样将store传给每个组件！
    return <Context.Provider value={{store}}>
      {children}
    </Context.Provider>;
  }
}

export default Provider;