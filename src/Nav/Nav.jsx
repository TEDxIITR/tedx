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

  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleModal = () => {
    setModal(!modal);
  };

 
  const menuItems = [{
    name:'PREVIOUS EVENTS',
    link:'/previous'
  },{
    name:'TEAM',
    link:'/team'
  },
  {
    name:'CONTACT US',
    link:'/contact'
  }
];

  return (
    <div>


    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar" maxWidth="full" >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hide-on-large icon"
        />
        <NavbarBrand>
          <div className="logo__container">
            <Link color="foreground" to="/">
              <img src={logo} alt='tedx' />
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hide-on-small" justify="center">
          <NavbarItem >
            <Link color="foreground" to="/previous" >
              PREVIOUS EVENTS
            </Link>
          </NavbarItem>
          
          <NavbarItem >
            <Link color="foreground" to="/team" >
              TEAM
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link color="foreground" to="/contact" >
              CONTACT US
            </Link>
          </NavbarItem>
      </NavbarContent>

      <div>
      <Link to='/register'>

      <button  className="register__button" style={{marginLeft:'32px'}}>
         BUY TICKET
      </button>
      </Link>
    </div>
          
      <NavbarMenu className="dropdown__menu" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              style={{ color: "white" }}
              size="lg"
              to={item.link}
              onClick={() => {
                toggleModal()
                setIsMenuOpen(false);
              }}
              >
             <p>{item.name}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Outlet />
    </Navbar>
  </div>
  );
}