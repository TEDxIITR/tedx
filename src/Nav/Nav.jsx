

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

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from '../assets/tedx.png'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);

  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

  const menuItems = [{
    name:'PREVIOUS EVENTS',
    link:'/previous'
  },{
    name:'TEAM',
    link:'/team'
  }
];

  return (
    <div>


    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar" >
      <NavbarContent style={{margin:'0'}}>
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
          <NavbarItem className="nav__link">
            <Link color="foreground" to="/previous" >
              PREVIOUS EVENTS
            </Link>
          </NavbarItem>
          
          <NavbarItem className="nav__link">
            <Link color="foreground" to="/team" >
              TEAM
            </Link>
          </NavbarItem>
      </NavbarContent>

      <div>
      <Link to='/register'>

      <button onClick={toggleModal} className="register__button" style={{marginLeft:'32px'}}>
         BUY TICKET
      </button>
      </Link>
    </div>
          
      <NavbarMenu className="dropdown__menu" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              style={{ color: "white" }}
              size="lg"
              to={item.link}
              onClick={toggleModal}
              >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Outlet />
    </Navbar>
  </div>
  );
}

