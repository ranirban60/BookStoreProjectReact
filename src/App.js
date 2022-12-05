import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Book from "./Pages/Book";
import Cart from "./Pages/Cart";

import LoginPage from './Pages/LoginPage';
import Order from "./Pages/Order";
import RegisterPage from './Pages/RegisterPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={< LoginPage />}></Route>
          <Route exact path='/register' element={< RegisterPage />}></Route>
          <Route exact path='/cart' element={< Cart />}></Route>
          <Route exact path='/book' element={< Book />}></Route>
          <Route exact path='/order' element={< Order />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
