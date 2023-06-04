import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
