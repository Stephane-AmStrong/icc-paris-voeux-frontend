import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MyWishes from "./pages/MyWishes";
import PDF from "./pages/PDF/PDF";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="my-wishes/:id" element={<MyWishes />} />
        </Route>

        <Route path="/print/:id" element={<PDF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
