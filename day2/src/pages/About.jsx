import { Header } from "rsuite";
import CustomNavbar from "../components/Navbarcus";
import S3uploader from "../components/s3uploader";
import CustomSideNav from "../components/SideNav";


export default function Aboutus(){
    return(
        <>
        {/* <header> */}
        <CustomNavbar/>
        {/* </header> */}
            <CustomSideNav/>
        <h2>Hi</h2>
            <S3uploader/>
        {/* </h2> */}
        {/* <aside> */}
        {/* </aside> */}
        </>
    );
}