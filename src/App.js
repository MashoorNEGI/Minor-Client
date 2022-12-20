import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import { Navigate } from "react-router-dom";
import Table from "./Pages/Table"
import Cards from "./Pages/Cards";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Admin from "./Pages/Admin";
function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {user ? <Route path="/attendance-data" element={<Table />} /> : <Route path="/attendance-data" element={<Navigate replace to="/" />} />}
          {user && <Route path="/cards" element={<Cards />} />}
          <Route path="/attendance-data" element={<Navigate replace to="/" />} />
          <Route path="/cards" element={<Navigate replace to="/" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path={"*" || "/*"} element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
