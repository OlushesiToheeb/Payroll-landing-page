import React, { Component } from 'react';
import PaystackButton from 'react-paystack';
import  secure from '../imgs/secured-by-paystack.png';
import '../css/paystack.css';

   class Paystack extends Component {
 
      state = {
        key: "pk_test_d3c4a12163e62a7458d450a11d08e1c62b467e64",
        email: "customer@gmail.com",
        amount: 30000
      }
 
      callback = (response) => {
        if(response.status === 'success'){
          return (
              this.props.history.replace("/thank")
            )
        }
        
      }

      close = () => {
        console.log("Payment closed");
      }
 
      getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
 
        for( let i=0; i < 15; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
 
        return text;
      }

      
 
      render() {
        return (
          <div class="body">
            <p>
              <PaystackButton
                class="paystack_payment_button"
                text=<span>Subscribe</span>
                callback={this.callback}
                close={this.close}
                disabled={false}
                embed={false}
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                paystackkey={this.state.key}
                tag="button"
              />
            </p>
            <div className="secure">
            <img className="secure" src={secure} alt="secured-by-paystack"/>
            </div>
          </div>
        );
      }
    }
 
    export default Paystack;
