import React from 'react';
import banner from '../imgs/star-banner.png';
import '../css/Thanks.css';

class Thank extends React.Component{
    render(){
        return(
            <section className="heroHeader" style={{background: `url(${banner})`}}>
                <div className='container thanks'>
                    <p>Successful Payment</p>
                    <h2>Thank You For Signing Up</h2>
                </div>
            </section>
        )
    }
}

export default Thank