//import '../src/assets/Icons/fontawesome/css/.all.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/pages/LoginPage';
import ForPass from './components/pages/ForPass';
//import './bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/ForPass' element={<ForPass />} />

    </Routes>
  </BrowserRouter>

      
    </div>
  );
}
export default App;
