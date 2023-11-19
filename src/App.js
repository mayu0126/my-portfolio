import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main'

function App() {
  return (
    <div className="bg-slate-100">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
