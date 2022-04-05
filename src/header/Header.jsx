import React, {useState} from 'react'
import { Navbar,Nav,FormControl,NavDropdown,Container } from 'react-bootstrap'
import image from '../image/git.png'
import './Header.css'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
import  { logOut }  from '../firebaseAuth/UserAuth'


export default function Header() {

  const [ loading, setLoading ] = useState(false);

const history = useHistory()
 
function handleLogout() {
     sessionStorage.clear()
     history.push('/login')
}

 
  return (

    <div>
        <Navbar bg="" variant="dark" className='navbars'>
                                    
             <Navbar.Brand href='/' className='nav-head'> 
                   <img src={image} height={40} width={40}
                        className='nav-img'  alt='git-img'></img>
             </Navbar.Brand>

             <Nav className="me-auto">
                 <FormControl type="search" placeholder="Search.." 
                              className="search-bar" />
             </Nav>
                                        
             <Nav className="mr-auto profile-part">
                                        
                  <NavDropdown title='user' className='navbrands active'>
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/reg">Register</NavDropdown.Item> 
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/issue">Raise Issues</NavDropdown.Item>
                      <NavDropdown.Item onClick={handleLogout}  className="logout">logout</NavDropdown.Item>
                 </NavDropdown>
                <Container/>
             </Nav>
        </Navbar>
    </div>
  )
}
