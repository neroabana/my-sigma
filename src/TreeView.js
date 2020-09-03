import React from 'react';
import {connect} from 'react-redux';
import ReactJson from 'react-json-view';
import './treeView.css';

const mapStateToProps = (state) => {
  return {
    tree: state
  }
};

const TreeView = ({tree}) => {
  return (
    <>    
      <div id = "tree">        
        {!tree && <p id="notice">Please Upload a valid Json file...</p>}
        {tree && <ReactJson src = {tree} name = {null} displayDataTypes = {false} displayObjectSize = {false} enableClipboard = {false} indentWidth = {2} style = {{fontFamily:"calibri"}} iconStyle = {"square"} />}  
      </div>      
    </>
  );  
};

export default connect(mapStateToProps,null)(TreeView);