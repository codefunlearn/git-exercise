import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import MovieProvider from "./contexts/MovieContext";
import About from "./pages/About";
import Home from "./pages/Home";
import MovieForm from "./pages/MovieForm";

function App() {
  return (
    <div className="App">
      <Router>
        <MovieProvider>
          <Navbar />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/add-movie" component={MovieForm}></Route>
        </MovieProvider>
      </Router>
    </div>
  );
}

export default App;
