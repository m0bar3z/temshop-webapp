import React from "react";
import { Main } from './components/main/main'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={
          <main>
            <p>صفحه مورد نظر پیدا نشد</p>
          </main>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
