import Counter from "./component/class/Counter"
import './App.css'
import Private from "./component/class/Auth/Private"
import Profile from "./component/class/Auth/Profile"
import List from "./component/class/Auth/Generic/List"
import RandomNumber from "./component/class/Restriction/RandomNumber"
import Toast from "./component/TemplateLiteral/Toast"
import Button from "./component/HTML/Button"
import Input from "./component/HTML/Input"
const data = [{
  id :1,
  first : "premraj",
  last :"jadav"
},
{
id :2,
first : "dhaval",
last :"raj"
},
{
id :3,
first : "hardik",
last :"rana"
}
]
const App = () => {
  return (
    <div className="App">
      {/* <Counter message="The value of count is"/> */}
      {/* <Private isLoggedin={false} component={Profile} /> */}
      {/* <List items={data} handleClick={(item)=>console.log(item)} /> */}
      {/* <RandomNumber value={11}  isPositive /> */}
      {/* <Toast  position="center"/> */}
      <Button variant="primary" onClick={()=> console.log("Hello world")} > primary button</Button>
      <Input onChange = {(e)=>console.log(e.target.value)}/>
    </div>
  )
}

export default App
