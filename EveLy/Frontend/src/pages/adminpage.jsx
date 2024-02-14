import React from 'react';
import CustomNavbar from '../components/Navbarcus';
import CustomSideNav from '../components/SideNav';
import ApexChart from '../components/chart';
export default function Adminpages(){
    return(
        <div style={{width:'100vw', height:'100vh',display:'flex',flexDirection:'column'}}>
        <header>
        <CustomNavbar/>
        </header>
        <div style={{width:'100%',height:'100%', display:'flex',flexDirection:'row'}}>
        <aside>

        <CustomSideNav/>
        </aside>
        <section style={{padding:'20px', width:'100%'}}>
        <ApexChart/></section></div>
        </div>
    );
}