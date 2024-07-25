import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import style from './Components/Textform.module.css'

function App() {
  return (
    <>
    <Navbar/>

      <Textform heading="Enter the text here to Analyze"/>
    
    </>
  );
}

export default App;
