import React, { useState } from 'react'
import Tab from './Tab'

export default function DisplayAcc(props) {
 
const [activeIndex,setActiveIndex]=useState(-1)
const[expandall,setExpandall]=useState(false)
function expandAll(){
  setExpandall(!expandall)
}

console.log(expandall)

  return (
    
    
        
    <div className='accordion'>

      <button onClick={expandAll}>Expand All</button>
      {/* <button onClick={collapseAll}>Collapse All</button> */}
      {

        data.map((data,i)=>{
          // console.log("map", activeIndex, i)
          return (
            <Tab
              data={data}
              index={i}
              tabActiveHandler={(index)=>{
                console.log(index, activeIndex)
                setActiveIndex(activeIndex===index ? -1 : index)
               
              }}
              isActive={activeIndex===i}
            />
        )})
      }
      
    </div>
  )
}

const data = [
  {
      question: "Lorem ipsum dolor sit amet?",
      answer:
          "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
  },
  {
      question: "Dignissimos sequi architecto?",
      answer:
          "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."
  },
  {
      question: "Voluptas praesentium facere?",
      answer:
          "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."
  }
]
