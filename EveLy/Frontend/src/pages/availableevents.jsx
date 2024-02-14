import React from 'react';
import CustomNavbar from '../components/Navbarcus';
import Menucard from '../components/menucards';
import CustomSideNav from '../components/SideNav';
import '../assets/css/menu_page.css'
import Availableevent from '../components/availableevents';
export default function Availableevents(){
    return(
        <div className='menu__container'>
            <CustomNavbar/>
            <div className='menu_details'>
                <aside>
                    <CustomSideNav/>
                </aside>
                <section>
                    {/* <h1>Available Event</h1> */}
                    <Availableevent/>
                </section>
            </div>
        </div>
    )
}