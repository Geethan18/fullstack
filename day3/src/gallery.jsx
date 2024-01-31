import React from 'react';
import '../assets/css/gallery.css';
import CustomNavbar from './Navbarcus';
export default function Gallery(){
    return(
      <>
      {/* <CustomNavbar/> */}
        <div style={{padding:'20px'}}>
            <ul className="img-list">
  <li>
    <span className="img-placeholder">- placeholder -</span>
  </li>
  <li>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg" />
  </li>
  <li>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg" />
  </li>
  <li>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/012.jpg" />
  </li>
  <li>
    <span className="img-placeholder">- placeholder -</span>
  </li>
  <li>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/015.jpg" />
  </li>
  <li>
    <span className="img-placeholder">- placeholder -</span>
  </li>
  <li>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/038.jpg" />
  </li>
  <li>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/044.jpg" />
  </li>
</ul>

        </div>
        </>
    );
}