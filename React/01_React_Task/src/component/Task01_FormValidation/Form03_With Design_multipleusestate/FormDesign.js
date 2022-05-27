import React, { useState } from 'react'
import InputFeildDesign from './InputFeildDesign'

export default function FormDesign() {
  const [inputValue, setInputvalue] = useState("")
  const [email, setEmail] = useState("")
  function changeHandler(e) {
    console.log(e.target.value)
    setInputvalue(e.target.value)
  }
  console.log(inputValue)
  return (


    <div>

      <form style={{ width: "40%" }} className='container border'>
        <h5 className='text-decoration-underline text-secondary mb-4'>Registration Form:</h5>

        <InputFeildDesign
          label="FirstName:"
          type="text"
          name="fname"
          id="fname"
          onChange={changeHandler}
          value={inputValue}
        />

        <InputFeildDesign
          label="LastName:"
          type="text"
          name="lname"
          id="lname"
          onChange={changeHandler}
          value={email}
        />

        <InputFeildDesign
          label="EmailId:"
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={inputValue}
        />

        <InputFeildDesign
          label="Password:"
          type="password"
          name="password"
          id="password"
          onChange={changeHandler}
          value={inputValue}
        />


        <InputFeildDesign
          label="Mobile Number:"
          type="tel"
          name="tel"
          id="tel"
          onChange={changeHandler}
          value={inputValue}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
