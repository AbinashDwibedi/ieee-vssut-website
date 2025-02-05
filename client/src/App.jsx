import { useState, useEffect } from 'react';

import Induction from './Pages/Induction';
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePosition({
  //       x: event.clientX,
  //       y: event.clientY
  //     });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Home/>
      }/>
      
      <Route path='/induction' element={<Induction/>}/>
    </Routes>
    </BrowserRouter>
      
      {/* <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div> */}
    </>
  );
}

export default App;
