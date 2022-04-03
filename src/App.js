import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Products from './features/Products';
import Detail from './components/Detail';
import Contact from './features/Contact';
// import Footer from './components/Footer';
import Wish from './features/Wish';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <HashRouter> 
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Products />}/>    
            <Route path='/:id' element={<Detail />}/>  
          <Route path='/contact' element={<Contact />}/>   
          <Route path='/wishlist' element={<Wish />}/> 
          <Route path='*' element={<Contact />}/>
        </Routes>    
        {/* <Footer />  */}
      </div>
    </HashRouter>
  );
}

export default App;
