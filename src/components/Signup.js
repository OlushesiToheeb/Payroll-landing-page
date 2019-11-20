import React from 'react';
import '../css/Signup.css';
import {Link} from 'react-router-dom';



class Signup extends React.Component{
    render(){
        return(
            <div className='herosignup container-fluid' >
                <div className='container signup_wrapper'>
                    <form>
                        <h4>Personal Info</h4>
                        <div class="form-group">
                            <label for="inputName">Name</label>
                            <input type="text" class="form-control"  placeholder="Enter Your Name" id='inputName'/>
                        </div>
                        <div>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div>
                            <label for="inputPhone">Phone</label>
                            <input type="tel" class="form-control"  placeholder="Enter Your Phone Number" id='inputPhone"'/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>

                        <h4>Business Details</h4>
                        <div class="form-group">
                            <label for="inputCompanyName"> Company Name</label>
                            <input type="text" class="form-control"  placeholder="Company Name" id= "inputCompanyName"/>
                        </div>
                    
                        
                        <div class="form-group">
                            <label for="inputAddress">Company Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder=" e.g 1234 Main St"/>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputState">State</label>
                            <input type="text" class="form-control" id="inputState"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="inputCountry">Country</label>
                            <select id="inputCountry" class="form-control">
                                <option selected>Choose...</option>
                                <option >Nigeria</option>
                                <option >Ghana</option>
                                <option >Germany</option>
                                <option >France</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                            <label for="inputStaff">Number of Staff</label>
                            <input type="number" class="form-control" id="inputStaff"/>
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputWeek">N.W.D</label>
                            <input type="number" class="form-control" id="inputWeek"/>
                            </div>
                            <div class="form-group col-md-4">
                            <label for="selectWeek">select Week</label>
                            <select id="selectWeek" class="form-control">
                                <option selected>Sun-Sat</option>
                                <option >Sunday</option>
                                <option >Monday</option>
                                <option >Tuesday</option>
                                <option >Wednesday</option>
                                <option >Thursday</option>
                                <option >Friday</option>
                                <option >Saturday</option>
                            </select>
                            </div>
                        </div>

                        <div className='btns'>
                            <button className="btn btn-success font-14 text-center" type="submit"><Link to='/paystack' >Submit to Subscribe</Link></button>
                        </div>

                    </form> 
                </div>
            </div>
        )
    }
}

export default Signup;