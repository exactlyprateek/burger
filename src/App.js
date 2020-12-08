import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import classes from'./App.module.css';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

class App extends Component{
  render() {
    return(
        <div className={classes.App}>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path = "/orders" component ={Orders}/>
              <Route path="/" exact component={BurgerBuilder}/>
            </Switch>
            
          </Layout>
        </div>
    );
  }
}

export default App;