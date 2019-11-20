import React from 'react';
import  '../css/App.css';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header';
import history from '../utils/history'
import Main from './Main';
import Signup from './Signup';
import Paystack from './paystack';
import Thank from './Thank';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      features : [
          {
            id:1,
            featureName: "Automated taxes",
            featureBody: "All local, state and federal payroll taxes are calculated, filed, and paid automatically.",
          },
          {
            id:2,
            featureName: "Payroll on AutoRun",
            featureBody: "You can set payroll to run automatically each pay period. Nice!",
          },
          {
            id:3,
            featureName: "Flexible payment schedules",
            featureBody: "Pay your team weekly, bi-weekly, twice a month, or monthly.",
          },
          {
            id:4,
            featureName: "Unlimited payrolls",
            featureBody: "Run payroll as many times as you need. ",
          },
          {
            id:5,
            featureName: "Accounting integrations",
            featureBody: "Gusto integrates with QuickBooks, Xero, and FreshBooks",
          },
          {
            id:6,
            featureName: "Payroll reports",
            featureBody: "Generate and download reports for payroll history, bank transactions, contractor payments, paid time off, tax payments, and more",
          },{
            id:7,
            featureName: "Direct deposit",
            featureBody: "Your employees’ paychecks go straight to their bank accounts.",
          },{
            id:8,
            featureName: "No payroll setup fees",
            featureBody: "Our easy-to-use software and helpful support team are here to help you get started",
          },
          {
            id:9,
            featureName: "Mobile",
            featureBody: "Access your account and run payroll any time on your smartphone or tablet. ",
          },
      ]
    }
  }
  
  

  render(){
    return(
      <div>
      <Router history={history}>
      <div>
          <Header />
          <Switch>
              <Route   exact path='/' component= {() => < Main features={ this.state.features} /> } />
              <Route path ='/signup' component={Signup}/>
              <Route path ='/paystack' component={Paystack}/>
              <Route path ='/thank' component={Thank}/>
          </Switch>
      </div>
  </Router>
      </div>
    )
  }
}

export default App;
