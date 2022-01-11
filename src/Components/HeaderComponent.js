import {
    Modal, ModalHeader, ModalBody,
    Navbar, NavbarBrand, NavItem, Button,
    NavbarToggler, Collapse, Nav, Input, Label, Form, FormGroup
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import '../App.css';


function Header() {

    const [toggle, setToggle] = useState(false)
    const [sign, setSign] = useState(false)
    let username
    let remember
    let password

    const HandelSubmit = (e) => {
        setSign(!sign)

        alert('User Name:' + username.value + 'Password: ' + password.value + 'Remember: ' + remember.checked)
        console.log('User Name:' + username.value, 'Password: ' + password.value, 'Remember: ' + remember.checked)
        e.preventDefault();
    }

    return (
        <div>
            <Navbar dark expand="md">
                
                <NavbarToggler onClick={() => setToggle(!toggle)} />
                <NavbarBrand className="mr-auto" href="/home"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                <Collapse isOpen={toggle} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button onClick={() => setSign(!sign)}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                    </NavItem>
                </Nav>
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
            <Modal isOpen={sign} toggle={() => setSign(!sign)} >
                <ModalHeader toggle={() => setSign(!sign)}> LogIn  </ModalHeader>
                <ModalBody>
                    <Form onSubmit={HandelSubmit}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => { username = input }} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => { password = input }} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={(input) => { remember = input }} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default Header