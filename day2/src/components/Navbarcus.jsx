import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import "../assets/css/about.css"
const CustomNavbar=()=>{
    return(
        <Navbar className='navbarid'>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
            <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
            <Nav.Item><Link to={'/home'}>Home</Link></Nav.Item>
            <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
            <Nav.Item><Link to={'/login'}>Login</Link></Nav.Item>
            <Nav.Item><Link to={'/signup'}>Signup</Link></Nav.Item>

          <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item> 
             </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    )
}

export default CustomNavbar;