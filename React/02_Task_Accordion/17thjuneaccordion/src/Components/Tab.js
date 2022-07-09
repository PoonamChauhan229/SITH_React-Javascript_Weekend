import React,{useState} from 'react'

export default function Tab({props,show,descClick,indexclick}) { 
  const [activeIndex,setactiveIndex]=useState("")
  
  console.log(show)

  function displayEach(){
  setactiveIndex(
    indexclick===0?true:false ||indexclick===1?true:false ||indexclick===2?true:false
   
    )

  }
  console.log(indexclick,activeIndex)
  console.log(activeIndex)
  
  
  return (
    <div>
        <div className='title' onClick={displayEach}>{props.title} </div>
      { show|| show===activeIndex?<div className='desc'>{props.desc}</div>:null}
     
    </div>
    
  )
}

// onClick={descClick}
