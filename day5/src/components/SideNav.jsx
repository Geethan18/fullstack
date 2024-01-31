import { Nav, Sidenav } from "rsuite";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const CustomSideNav = () => (
  
    <div style={{ width: 240 , position:""}}>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              <Link to={'/table'}>User Group</Link>
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Customization" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1"><Link to={'/menu'}>Menu</Link></Nav.Item>
              <Nav.Item eventKey="3-2"><Link to={'/themes'}>Themes</Link></Nav.Item>
              <Nav.Item eventKey="3-3"><Link to={'/venues'}>Venues</Link></Nav.Item>
              <Nav.Item eventKey="3-4">Events</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Abort Event</Nav.Item>
              <Nav.Item eventKey="4-2">Requests</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Admin Profile</Nav.Item>
                <Nav.Item eventKey="4-5-2">User Profile</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
  export default CustomSideNav;