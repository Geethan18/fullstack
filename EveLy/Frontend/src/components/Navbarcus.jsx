import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import "../assets/css/about.css"
import { Profiler } from 'react';
import ProfileAvatar from './profileavatar';
const CustomNavbar=()=>{
    return(
        <Navbar className='navbarid' style={{backgroundColor:'transparent', height:'9vh', color:'black', fontSize:'20px'}}>
        <Navbar.Brand style={{fontFamily:'sans-serif', fontSize:'20px', color:'black'}}>EveLy</Navbar.Brand>
        <Nav>
            {/* <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
            <Nav.Item><Link to={'/home'}>Home</Link></Nav.Item>
            <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
            <Nav.Item><Link to={'/login'}>Login</Link></Nav.Item>
            <Nav.Item><Link to={'/signup'}>Signup</Link></Nav.Item> */}

            <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
          <Nav.Item><Link to={'/allevents'}>Events</Link></Nav.Item>
          <Nav.Menu title="Events">
            <Link to={'/allevents'}><Nav.Item>All Events</Nav.Item></Link>
          <Link to={'/publicevents'}><Nav.Item>Public</Nav.Item></Link>
          <Link to={'/privateevents'}><Nav.Item>Private</Nav.Item></Link>
          </Nav.Menu>
          <Nav.Item><Link to={'/gallery'}>Gallery</Link></Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item> 
             </Nav.Menu>
          </Nav.Menu>
          <Nav.Item><Link to={'/event'}>Create</Link></Nav.Item>
        </Nav>
        <Nav pullRight>
            {/* <Nav.Item icon={<>}>Sign In</Nav.Item> */}
            <Nav.Item><Link to={'/profile'}><ProfileAvatar/></Link></Nav.Item>
            <Nav.Item><Link to={'/login'}>LogOut</Link></Nav.Item>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    )
}

export default CustomNavbar;