import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Contexts/UserContext';
import "./Login.css";

const Login = () => {
    const navigate=useNavigate();
    const{signIn}=useContext(authContext);
 
const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    
    
    signIn(email,password)
    .then(result=>{
        const user=result.user;
        console.log("user",user);
       form.reset();
       navigate("/");
    })
    .catch(error=>{
        console.error(error);
    })

}


    return (
        <div>
 <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input  type="email" name="email" id="1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input  type="password" name="password" id="2" required />
                    </div>
                    
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>        </div>
    );
};

export default Login;