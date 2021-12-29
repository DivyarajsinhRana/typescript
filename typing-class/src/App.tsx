import Counter from "./component/class/Counter"
import './App.css'
import Private from "./component/class/Auth/Private"
import Profile from "./component/class/Auth/Profile"
import List from "./component/class/Auth/Generic/List"
const App = () => {
  return (
    <div className="App">
      {/* <Counter message="The value of count is"/> */}
      {/* <Private isLoggedin={false} component={Profile} /> */}
      <List items={[ {
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
 }]} handleClick={(item)=>console.log(item)} />

    </div>
  )
}

export default App
