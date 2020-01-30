import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Landing from './components/landing'
import Contact from './components/contact'

const App = () => {

  const [typesCards, settypesCards] = useState([
    {
      name: 'Medical Consultation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequatur? Laboriosam consectetur delectus soluta quaerat nam placeat.',
      action:(
        <button></button>
      )
    }
  ])

  return (
      <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
       
          <Route path="/contact" component={Contact}/>
          
      
        </Switch>
      </Router>
  );
};

export default App;