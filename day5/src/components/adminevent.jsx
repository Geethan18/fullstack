import React from 'react';
import '../assets/css/allevent.css';
import CustomNavbar from './Navbarcus';
export default function Alleventcard(){
    return(
        <>
        <CustomNavbar/>
        <>
  {/* <h1 className="page_title">CSS Image Grid with Hover</h1> */}
  <div className="rows">
    <div className="container" >
      <div className="test_box box-01 col-xs-6 col-md-4">
        <div className="inner"  style={{width:'100vw'}}>
          <a href="#" className="test_click">
            <div className="flex_this">
              <h1 className="test_title">Title</h1>
              <span className="test_link">Link</span>
            </div>
          </a>
        </div>
      </div>
      <div className="test_box box-02 col-xs-6 col-md-4">
        <div className="inner"  style={{width:'100vw'}}>
          <a href="#" className="test_click">
            <div className="flex_this">
              <h1 className="test_title">Title</h1>
              <span className="test_link">Link</span>
            </div>
          </a>
        </div>
      </div>
      <div className="test_box box-03 col-xs-6 col-md-4">
        <div className="inner"  style={{width:'100vw'}}>
          <a href="#" className="test_click">
            <div className="flex_this">
              <h1 className="test_title">Title</h1>
              <span className="test_link">Link</span>
            </div>
          </a>
        </div>
      </div>
      <div className="test_box box-04 col-xs-6 col-md-4">
        <div className="inner"  style={{width:'100vw'}}>
          <a href="#" className="test_click">
            <div className="flex_this">
              <h1 className="test_title">Title</h1>
              <span className="test_link">Link</span>
            </div>
          </a>
        </div>
      </div>
      <div className="test_box box-05 col-xs-6 col-md-4">
        <div className="inner"  style={{width:'100vw'}}>
          <a href="#" className="test_click">
            <div className="flex_this">
              <h1 className="test_title">Title</h1>
              <span className="test_link">Link</span>
            </div>
          </a>
        </div>
      </div>
      <div className="test_box box-06 col-xs-6 col-md-4">
        <div className="inner"  style={{width:'100vw'}}>
          <a href="#" className="test_click">
            <div className="flex_this">
              <h1 className="test_title">Title</h1>
              <span className="test_link">Link</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</>

        </>
    )
}