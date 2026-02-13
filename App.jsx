import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductCard'; 
import Books1 from './Books';            
import PersonHierarchy from './ClassHeirarchy'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-logo">Rakshak Gupta - Exp 3 Portfolio</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Exp 3.1</Link>
            <Link to="/library">Exp 3.2</Link>
            <Link to="/classes">Exp 3.3</Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={
              <div className="home-dash">
                <h1>Welcome to my React Portfolio</h1>
                <p>Select an experiment from the menu above to view the implementation.</p>
                <div className="info-box">
                  <p><strong>Student Name:</strong> Rakshak Gupta</p>
                  <p><strong>Course:</strong> Full Stack Development-I</p>
                </div>
              </div>
            } />
            <Route path="/products" element={<ProductList />} />
            <Route path="/library" element={<Books1 />} />
            <Route path="/classes" element={<PersonHierarchy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;