import LandingPage from "./components/LandingPage";
import {Switch, Route} from "react-router-dom"
import Room from "./components/Room";
import ChatPage from "./components/ChatPage";
import { useSelector} from 'react-redux'
function App() {
  const {user} = useSelector(state => state.user)
  return (
    <div>
    <Switch>
    {user.name ?
      <>
        <Route exact path="/rooms" component={Room}/>
        <Route path="/rooms/:roomId" component={ChatPage}/>
      </>
    :
    <LandingPage />}
    
    </Switch>
    </div>
  );
}

export default App;
