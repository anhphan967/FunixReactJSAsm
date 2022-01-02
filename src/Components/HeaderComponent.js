import {    Navbar, NavbarBrand, NavItem,
    NavLink, NavbarToggler,    Collapse, Nav} from 'reactstrap';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../App.css';

function Header() {
   const [toggle, setToggle] = useState(false)
   return (
       <div>
           <Navbar dark expand="md">
               <div className="container">
                   <div className="row">
                       <NavbarToggler onClick={() => setToggle(!toggle)} />
                       <NavbarBrand className="mr-auto" href="/home"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                       <Collapse isOpen={toggle} navbar>
                           <Nav navbar>
                               <NavItem>
                                   <NavLink tag={Link} to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink tag={Link} to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink tag={Link} to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink tag={Link} to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                               </NavItem>
                           </Nav>
                       </Collapse>
                   </div>

               </div>
           </Navbar>
           

       </div>
   )
}
export default Header