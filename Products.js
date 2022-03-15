import '../../App.css';
import React, { useState } from 'react';


function Home() {

  const [count, setCount] = useState(1)
  
  function decrementCount() {
  setCount(prevCount => prevCount - 1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  
  
  }
    return (
      <>
  <button onClick={decrementCount}> - </button> 
  <span>{count} Ticket/s </span>
  <button onClick={incrementCount}> + </button>              
      </>
    );
  }




export default Home;

