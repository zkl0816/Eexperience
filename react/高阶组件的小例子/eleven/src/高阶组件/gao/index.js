import React, { Component } from 'react'
import gao from '../utils/list.js'
console.log(gao)
class Wrap extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
             Wrap
             <br/>
             {this.props.data}
            </div>
        )
    }
}
export default gao(Wrap);