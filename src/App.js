import React, {useState, useEffect} from 'react';


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

  const [typesCards, settypesCards] = useState('')
  const [datos, setdatos] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    type: '' 
  })

  useEffect(() => {
    setdatos({...datos, type: typesCards})
  }, [typesCards])

  function handleChange(event, values, setdatos) {
    / The handle change function works with 3 variables, firts: with the event, wich what i use to obtain de name of the input and his value, second: the actual values of the state, and third: the function wich set the state perse /
    
    setdatos({ ...values, [event.target.name]: event.target.value })
    }


  return (
    
      <Router>
      
        <Switch>
        
        <Route exact path="/" >
          <Landing  typesCards={typesCards} settypesCards={settypesCards} />  
        </Route> 



        
          <Route path="/contact" component={Contact}>
            <Contact typesCards={typesCards} datos={datos} setdatos={setdatos} settypesCards={settypesCards} />
            </Route> 


            <Route >
          <Landing  typesCards={typesCards} settypesCards={settypesCards} />  
        </Route>     
          
      
        </Switch>
        
      </Router>
      
  );
};

export default App;