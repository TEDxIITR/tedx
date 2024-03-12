

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from '../assets/tedx.png'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  function getData(event) {
    let data = event.target.value;
    setData(data);

    if (data === "TEX4RE8") {
      setVisible(true);
      setDisplay(false);
    } else if (data === "TOL2ER6") {
      setDisplay(true);
      setVisible(false);
    } else {
      setVisible(false);
      setDisplay(false);
    }
  }

  const menuItems = ["PREVIOUS EVENTS", "SPEAKERS", "TEAM", "ABOUT US"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar" style={{ margin: "0" }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden icon"
        />
        <NavbarBrand>
          <div className="logo__container">
            <Link color="foreground" to="/">
              <img src={logo} alt='tedx' />
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="links" justify="center">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "16px" }}>
          <NavbarItem className="nav__link">
            <Link color="foreground" to="/">
              PREVIOUS EVENTS
            </Link>
          </NavbarItem>
          <NavbarItem className="nav__link">
            <Link color="foreground" to="/shop">
              SPEAKERS
            </Link>
          </NavbarItem>
          <NavbarItem className="nav__link">
            <Link color="foreground" to="/cart">
              TEAM
            </Link>
          </NavbarItem>
          <NavbarItem className="nav__link">
            <Link color="foreground" to="/cart">
              ABOUT US
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <div>
      <button onClick={toggleModal} className="register__button">
        REGISTER
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <label htmlFor="text" style={{color:'white' , fontSize:'1.25rem'}}>Have a Coupon?</label>
          <Input type="text" placeholder="Coupon Code" variant="flat" size="lg" onChange={getData} style={{ caretColor: "black" }} />
                      {visible ? <p style={{color:'white'}}>Yay! you got 100Rs Off</p> : null}
                      {display ? <p style={{color:'white'}}>Yay! you got 200Rs Off</p> : null}
                      {visible ? (
                        <a href="https://rzp.io/l/St68FMP7P">
                          <Button className="register__button">Pay</Button>
                        </a>
                      ) : display ? (
                        <a href="https://rzp.io/l/VO7158w">
                          <Button className="register__button">Pay</Button>
                        </a>
                      ) : (
                        <a href="https://rzp.io/l/H0jMjBi7">
                          <Button className="register__button">Pay</Button>
                        </a>
                      )}
            <button className="close-modal" onClick={toggleModal} style={{color:'white'}}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
          
      <NavbarMenu className="dropdown__menu" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              style={{ color: "white" }}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Outlet />
    </Navbar>
  );
}

