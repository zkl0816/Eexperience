//封装一个跨级的一个组件,主要是为了解决组件与相离较远的组件的传参，或者两不相干的组件传参。

import React from 'react';

let Context=React.createContext(); //注：两个组件利用context传参时,只可以实例一个，如果实例多个的话，就不会传参了。(因为实例不同的context,它里面的provider和consumer不一样，所以，不可以实例多个)

export default Context;

