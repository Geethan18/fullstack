import React from 'react';
import CustomNavbar from '../components/Navbarcus';
import CustomSideNav from '../components/SideNav';
import '../assets/css/menu_page.css'
import Venues from '../components/venues';
export default function Venue(){
    return(
        <div className='menu__container'>
            <CustomNavbar/>
            <div className='menu_details'>
                <aside>
                    <CustomSideNav/>
                </aside>
                <section>
                    <Venues/>
                </section>
            </div>
        </div>
    )
}