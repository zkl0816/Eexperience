import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
function MaxRoute(props){
  // console.log(props.route);
  return (
    <Switch>
      {
        props.route.map(Item=>
          !Item.redirect?(<Route  key={Item.path}path={Item.path} render={(props)=><Item.component {...props} route={Item.children}></Item.component>}></Route>):
            (<Redirect from={Item.path} to={Item.redirect} key={Item.path}></Redirect>) 
        )
      }
    </Switch>
  );
}

export default MaxRoute;