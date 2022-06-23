import React ,{ useState }from 'react';
import './App.css';
import Button from './Components/Button';
import Accordion from './Components/Accordion';
function App(props) {
  const [show,setShow]=useState(false)
  function expandButton(){
    setShow(true)
    console.log(show)
  }
  console.log(show)

  function collapseButton(){
    setShow(false)
    console.log(show)
  }

  // const[displayeach,setDisplayeach]=useState(false)

  function descDisplay(){
    setShow(!show)
  }
  
  return (
    <div className="App">    
    <Button collapseClick={collapseButton} expandClick={expandButton}/>
     <Accordion show={show} descClick={descDisplay} />
    </div>
  );
}
// descClick={descDisplay}
export default App;
