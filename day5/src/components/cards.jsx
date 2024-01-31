import React from "react";
import '../assets/css/cards.css';
import { Link } from "react-router-dom";
export default function EventCard(){
    return(
        <div className="cardbody">
            <>
  <link
    href="https://fonts.googleapis.com/css?family=Cabin|Indie+Flower|Inknut+Antiqua|Lora|Ravi+Prakash"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div className="container">
    {/* <h1 className="upcomming">upcomming gigs</h1> */}
    <div className="item">
        <Link to={'/eventdes'}>
      <div className="item-right">
        <h2 className="num">23</h2>
        <p className="day">Feb</p>
        <span className="up-border" />
        <span className="down-border" />
      </div>{" "}
        </Link>
      {/* end item-right */}
      <div className="item-left">
        <p className="event">Music Event</p>
        <h2 className="title">Live In Sydney</h2>
        <div className="sce">
          <div className="icon">
            <i className="fa fa-table" />
          </div>
          <p>
            Monday 15th 2016 <br /> 15:20Pm &amp; 11:00Am
          </p>
        </div>
        <div className="fix" />
        <div className="loc">
          <div className="icon">
            <i className="fa fa-map-marker" />
          </div>
          <p>
            North,Soth, United State , Amre <br /> Party Number 16,20
          </p>
        </div>
        <div className="fix" />
        <button className="tickets">Tickets</button>
      </div>{" "}
      {/* end item-right */}
    </div>{" "}
    {/* end item */}
    <div className="item">
      <div className="item-right">
        <h2 className="num">23</h2>
        <p className="day">Feb</p>
        <span className="up-border" />
        <span className="down-border" />
      </div>{" "}
      {/* end item-right */}
      <div className="item-left">
        <p className="event">Music Event</p>
        <h2 className="title">Live Been Corrage</h2>
        <div className="sce">
          <div className="icon">
            <i className="fa fa-table" />
          </div>
          <p>
            Monday 15th 2016 <br /> 15:20Pm &amp; 11:00Am
          </p>
        </div>
        <div className="fix" />
        <div className="loc">
          <div className="icon">
            <i className="fa fa-map-marker" />
          </div>
          <p>
            North,Soth, United State , Amre <br /> Party Number 16,20
          </p>
        </div>
        <div className="fix" />
        <button className="tickets">Tickets</button>
      </div>{" "}
      {/* end item-right */}
    </div>{" "}
    {/* end item */}
    <div className="item">
      <div className="item-right">
        <h2 className="num">23</h2>
        <p className="day">Feb</p>
        <span className="up-border" />
        <span className="down-border" />
      </div>{" "}
      {/* end item-right */}
      <div className="item-left">
        <p className="event">Music Kaboom</p>
        <h2 className="title">Music Party</h2>
        <div className="sce">
          <div className="icon">
            <i className="fa fa-table" />
          </div>
          <p>
            Monday 15th 2016 <br /> 15:20Pm &amp; 11:00Am
          </p>
        </div>
        <div className="fix" />
        <div className="loc">
          <div className="icon">
            <i className="fa fa-map-marker" />
          </div>
          <p>
            North,Soth, United State , Amre <br /> Party Number 16,20
          </p>
        </div>
        <div className="fix" />
        <button className="booked">Booked</button>
      </div>{" "}
      {/* end item-right */}
    </div>{" "}
    {/* end item */}
    <div className="item">
      <div className="item-right">
        <h2 className="num">23</h2>
        <p className="day">Feb</p>
        <span className="up-border" />
        <span className="down-border" />
      </div>{" "}
      {/* end item-right */}
      <div className="item-left">
        <p className="event">Music Event</p>
        <h2 className="title linethrough">Hello Dubail Visivle</h2>
        <div className="sce">
          <div className="icon">
            <i className="fa fa-table" />
          </div>
          <p>
            Monday 15th 2016 <br /> 15:20Pm &amp; 11:00Am
          </p>
        </div>
        <div className="fix" />
        <div className="loc">
          <div className="icon">
            <i className="fa fa-map-marker" />
          </div>
          <p>
            North,Soth, United State , Amre <br /> Party Number 16,20
          </p>
        </div>
        <div className="fix" />
        <button className="cancel">Cancele</button>
      </div>{" "}
      {/* end item-right */}
    </div>{" "}
    {/* end item */}
  </div>
</>

        </div>
    );
}