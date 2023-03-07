import { Navbar, Nav } from "react-bootstrap";
import "./ResponsiveNavBar.css";

export default function ResponsiveNavBar() {
  return (
    <>
      <div>ResponsiveNavBar</div>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar-custom"
      >
        <Navbar.Brand href="#">Brand Name</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
