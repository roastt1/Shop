import NavbarComponents from "../components/NavbarComponents";
import Gate from "../components/Gate";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Gate />
      <Outlet /> {/* 여기에 각 페이지가 렌더링됨 */}
    </>
  );
}

export default MainLayout;
