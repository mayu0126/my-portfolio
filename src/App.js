import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="bg-slate-950">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
