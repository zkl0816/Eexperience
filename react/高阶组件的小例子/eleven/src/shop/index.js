import React, { Component } from 'react'
import List from './component/list.js'
import '../index.css'
class Shop extends Component {
    state={
        data:[{
           title:'苹果',
           price:5,
           num:1,
           check:false,
           img:require('./img/1.jpg')
        },{
            title:'梨',
            price:6,
            num:1,
            check:false,
           img:require('./img/2.jpg')

         },{
            title:'饼干',
            price:10,
            num:1,
            check:false,
            img:require('./img/3.jpg')

         }]
    }
    render() {
        let {data}=this.state;
        console.log(data)
        return (
            <div className='App'>
            <section>
            {
                 data.map((item,index)=>{
                     return <List 
                     title={item.title}
                     price={item.price}
                     num={item.num}
                     key={index}
                     img={item.img}/>
                 })
             }
            </section>
            <div className="zong">
                <p><span>商品总价</span><span>￥<b>23.6</b></span></p>
                <div className="go">
                 <p><span>?</span>全选</p>
                 <p>
                     <span>合计:<b>￥23.6</b></span>
                     <span>运费￥10</span>
                 </p>
                 <button>去结算</button>
                </div>
             </div>
            <footer>
                <ul>
                    <li>首页</li>
                    <li>会员</li>
                    <li>购物车</li>
                    <li>我的</li>
                </ul>
            </footer>
            </div>
        )
    }
}
export default Shop;