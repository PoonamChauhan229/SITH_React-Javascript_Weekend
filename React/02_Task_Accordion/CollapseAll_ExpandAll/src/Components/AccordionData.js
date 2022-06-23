import React, { useState } from 'react'

// 9:25
export default function AccordionData(props) {
const [selected,setSelected]=useState(null)
const [newclass,setnewClass]=useState(null)
    function collapse1(index){
        if(selected==index){
            console.log("hi")
            return setSelected(null)
        }
        setSelected(index)
    }

    
  return (
    <div className='wrapper'>
        <div className='accordion'>
            {
                data.map((item,index)=>(
                    <div className='item'>
                        <div className={selected==index?"active title":"unactive title"} onClick={()=>collapse1(index)}>
                            <h2>{item.question}</h2>
                            <span>{selected==index?"-":"+"}</span>
                        </div>

                        <div className={selected==index?"active content show":" unactive content"}>{item.answer}</div>
                    </div>
                ))
            }
        </div>
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
