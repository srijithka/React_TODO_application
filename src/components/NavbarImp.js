import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import logo from '/Users/sriji/Desktop/React/experiment/src/logo.svg'
import { Button,  ButtonGroup, DropdownButton, MenuItem ,Form,FormControl} from 'react-bootstrap';

function NavbarImp()
{
    var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav
    return(
        <div>
            <Navbar bg="primary" variant="dark" fixed='top'>
                <ReactBootstrap.Container>
                
                <Navbar.Brand href="https://rudradesai.in/cfviewer/dashboard/srijith1402/" >
                    <img
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                        
                    />
                    <h3 href="https://rudradesai.in/cfviewer/dashboard/srijith1402/">CFAnalyzer</h3>
                </Navbar.Brand>
                <ReactBootstrap.Row>
                <Nav xs={6} md={4}>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#follow">FOLLOW</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
                </ReactBootstrap.Row>
                </ReactBootstrap.Container>
            
            </Navbar>
            
        </div>
    )
}



export default NavbarImp