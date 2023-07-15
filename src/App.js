import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <Header branding='Contact Manager App' />
    <div className='container'>
      <Contacts />
    </div>  
    </div>
  );
}

export default App;
