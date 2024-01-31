import { Header } from "rsuite";
import CustomNavbar from "../components/Navbarcus";
import S3uploader from "../components/s3uploader";
import CustomSideNav from "../components/SideNav";
import CarousalComponent from "../components/carousal";
import CustomPaginationActionsTable from "../components/table";
import Alleventcard from "../components/adminevent";
import ApexChart from "../components/chart";
import UserProfile from "../components/adminprofile";


export default function Aboutus(){
    return(
        <>
        {/* <header> */}
        <CustomNavbar/>
        {/* </header> */}
            {/* <CustomSideNav/> */}
            {/* <div style={{height:'500px',width:'1000px'}}> */}
                <CarousalComponent/>
            {/* </div> */}
        {/* <h2>Hi</h2> */}
            <S3uploader/>
            <ApexChart/>
            {/* <Alleventcard/> */}
            {/* <CustomPaginationActionsTable/> */}
        {/* </h2> */}
        <UserProfile/>
        {/* <aside> */}
        {/* </aside> */}
        </>
    );
}