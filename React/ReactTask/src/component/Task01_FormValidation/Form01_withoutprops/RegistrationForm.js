import React, { useState } from 'react'

export default function RegistrationForm() {

    const [inputValue,setInputValue]=useState({
        name:"",
        email:"",
        phone:""
    })
    function handleChange(e){
        setInputValue({ ...inputValue,
            [e.target.name]:[e.target.value]}
        )
        console.log(e.target.value)
    }
    function handleSubmit(e){
         console.log(inputValue)
    }
    console.log(inputValue)
  return (
    <div>
        <h3>Registration Form-<p>Without Props</p></h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={inputValue.name} onChange={handleChange}/><br/>
            <input type="text" name="email" value={inputValue.email} onChange={handleChange}/><br/>
            <input type="phone" name="phone"value={inputValue.phone} onChange={handleChange}/><br/>
            <button>Submit</button>
        </form>
    
    <hr/>



    </div>
  )
}
