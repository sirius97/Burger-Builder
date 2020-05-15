import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import CheckOut from './container/CheckOut/CheckOut';
import Orders from './container/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path = "/" exact component = {BurgerBuilder} />
          <Route path = "/checkout" component = {CheckOut} />
          <Route path = "/orders" component = {Orders} />
        </Layout>
      </div>
    );
  }
}

export default App;
