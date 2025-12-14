import Login from "./components/Login";
import UserList from "./components/UserList"; 
import { useSelector } from "react-redux";

function App() {

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
      {user ? <UserList /> : <Login />}
    </div>
  );
}

export default App;
