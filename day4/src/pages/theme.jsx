import React from 'react';
import CustomNavbar from '../components/Navbarcus';
import CustomSideNav from '../components/SideNav';
import '../assets/css/menu_page.css'
import Themess from '../components/themes';
export default function Themes(){
    return(
        <div className='menu__container'>
            <CustomNavbar/>
            <div className='menu_details'>
                <aside>
                    <CustomSideNav/>
                </aside>
                <section>
                    <Themess/>
                </section>
            </div>
        </div>
    )
}