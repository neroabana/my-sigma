import React, {useEffect} from 'react';
import './banner.css';

const Banner = () => {  
  useEffect(()=>{
    document.getElementById("menu-link").addEventListener("click", show);            
    function show(){
      document.getElementById("drop-down").classList.toggle("hide-menu");
    }           
    const x = window.matchMedia("(max-width: 600px)");            
    function myFunc(x){
      if(x.matches){
        document.getElementById("drop-down").classList.add("hide-menu");    
      }
    }           
              
    myFunc(x);
    x.addListener(myFunc);
           
    window.onclick = (e) => {
      if (!e.target.matches("#menu-link")){                    
        document.getElementById("drop-down").classList.add("hide-menu");
      }
    }    
  });
  
  return (
    <>
      <div className = "bar">   
            <div className="logo"><span id="main-logo">My-Sigma</span><br /><span id ="logo-byline">Testing JSONPath</span></div>
            <ul className = "bar-menu" style = {{alignSelf: "flex-start"}}>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div id="mobile-menu">            
                <span id="icon" className="menu-icon"><a href="#.#" id="menu-link">&#9776;</a></span>
                <div id="drop-down" className="hide-menu">
                    <ul className="drop-menu">
                        <p>My-Sigma Test</p>
                    </ul>
                </div>
            </div>
        </div>        
    </>
  );
};

export default Banner;