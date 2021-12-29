import  { ComponentType } from 'react';
import Login from './Login';
import {profilePropsType} from './Profile'
type componentType = {
    isLoggedin : boolean,
    component : ComponentType<profilePropsType>
}
const Private = ({isLoggedin,component :Component} : componentType) => {
  if(isLoggedin){
      return <Component name="Divyaraj"/>
  }else {
      return <Login/>
  }
}

export default Private
