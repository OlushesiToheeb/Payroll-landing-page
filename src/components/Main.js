import React from 'react';
import guy from "../imgs/dribble-big-data.png";
import banner from '../imgs/star-banner.png';
import guyMan from "../imgs/photo.jpg";
import '../css/Main.css';
import {Link} from 'react-router-dom';


class Main extends React.Component{

    render(){
        const {features} = this.props;
        return(
            <main>
                <section className="hero-header simple-banner dark-text" style={{background: `url(${banner})`}}>
                    <div className='Hero container' >
                        <div className="hero-content">
                            <h1>Simplify Payroll</h1>
                            <p className="lead-i">With software and services designed for your business</p>

                            <h3>Join <span className='text-info'>more than</span> 100,000</h3>
                            <p className="lead-i">small businesses and their teams</p>
                            <div className="act-buttons">
                                <a className="btn btn-success font-14" href='html'>Get Started</a>
                            </div>
                        </div>
                        <div className="hero-content1">
                            <img src={guy} className="img-responsive" alt="" />
                        </div>
                    </div>
                </section>


                <section className='tech container-fluid'>
                    <div className ='container wrapper'>
                        <div className ='img-wrapper'>
                            <img src={guyMan} className="img-responsive img-holder" alt="" />
                        </div>
                        <div className='tech-text'>
                            <h2>Technology alone is not enough</h2>
                            <p>You need technology plus expertise, at every level and at every stage, to keep your human
                            resources software modern and adaptable. You need expertise before you make a purchase
                            when you’re working to identify the right HR solution for your business. You need expertise
                            throughout implementation. And you need ongoing support, not impersonal, 1-800 number call
                            centres. To succeed, you need a dedicated team of experts that not only understands HR
                            software but are also intimately familiar with your business.
                            </p>
                        </div>
                    </div>

                    <div className='container features'>  
                        <h2 className='text-center'>Features</h2>
                        <div className='feature-body'>
                            {features.map((feature) => (
                                <div key={feature.id} className='feature'>
                                    <h3>{feature.featureName}</h3>
                                    <p>{feature.featureBody}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className='container-fliud footer text-center'>
                    <Link to = '/' className="navbar-brand">Simplify Payroll</Link>
                    <p className="mg-bottom-0 disable-color">© 2019 Simplify Payroll. All Rights Reserved</p>

                </footer>

            </main>
        )
    }
}

export default Main