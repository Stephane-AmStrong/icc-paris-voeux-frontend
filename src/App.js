import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MyWishes from "./pages/MyWishes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="wish" element={<MyWishes />} /> */}
          <Route path="my-wishes/:id" element={<MyWishes />} />
          {/* <Route path="success/:id" element={<Success />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
