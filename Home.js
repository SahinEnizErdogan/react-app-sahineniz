import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
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
<span>{count}</span>
<button onClick={incrementCount}> + </button> 

      <HeroSection />
      <Cards />
      <Footer />
    
           
    </>
  );
}
export default Home;