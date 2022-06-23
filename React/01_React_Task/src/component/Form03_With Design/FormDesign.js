import React, { useState } from 'react'
import InputFeildDesign from './InputFeildDesign'

export default function FormDesign() {
  const [formSubmit, setformSubmit] = useState(null)
  function formSubmitHandler(e) {
    e.preventDefault();
    const formdata = new FormData(e.target)
    console.log(formdata.get('fname'))
    setformSubmit(formdata)
  }
  return (
    <div className='d-flex'>
      <div className='border ms-5' style={{ width: "40%" }}>

        <form onSubmit={formSubmitHandler} >
          <h5 className='text-decoration-underline text-secondary mb-4'>Registration Form:</h5>

          <InputFeildDesign
            label="FirstName:"
            type="text"
            name="fname"
            id="fname"
          />

          <InputFeildDesign
            label="LastName:"
            type="text"
            name="lname"
            id="lname"
          />

          <InputFeildDesign
            label="EmailId:"
            type="email"
            name="email"
            id="email"
          />

          <InputFeildDesign
            label="Password:"
            type="password"
            name="password"
            id="password"
          />
          <InputFeildDesign
            label="Mobile Number:"
            type="tel"
            name="tel"
            id="tel"
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      {formSubmit && <div>
        {/* {formSubmit} */}
        <p>First Name : {formSubmit.get('fname')}</p>
        <p>Last Name : {formSubmit.get('lname')}</p>
        <p>Email : {formSubmit.get('email')}</p>
      </div>}
    </div>
  )
}
