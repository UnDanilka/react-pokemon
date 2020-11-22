import React from 'react';
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap';
import logo from './hd-pokemon-png-10203.png';
import {Link} from 'react-router-dom';
import './Header.css';


function Header(props) {
    return (
        <div>
            <>
                <Navbar className='navbar' fixed='top' collapseOnSelect expand='md' >
                    <Container>
                        <Navbar.Brand href='/'>
                            <img src={logo}
                                height='60'
                                width='60'
                                className='d-inline-block align-top'
                                alt='logo'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='m-auto' >
                                <Link className=' btn btn-link ' to='/'>Home</Link>
                                <Link className=' btn btn-link' to='/listCharacter'>List Character</Link>
                                <Link className=' btn btn-link' to='/contacts'>Contacts</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
}

export default Header;