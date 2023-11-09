// import logo from './logo.svg';
import Nav from './compo/Nav';
import './App.css';
import Navbar from './compo/Navbar';
import Home from './compo/Home';
import HomeCarousel from './compo/HomeCarousel';
import React, { useState, useEffect } from 'react';
import TimeTrail from './compo/TimeTrial'
function App() {
    const [count, setCount] = useState(0); 
    const [navcolor, setnavcolor] = useState('bg-transparent')
    useEffect(() => { 
        //Implementing the setInterval method 
        const interval = setInterval(() => { 
            if(count<5)
              setCount(count + 1);
            else
              setCount(0);
        }, 1000); 
        
        //Clearing the interval 
        return () => clearInterval(interval); 
    }, [count]);
    useEffect(()=>{
      window.addEventListener('scroll', changecolor());
    })
    const changecolor = () =>{
        if (window.scrollY >= 100) {
          setnavcolor('bg-orange-200');
        } else {
          setnavcolor('bg-transparent');
        }
    }
  return (
    <div className="App">
        {/* <p className='text-9xl text-orange-600'>hello</p> */}
        {/* <Navbar/> */}
        <Nav navcolor={navcolor}/>
        <HomeCarousel count={count}/>
        
        <br/>
        <br/>
        <TimeTrail />
        <br/>
    </div>
  );
}

export default App;
