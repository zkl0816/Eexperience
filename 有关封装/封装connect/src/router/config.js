import Home from '../view/home';
import Index from '../view/index';
import Hot from '../view/hot';
import Cold from '../view/cold';



export default {
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/index/hot',
          component: Hot
        },
        {
          path: '/index/cold',
          component: Cold
        },
        {
          path: '/index',
          redirect: '/index/hot'
        }
      ]
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
};