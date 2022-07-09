import React,{useState} from 'react'
import Button from './Button'
import Tab from './Tab'

export default function Accordion({show,descClick}) {
  
    const data=[
        {title:"titleabc",desc:"descabc"},
        {title:"titledef",desc:"descdef"},
        {title:"titleghi",desc:"descghi"}
    ]


  return (
    <div>
            {data.map((element,index)=>(
                <Tab key={index}  props={element} show={show} descClick={descClick}
                indexclick={index}
                />
                
                ))
        }
{/*descClick={descClick} */}
    </div>
  )
}
