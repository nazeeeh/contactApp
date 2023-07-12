import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
    <Header branding='Contact Manager App' />
    <div className='container'>
    <Contact name = 'Jato Joseph' 
      email = 'jato.joseph@thermolinks.ng' 
      phone = '09034567890'/>

      <Contact name = 'Sadiq Umar' 
      email = 'sadiq.umar@thermolinks.ng' 
      phone = '08143235467'/>
    </div>  
     
    </div>
  );
}

export default App;
