import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Gifts from "./components/Gifts/Gifts";
import Test from "./components/test/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gift" element={<Gifts></Gifts>}></Route>
        <Route path="/" element={<Test></Test>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
