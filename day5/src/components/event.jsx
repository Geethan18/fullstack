import React from 'react';
import '../assets/css/events.css';
export default function Eventss(){
    return(
        <div className='eventsbody'>
            <div className="signup-container">
  <div className="left-container">
    <h1 className='registeringcard'>
      <i className="fas fa-paw" />
      EveLy
    </h1>
    <div className="puppy">
      {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" /> */}
    </div>
  </div>
  <div className="right-container">
    <header>
      {/* <h1>Yay, puppies! Ensure your pup gets the best care!</h1> */}
      <div className="set">
        <div className="pets-name">
          <label htmlFor="pets-name">Name</label>
          <input id="pets-name" placeholder="Name" type="text" />
        </div>
        <div className="pets-photo">
          <button id="pets-upload">
            <i className="fas fa-camera-retro" />
          </button>
          <label htmlFor="pets-upload">Upload an Invitation</label>
        </div>
      </div>
      <div className="set">
        <div className="pets-breed">
          <label htmlFor="pets-breed">Event</label>
          <input id="pets-breed" placeholder="Event type" type="text" />
        </div>
        <div className="pets-birthday">
          <label htmlFor="pets-birthday">Event Date</label>
          <input id="pets-birthday" placeholder="MM/DD/YYYY" type="text" />
        </div>
      </div>
      <div className="set">
        <div className="pets-gender">
          <label htmlFor="pet-gender-female">Entry Type</label>
          <div className="radio-container">
            <input
              defaultChecked=""
              id="pet-gender-female"
              name="pet-gender"
              type="radio"
              defaultValue="Free"
            />
            <label htmlFor="pet-gender-female">Free</label>
            <input
              id="pet-gender-male"
              name="pet-gender"
              type="radio"
              defaultValue="Paid"
            />
            <label htmlFor="pet-gender-male">Paid</label>
          </div>
        </div>
        <div className="pets-spayed-neutered">
          <label htmlFor="pet-spayed">Food(Optional)</label>
          <div className="radio-container">
            <input
              defaultChecked=""
              id="pet-spayed"
              name="spayed-neutered"
              type="radio"
              defaultValue="Non-Veg"
            />
            <label htmlFor="pet-spayed">Non-Veg</label>
            <input
              id="pet-neutered"
              name="spayed-neutered"
              type="radio"
              defaultValue="Veg"
            />
            <label htmlFor="pet-neutered">Veg</label>
          </div>
        </div>
      </div>
      <div className="pets-weight">
        <label htmlFor="pet-weight-0-25">Mode</label>
        <div className="radio-container">
          <input
            defaultChecked=""
            id="pet-weight-0-25"
            name="pet-weight"
            type="radio"
            defaultValue="0-25"
          />
          {/* <label htmlFor="pet-weight-0-25">0-25 lbs</label>
          <input
            id="pet-weight-25-50"
            name="pet-weight"
            type="radio"
            defaultValue="25-50"
          /> */}
          <label htmlFor="pet-weight-25-50">Hybrid</label>
          <input
            id="pet-weight-50-100"
            name="pet-weight"
            type="radio"
            defaultValue="50-100"
          />
          <label htmlFor="pet-weight-50-100">In Person</label>
          <input
            id="pet-weight-100-plus"
            name="pet-weight"
            type="radio"
            defaultValue="100+"
          />
          <label htmlFor="pet-weight-100-plus">Virtual</label>
        </div>
      </div>
    </header>
    <div style={{padding:'10px'}}>
      <button style={{width:'100px', padding:'10px', marginLeft:'200px'}}>Cancel</button>
      </div>
      {/* <br></br> */}
      <div style={{padding:'10px'}}>
      <button style={{width:'100px', padding:'10px', marginLeft:'200px'}}>Next</button> </div>

  </div>
</div>

        </div>
    )
}