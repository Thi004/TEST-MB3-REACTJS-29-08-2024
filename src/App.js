
import './App.css';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Routes>
          <Route element={<Home/>} path={'home'}></Route>
          <Route element={<Create/>} path={'create'}></Route>
          <Route element={<Update/>} path={'update/:id'}></Route>
          <Route element={<Detail/>} path={'detail/:x'}></Route>
      </Routes>
    </>
  );
}

export default App;
