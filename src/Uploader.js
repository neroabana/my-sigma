import React, {useState} from 'react';
import {connect} from 'react-redux';
import './uploader.css'

const Uploader = ({dispatch}) => {  
  const [valid, setValid] = useState(false);  
  const handleSubmit = (e) => {
    e.preventDefault();    
    let file = e.target.uploadedFile.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {       
      let result;
      try {
        result = JSON.parse(reader.result);        
        setValid(false);
      } catch {setValid(true); file = null}
      dispatch({type: "SET_DATA_FROM_UPLOADER", data: result});      
    };       
  };
  
  const handleChange = (e) => {
    let loadedFile = document.getElementById("file");    
    if (loadedFile.files.length > 0){      
      document.getElementById("submit").removeAttribute("disabled");
    }     
  }
  
  return (
    <>
      <div className = "uploader">
        <form onSubmit = {handleSubmit} >
        <fieldset><legend>Upload a Json File</legend>
          <input type = "file" accept = ".txt, .js" id = "file" name = "uploadedFile" onChange = {handleChange} />
        </fieldset>          
          <div id="submitter">
            <button type = "submit" id = "submit" disabled>Upload File</button>  
            {valid && <span className = "input_status">Invalid Input</span>}
          </div>                
        </form>        
        <p id = "jsonText"></p>
      </div>      
    </>
  );
};

export default connect(null,null)(Uploader);