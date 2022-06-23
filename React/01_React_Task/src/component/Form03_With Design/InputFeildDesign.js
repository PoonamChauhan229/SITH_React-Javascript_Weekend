import React, { useState } from 'react'

export default function InputFeildDesign(props) {

  const { label, type, name, id } = props
  const [inputValue, setInputvalue] = useState("")
  const [error, setError] = useState("")
  function changeHandler(e) {
    console.log(e.target.type)
    setInputvalue(e.target.value)
    if (e.target.type === "text") {
      if (e.target.value !== " " && e.target.value.length <= 5) {
        setError("Error: Feild is blank & Name is too Small")
      }
      else {
        setError("")
      }
    }
    if (e.target.type === "password") {
      if (e.target.value.length <= 5) {
        setError("Password is too weak")
      }
      else {
        setError("")
      }
    }
    if (e.target.type === "tel") {
      if (e.target.value.length != 10) {
        setError("Mobile no is incorrect")
      }
      else {
        setError(" ")
      }
    }
    if (e.target.type === "email") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) && e.target.value.length <= 15) {
        setError("Error: You have entered an invalid email address!")
      }
      else {
        setError(" ")
      }
    }
    // console.log(inputValue)
  }
  return (

    <div class="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input onBlur={changeHandler} onChange={changeHandler} type={type} name={name} className="form-control" id={id} value={inputValue} />
      <div id="emailHelp" class="form-text">{error}</div>
    </div>

  )
}
