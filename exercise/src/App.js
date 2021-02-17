import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
      </Router>
    </div>
  );
}

export default App;
