import React,{useState} from 'react'

export default function Tab({props,show,descClick}) { 
  const [count,setCount]=useState(0)
  const[displayeach,setDisplayeach]=useState("")
  console.log(show)
  
 
  // function descDisplay(){
  //   setCount(count+1)

  //   if(count<2){
  //     setDisplayeach(true)
  //     setCount(count-1)
  //   }
  //   else{
  //     setDisplayeach("")
  //   }
  // }
  console.log(count)
  console.log(displayeach)
  return (
    <div>
        <div className='title' onClick={descClick}>{props.title} </div>
      { show  ?<div className='desc'>{props.desc}</div>:null}
     
    </div>
    
  )
}

// onClick={descClick}
