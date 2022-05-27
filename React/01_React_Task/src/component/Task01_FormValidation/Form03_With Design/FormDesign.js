import React, { useState } from 'react'
import InputFeildDesign from './InputFeildDesign'

export default function FormDesign() {
  const [formSubmit, setformSubmit] = useState(" ")
  function formSubmitHandler(e) {
    e.preventDefault();
    const formdata = new FormData(e.target)
    console.log(formdata.get('fname'))
    setformSubmit(`Fullname:${formdata.get('fname')}
                   ${formdata.get('lname')
                                  
                }
    `)
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
        <p>{formSubmit}</p>
      </div>
      <div>
        {formSubmit}
      </div>
    </div>
  )
}
