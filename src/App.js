import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
