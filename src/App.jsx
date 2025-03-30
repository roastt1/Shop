import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./routes/MainLayout";
import ProductList from "./routes/ProductList";
import Detail from "./routes/Detail";
import data from "../data";
import { useState } from "react";
import GetButton from "./components/getButton";
import Cart from "./routes/Cart";
import NavbarComponents from "./components/NavbarComponents";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <>
      {/* 모든 페이지에서 Navbar 유지 */}
      <NavbarComponents />

      <Routes>
        {/* MainLayout이 적용되는 페이지 (Gate 포함) */}
        <Route element={<MainLayout />}>
          <Route
            path="/home"
            element={
              <>
                <ProductList shoes={shoes} />
                <GetButton shoes={shoes} setShoes={setShoes} />
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        </Route>

        {/* Cart 페이지는 Gate 없이 렌더링 */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
