import './App.css';
// 2.1
import Navbar from './components/Navbar';
// 1
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
      return (
            <div className="App">
                  {/* 1.1 All Route,r,s*/}
                  <Router>
                        {/* 2.2 Navbar */}
                        <Navbar />
                        <Routes>
                              <Route path="/" />
                              <Route path="/products" />
                              <Route path="/contact" />
                              <Route path="/about" />
                        </Routes>
                  </Router>

            </div>
      );
}

export default App;
