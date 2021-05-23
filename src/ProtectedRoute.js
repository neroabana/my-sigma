import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({path, component, authenticated}) => {
 
 return authenticated ? <Route path={path} component = {component} /> : <Redirect to = {`/`} /> 

};

export default ProtectedRoute;