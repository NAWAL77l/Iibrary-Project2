import React from 'react'
import '../styles/LoginPage.css'
import TcraetAcount from '../inc/TcraetAcount'
import Buttons from '../inc/Buttons'
import Buttons1 from '../inc/Buttons1'
import Buttons2 from '../inc/Buttons2.js'
import Logo from '../inc/Logo.js'


const LoginPage = () => {
  return (
<div className='frame'>
    <div className='container'>  
    
      <TcraetAcount/>
      <Buttons/>
      <Buttons1/>
      <Buttons2/>
      <Logo/>
    </div>
    </div>
   
   
  )
}
export default LoginPage
