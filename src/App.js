import React from "react";
import { Main } from './components/main/main'
import { PrivateRoute } from "./components/privateRoute";
import { CustomerPanel } from "./components/main/customerPanel";

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
        <Route path="/customer" element={<PrivateRoute />} >
          <Route  path="panel" element={<CustomerPanel />} />
        </Route>
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
