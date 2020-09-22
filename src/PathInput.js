import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import jp from 'jsonpath';
import './pathInput.css';

const mapStateToProps = (state) => {
  return {
    tree: state
  };
};

const PathInput = ({dispatch, tree}) => {  
    
  const checkState = (e) => {   
    if (tree){
      document.getElementById("pathInput").removeAttribute("disabled");
    } else {
      document.getElementById("pathInput").value = "";      
      document.getElementById("pathInput").setAttribute("disabled", "disabled");
    }
  }
  
  useEffect(()=>{checkState()});  
  
  const fireDispatch = (e) => {    
    const pathValue = e.target.value.trim();
    let results;
    try{
      results = jp.query(tree, pathValue);        
      if (results.length > 0){
        dispatch({type: "SET_DATA_FROM_PATH_INPUT", data: results});
      }
    } catch {       
      dispatch({type: "RESET_DATA_WITH_BASE"});
    }      
  }
  
  return (
    <>
      <form>
        <div id="path-input">
          <input type = "text" id = "pathInput" placeholder = "type your expression here..." onInput = {fireDispatch} onKeyDown = {fireDispatch} disabled = "disabled" />
        </div>
      </form>
    </>
  );  
};

export default connect(mapStateToProps, null)(PathInput);