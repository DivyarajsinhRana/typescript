import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import Personlist from './components/Personlist';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
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
      <Greet name="Divyaraj" /* age={21} */ isLoggedIn={true} />
      <Person  name={person}/>
      <Personlist  names={namelist}/>
      <Status status='error' />
      <Heading>some placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Divyarajsinh Rana</Heading>
      </Oscar>
      <Button  handleClick={(e,id)=>{
         console.log("button clicked",e,id)
      }} />
      <Input value='' handleChange={(e)=>console.log(e)} /> 
      <Container  styles={{border:"1px solid black",color:"green"}} />
    </div>
  );
}

export default App;
