import React, { useState } from 'react'
import InputFeildDesign from './InputFeildDesign'

export default function FormDesign() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")
  
  function changeHandler(){

  }
  function fnamechangeHandler(e) {
    console.log(e.target.value)
   
    setFname(e.target.value)
    if(e.target.value.length<5){
      setError("First name is too small")
    }
    else{
      setError("")
    }
  }

  function lnamechangeHandler(e) {
    console.log(e.target.value)
    setLname(e.target.value)
    if(e.target.value.length<5){
      setError("Last name is too small")
    }
    else{
      setError("")
    }
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(fname)
  console.log(lname)
    

  }
  
  return (


    <div>

      <form style={{ width: "40%" }} className='container border'>
        <h5 className='text-decoration-underline text-secondary mb-4'>Registration Form:</h5>

        <InputFeildDesign
          label="FirstName:"
          type="text"
          name="fname"
          id="fname"
          onChange={fnamechangeHandler}
          value={fname}
          error={error}
        />

        <InputFeildDesign
          label="LastName:"
          type="text"
          name="lname"
          id="lname"
          onChange={lnamechangeHandler}
          value={lname}
        />

        <InputFeildDesign
          label="EmailId:"
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={email}
        />

        <InputFeildDesign
          label="Password:"
          type="password"
          name="password"
          id="password"
          onChange={changeHandler}
          value={password}
        />


        <InputFeildDesign
          label="Mobile Number:"
          type="tel"
          name="tel"
          id="tel"
          onChange={changeHandler}
          value={phone}
        />
        <button type="submit" onClick={submitHandler}className="btn btn-primary" >Submit</button>
      </form>
    <p>{fname} {lname}</p>
    {/* <p>{formvalue}</p> */}
    </div>
    
  )
}
