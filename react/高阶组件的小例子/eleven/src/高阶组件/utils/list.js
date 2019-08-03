import React,{Component} from 'react'
import axios from 'axios'
const gao=(Wrap)=>{
 return  class extends Component{
   constructor(){
     super()
     this.state={
       data:''
     }
   }
    render(){
      return (<div>
        <header>SDSSFDSF</header>
        <Wrap {...this.props} data={this.state.data}/>  
      </div>)
    }
    componentDidMount(){
      axios.get('/api/detail').then(res=>{
        this.setState({data:res.data.data})
      })
    }
  }
  
   
}

export default gao;