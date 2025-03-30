import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ react-router-dom에서 Link 가져오기

function NavbarComponents() {
  return (
    <>
      <div>
        <Navbar bg="light" data-bs-theme="light" className="navbar-top">
          <Container className="d-flex justify-content-end navbar-top">
            <Nav>
              <Nav.Link as={Link} to="/a">고객센터</Nav.Link>
              <Nav.Link as={Link} to="/b">마이페이지</Nav.Link>
              <Nav.Link as={Link} to="/c">로그인</Nav.Link>
            </Nav>
          </Container>
        </Navbar> 
        
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand as={Link} to="/home"><img src="./Logo.jpg" style={{width:"150px"}} /></Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponents;
