import React, { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'

function SignUp() {
  let naviagte=useNavigate();
  let FirstNameInputRef=useRef();
  let LastNameInputRef=useRef();
  let MobileNoInputRef=useRef();
  let EmailInputRef=useRef();
  let location=useLocation();
    console.log(location);

  return (
    
    <div>
       <Navigation></Navigation>
      <form>
        <h1 className='loginH'>Sign Up</h1>
        <h2 style={{fontSize:"15px"}}>It's quick and easy</h2>
        <hr></hr>
        <div>
        <input type="text" placeholder="First Name" style={{fontSize:"1.3rem", padding:"10px"}} ref={FirstNameInputRef}></input>
        </div>
        <div>
        <input type="text" placeholder="Last Name" style={{fontSize:"1.3rem", padding:"10px"}} ref={LastNameInputRef}></input>
        </div>
        <div>
        <input type="number" placeholder="Mobile Number" style={{fontSize:"1.3rem", padding:"10px"}} ref={MobileNoInputRef}></input>
        </div>
        <div>
        <input type="email" placeholder="Email" style={{fontSize:"1.3rem", padding:"10px"}} ref={EmailInputRef}></input>
        </div>
        <fieldset>
          <legend style={{fontSize:"15px", backgroundColor:"pink"}}>Enter Your Personal Details</legend>
        <div>
          <label style={{fontSize:"1.3rem"}}>Date of Birth:</label>
          <input type="date"></input>
        </div>
        <div>
          <label style={{fontSize:"1.3rem"}}>Gender:</label>
          <select>
            <option>Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Custom</option>
          </select>
        </div>
        </fieldset>
        <div>
          <button type="button" onClick={()=>{
            
            let FirstName=FirstNameInputRef.current.value;
            let LastName=LastNameInputRef.current.value;
            let MobileNo=MobileNoInputRef.current.value;
            let Email=EmailInputRef.current.value;
            if(FirstName=="sravya" && LastName=="yeruva" && MobileNo=="1234567890" && Email=="sravya@gmail.com"){
              naviagte("/HomePage");


            }else{
              alert("Inavlid Deatils")
            }
          }}>Sign Up</button>
        </div>
       
       
       

      </form>
      <div>
        <Link to="/">Login Page</Link>
        </div>
        <div>
        <Link to="/HomePage">Home Page</Link>
        </div>
    </div>
  )
}

export default SignUp
