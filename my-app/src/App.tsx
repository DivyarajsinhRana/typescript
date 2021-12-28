import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
function App() {
  const person ={
    fn : "Divyarajsinh",
    ln : "Rana"
  };
  return (
    <div className="App">
      <Greet name="Divyaraj" age={21} isLoggedIn={true} />
      <Person  name={person}/>
    </div>
  );
}

export default App;
