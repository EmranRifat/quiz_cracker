import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Contexts/UserContext";
import "./Signup.css";

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser,signinWithGoogle } = useContext(authContext);
  // console.log(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const confirm = form.confirm.value;

    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
      })
      .catch((error) => {
        console.error(error);
      });


    if (password !== confirm) {
      setError("Your Password didn't match..!");
    }
    if (password.length < 5) {
      setError("Password must be Five characters or more");
    }
  };
const handleGoogleSignIn=()=>{
  signinWithGoogle()
  .then(result=>{
    const user=result.user;
    console.log(user)
  })
  .catch(error=>{
    console.error(error);
  })
}






  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="1" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="2" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm" id="3" />
            </div>
            <p className="error-text">{error}</p>

            <input className="form-submit"type="submit"value="Sign Up"require/>
            <input onClick={handleGoogleSignIn} className="google"type="submit"value="Continue with Google"require/>
          </form>
          <p>
            Already Have an account?<Link className="form-link" to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
