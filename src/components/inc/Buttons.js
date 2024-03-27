import React from 'react'

const Buttons = () => {
  return (
    <div className=" inputs two buttons">

        <div className=" input user name">

          <input type="user name" placeholder="اسم المستخدم " dir='rtl'/>
        </div>

        <div className=" input password">

          <input type="password" placeholder=" كلمة المرور " dir='rtl'/>
          

        </div>
        <div className="forgot-password"> نسيت  كلمة المرور؟ <span>حياك استرجعها </span> </div>
      </div>
      
  )
}

export default Buttons
