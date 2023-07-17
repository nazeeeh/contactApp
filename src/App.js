import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header'
import { Provider } from './context';

const App = () => {

  return (
    <Provider>
      <div className="App">
      <Header branding='Contact Manager App' />
      <div className='container'>
        <Contacts />
      </div>  
      </div>
    </Provider>
    
  );
}

export default App;
