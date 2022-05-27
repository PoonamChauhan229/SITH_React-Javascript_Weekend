
import './App.css';
import DisplayForm from './component/Task01_FormValidation/Form02_Raw_InClass/DisplayForm';
import DisplayFormDesign from './component/Task01_FormValidation/Form03_With Design/DisplayFormDesign';
function App() {
  return (
    <div className="App">

      <div className='border border-primary'>
        <h4>Normal Display without Design</h4>
        <DisplayForm />
      </div>
      <div className='border border-success'>
        <h4>Display with Design</h4>
        <DisplayFormDesign />
      </div>




    </div>
  );
}

export default App;
