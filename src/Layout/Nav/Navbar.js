import React, { useState } from "react";
import '../Nav/Navbar.css'

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image, NavLink } from "react-bootstrap";



export default function NavbarMain() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  // const navigate = useNavigate();
  return (
    <div
      className={
        colorChange
          ? "Navbar_Main Navbar_Main_con_scroll"
          : "Navbar_Main Navbar_Main_con"
      }

      id="nav"
    >
      <Container className="Hole_Nav_Main" fluid>
        <Navbar bg="none" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <>
                {
                  <Image
                    src={require("../../assets/Images/Navlogo.png")}
                    width="200"
                  />
                }
              </>
            </Navbar.Brand>
            <Navbar.Toggle className="tog" />
            <Navbar.Collapse className="nav_col ">
              <Nav className=" mx-auto my-2 my-lg-0 nav_con">
                <NavLink
                  to="/"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Adminidtration
                </NavLink>

                <NavLink
                  to="/product"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Faculty
                </NavLink>
                <NavLink
                  to="/service"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Photo Gallery
                </NavLink>
                <NavLink
                  to="/service"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Bookmarks
                </NavLink>
                <NavLink
                  href="#contact"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Contact
                </NavLink>
                {/* <Link
                  to="/contact"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Contact
                </Link> */}
              </Nav>
              <Form className="d-flex">
                <NavLink href="#contact">
                  <button className="Nav_Btn">Contact </button>
                </NavLink>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
