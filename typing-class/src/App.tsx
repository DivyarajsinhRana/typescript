import Counter from "./component/class/Counter"
import './App.css'
import Private from "./component/class/Auth/Private"
import Profile from "./component/class/Auth/Profile"
const App = () => {
  return (
    <div className="App">
      {/* <Counter message="The value of count is"/> */}
      <Private isLoggedin={false} component={Profile} />
    </div>
  )
}

export default App
