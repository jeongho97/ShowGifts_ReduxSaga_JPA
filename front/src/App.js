import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Paper from "./components/Paper/Paper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/paper" element={<Paper></Paper>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
