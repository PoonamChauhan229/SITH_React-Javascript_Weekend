import React, { useState } from 'react'
import InputFeild from './InputFeild'

export default function DisplayForm() {
    const [formSubmit,setformSubmit]=useState(" ");
    const formSubmitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        console.log(formData.get('fname'))
        console.log(formData.get('email'))        
        setformSubmit(`Entered Details are:${formData.get('fname')} and ${formData.get('email')}`)
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
            <InputFeild
                label="UserName:"
                type="text"
                name="fname"
                id="fname"
            // onChange="textChangeHandler"
            />

            <InputFeild
                label="EmailId:"
                type="email"
                name="email"
                id="email"
            // onChange="textChangeHandler"             
            />
            <button value="submit">SUBMIT</button>
            </form>
            <p style={{fontSize:"30px"}}>{formSubmit}</p>                       
        </div>
    )
}
