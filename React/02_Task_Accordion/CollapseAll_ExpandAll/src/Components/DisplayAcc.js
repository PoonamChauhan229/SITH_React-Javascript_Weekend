import React, { useState } from 'react'
import AccordionData from './AccordionData'

export default function DisplayAcc() {
  const [expand,setExpand]=useState(null)
  const[collapse,setCollapse]=useState(null)
  function expandAll(){
      setExpand("active")
  }

  function collapseAll(){
    setCollapse("active")
      
  }
  return (
    
    
    <div className='accordion'>
      <button onClick={expandAll}>Expand All</button>
      <button onClick={collapseAll}>Collapse All</button>
        <AccordionData />
          
    </div>
  )
}
