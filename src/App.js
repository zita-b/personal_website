import Home from "./components/Home";
import Page from "./components/Page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Page />}/>
        </Routes>
    </Router>
  );
}

export default App;
