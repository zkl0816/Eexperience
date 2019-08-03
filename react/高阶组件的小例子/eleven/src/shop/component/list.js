import React, { Component } from 'react'
import Count from './count.js'
import "../index.css"
class List extends Component {
    render() {
        let {title,price,num,img}=this.props;
        return (
            <div className='lists'>
            <span></span>
            <dl>
                <dt><img src={img} alt=""/></dt>
                <dd>
                    <p>{title}</p>
                    <p>{price}</p>
                    <Count num={num}/>
                </dd>
                
            </dl>
            </div>
            
        )
    }
}
export default List;