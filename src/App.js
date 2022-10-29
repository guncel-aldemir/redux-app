import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Detail from "./pages/detail/Detail";
import Home from "./pages/Home";
import Quotes from "./pages/quotes/Quotes";
function App() {
 return( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/char/:char_id" element={<Detail/>}/>
      <Route path="/quotes" element={<Quotes/>}/>
    </Routes>
  </BrowserRouter>
 )
}

export default App;
