import { Routes,Route, Link, BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Additemform from './Components/Additemform';
import Navbar from './Components/Navbar';
import Homeform from './Components/Homeform';
import Edititemform from './Components/Edititemform';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Homeform/>}/>
         <Route path='/Additemform' element={<Additemform/>}/>
         <Route path='/Edititemform/:id' element={<Edititemform/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
