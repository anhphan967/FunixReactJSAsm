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
                       <NavbarBrand className="mr-auto" href="/staffs"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                       <Collapse isOpen={toggle} navbar>
                           <Nav navbar>
                               <NavItem>
                                   <NavLink tag={Link} to='/staffs'><span className="fa fa-users fa-lg"></span> Nhân viên</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink tag={Link} to='/deparments'><span className="fa fa-id-card-o fa-lg"></span> Phòng Ban</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink tag={Link} to='/salaries'><span className="fa fa-money fa-lg"></span> Bảng Lương</NavLink>
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