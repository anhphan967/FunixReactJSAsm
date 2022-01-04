import {    Navbar, NavbarBrand, NavItem,
      NavbarToggler,    Collapse, Nav} from 'reactstrap';
import { NavLink } from 'react-router-dom'
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
                                    <NavLink  className='nav-link' to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link'  to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className='nav-link'  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link'  to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </div>
            </Navbar>
            <div className='Jumbotron'>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}
export default Header