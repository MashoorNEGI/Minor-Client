import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import Table from "./Pages/Table"
import Cards from "./Pages/Cards";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
function App() {
  return (
    
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/attendance-data" element={<Table />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path={"*" || "/*"} element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
