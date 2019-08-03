import React, { Component } from 'react'
import "../index.css"
class Count extends Component {
    state={
        nums:this.props.num
    }
    render() {
        return (
            <div class="counts">
                <span>-</span>
                <b>{this.state.nums}</b>
                <span>+</span>
            </div>
        )
    }
}
export default Count;
