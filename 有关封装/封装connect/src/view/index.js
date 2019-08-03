import React, { Component } from 'react';
import MaxRoute from '../router';
class Index extends Component {
  render() {
    let {route}=this.props;
    return (
      <div>
        <MaxRoute route={route}></MaxRoute>
                Index
      </div>
    );
  }
}
export default Index;