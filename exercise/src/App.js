import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* 
          <Route path="/"></Route>
          <Route path="/about"></Route> */}
      </Router>
    </div>
  );
}

export default App;
