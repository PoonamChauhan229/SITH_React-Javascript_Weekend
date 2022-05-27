import React,{useState} from 'react'


export default function InputFeild(props) {
    const {type,label,id,name}=props
    const [inputValue,setValue]=useState("")
    const [error,setError]=useState("")
    
    function textChangeHandler(e){
        console.log(e.target.type)
        // console.log(e.target.value)
        console.log(e.target.value.length)
        setValue(e.target.value)

        if(e.target.type==="email"){
            // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) && e.target.value.length<=15){
                setError("Error: You have entered an invalid email address!")
                
            }
            else{
                setError("")
            }
        }


        if(e.target.type==="text"){
            if(e.target.value!==" " && e.target.value.length<=8){
                setError("Error: Text Cant be blank and atleast should have 8 characters")
                
            }
            else{
                setError("")
            }
        }
        
    }
    console.log(inputValue)
    return (
    <div>
        <label>{label}</label>
        <input type={type}
        value={inputValue}
        onChange={textChangeHandler}
        onBlur={textChangeHandler}
        name={name}
        id={id}
        required
        />
        <p style={{color:"red"}}>{error}</p>
    </div>
  )
}
