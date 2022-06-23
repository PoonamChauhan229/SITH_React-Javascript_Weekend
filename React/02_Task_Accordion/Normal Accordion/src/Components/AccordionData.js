import React, { useState } from 'react'

export default function AccordionData(props) {
    const[displayStyle,setdisplayStyle]=useState({display:"none"})
    function showHide(){
        console.log("show")
        if(displayStyle.display==="none"){
            setdisplayStyle({
                display:"block"
            })
        }
        else{
            setdisplayStyle({
                display:"none"
            })
        }
        
    }
   
  return (
    <div>
       
        <div className='title' onClick={showHide}>{props.titleName}</div>
        <div className='subbody' style={displayStyle}>{props.bodyName}</div>

    </div>
  )
}
