import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home";
import Main from "./pages/mainpage/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
