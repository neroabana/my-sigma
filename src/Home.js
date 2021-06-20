

import React from 'react';


import Uploader from './Uploader';
import PathInput from './PathInput';
import TreeView from './TreeView';
import Banner from './Banner';
import './home.css';

const Home = () => { 
  return (
    <>
      <div id = "wrapper">  
        <div id = "banner">
          <Banner />
        </div>
        <div id = "uploader">
          <Uploader />
        </div>        
        <div id = "path-input">
          <PathInput />
        </div>
        <div id = "tree-view">
          <TreeView /> 
        </div>
      </div>  
    </>
  );  
};

export default Home;