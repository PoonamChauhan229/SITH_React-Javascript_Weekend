import React from 'react'


export default function Tab(props) {
  
    // const [isOpen,setisOpen]=useState(props.isActive)
    // console.log(props.isActive)
    // // function titlehandler(){
    // //     console.log(props.isActive)
    // //     console.log(isOpen)
    // //     setisOpen(!isOpen)
    // // }    
     
        
      return (
        <div>
            <div 
                className='title' 
                onClick={
                    ()=>props.tabActiveHandler(props.index)
                }
            >{props.data.question}</div>
            
            {props.isActive && <div className='content'>{props.data.answer}</div>}
        </div>
       
    )
    
}



