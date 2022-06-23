import React from 'react'
import AccordionData from './AccordionData'

export default function DisplayAcc() {
  function collapse(){
    
}
  return (

    
    <div className='accordion'>
      <button type="button" onClick={collapse}>Collapse All</button>
        <AccordionData titleName="What is React?"
       bodyName ="React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started"
        />
          <AccordionData titleName="What is JavaScript?"
       bodyName ="JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."
        />
    </div>
  )
}
