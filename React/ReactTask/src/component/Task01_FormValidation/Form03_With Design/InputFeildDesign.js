import React from 'react'

export default function InputFeildDesign(props) {

    const {label,type,name,value,error,id,onChange}=props
    return (

        <div class="mb-3">
                <label htmlFor={id} className="form-label">{label}</label>
                <input onChange={onChange}type={type} name={name} className="form-control" id={id} value={value}/>
                <div id="emailHelp" class="form-text">{error}</div>
            </div>

    )
}
