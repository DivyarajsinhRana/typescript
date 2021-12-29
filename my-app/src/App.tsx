import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Props/Greet';
import Person from './components/Props/Person';
import Personlist from './components/Props/Personlist';
import Status from './components/Props/Status';
import Heading from './components/Props/Heading';
import Oscar from './components/Props/Oscar';
import Button from './components/Props/Button';
import Input from './components/Props/Input';
import Container from './components/Props/Container';
import {UseState,User} from './components/Hook/UseState';
import Usereducer from './components/Hook/Usereducer';
import ThemeContextProvider from './components/Hook/context/ThemeContextProvider';
import Box from './components/Hook/context/Box';
import UserContextProvider from './components/Hook/context/UserContextProvider';
import UserData from './components/Hook/context/UserData';
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
      {/* <Greet name="Divyaraj"  age={21}  isLoggedIn={true} />
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
      <Container  styles={{border:"1px solid black",color:"green"}} /> */}
    {/* <UseState/>
    <User/> */}
    {/* <Usereducer /> */}
    {/* <ThemeContextProvider>
        <Box />
    </ThemeContextProvider> */}
    <UserContextProvider>
       <UserData/>
    </UserContextProvider>

    </div>
  );
}

export default App;
