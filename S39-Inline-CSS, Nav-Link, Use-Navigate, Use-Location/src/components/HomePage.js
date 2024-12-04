import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function HomePage() {
  return (
    <div className='bgImg'>
        <Navigation></Navigation>
      <h1 className='welH'>Welcome"😇" !</h1>
      <h1 style={{fontSize:"1.3rem"}}>Good to see you here</h1>
      <h1 style={{color:"green"}}>Our Partners</h1>
      <p style={{color:"white", fontSize:"20px"}}>Enjoy the discounts and special offers from our </p>
      <p style={{color:"white", fontSize:"20px"}}>Partners and take a chance to meet their</p>
      <p style={{color:"white", fontSize:"20px"}}>Representatives</p>
      <Link to="/">Login page</Link>
    </div>
    
  )
}

export default HomePage
