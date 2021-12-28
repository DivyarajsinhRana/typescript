import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import Personlist from './components/Personlist';
function App() {
  const person ={
    fn : "Divyarajsinh",
    ln : "Rana"
  };
  const namelist = [
   {
    first : "premraj",
    last :"jadav"
 },
 {
  first : " dhaval",
  last :"raj"
 },
 {
  first : "hardik",
  last :"rana"
 }]

  return (
    <div className="App">
      <Greet name="Divyaraj" age={21} isLoggedIn={true} />
      <Person  name={person}/>
      <Personlist  names={namelist}/>
    </div>
  );
}

export default App;
