import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact'
import Header from './components/layout/Header'
import About from './components/pages/About'
import { Provider } from './context';
import NotFound from './components/pages/NotFound';

const App = () => {

  return (
    <Provider>
        <div className="App">
        <Header branding='Contact Manager App' />
        <div className='container'>
        <Routes>
          <Route path='/' element= {<Contacts/>} exact/>
          <Route path='/contact/add' element={<AddContact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>  
        </div>
    </Provider>
  );
}

export default App;
