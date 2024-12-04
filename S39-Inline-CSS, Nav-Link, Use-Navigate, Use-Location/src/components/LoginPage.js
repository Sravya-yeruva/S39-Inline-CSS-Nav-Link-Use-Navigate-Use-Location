import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'

function LoginPage() {
  let navigate=useNavigate();
  let emailInputRef=useRef();
  let passwordINputRef=useRef();
  return (
    <div className='App'>
      <Navigation></Navigation>
        <form>
       <h1 className='loginH'>Login</h1>
       <div>
        <input type="email" placeholder="Email" style={{fontSize:"1.3rem", padding:"10px"}} ref={emailInputRef}></input>
       </div>
       <div>
        <input type="password" placeholder='Password' style={{fontSize:"1.3rem", padding:"10px"}} ref={passwordINputRef}></input>
       </div>
       <div>
        <input type="checkbox"></input>
        <label>Show Password</label>
       </div>
       <div>
        <button type="button" onClick={()=>{
          let typedemail=emailInputRef.current.value;
          let typedpassword=passwordINputRef.current.value;
          if(typedemail=="sravya@gmail.com" && typedpassword=="sravya"){
            navigate("/SignUp",{state:{team:"Africa",Brand:"Puma"},});
          }
          else{
            alert("Invalid email or password");
          }
        }}>SIGN IN</button>
       </div>
       <h2 style={{fontSize:"15px"}}>Forgot Username / Password?</h2>
       <h2 style={{fontSize:"15px"}}>Don't have an account? Sign Up</h2>
       <div>
        <Link to="/SignUp">Sign Up</Link>
       </div>
       </form>
    </div>
  )
}

export default LoginPage
