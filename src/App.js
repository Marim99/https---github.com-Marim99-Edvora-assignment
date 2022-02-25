import "./App.css";
import { getUser } from "./RidesAPI";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./component/Home";
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);

  return (
    <Router>
      <Nav user={user} />
      <Home user={user} />
    </Router>
  );
}

export default App;
