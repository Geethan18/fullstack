import React from 'react';
import '../assets/css/carousal.css';
export default function CarousalComponent(){
    return(
        <div>
          <>
  <div className="carousel-container">
    {/* <h2>slider</h2> */}
    <div className="carousel my-carousel carousel--translate">
      <input
        className="carousel__activator"
        type="radio"
        name="carousel"
        id="F"
        defaultChecked="checked"
      />
      <input
        className="carousel__activator"
        type="radio"
        name="carousel"
        id="G"
      />
      <input
        className="carousel__activator"
        type="radio"
        name="carousel"
        id="H"
      />
      <input
        className="carousel__activator"
        type="radio"
        name="carousel"
        id="I"
      />
      <input
        className="carousel__activator"
        type="radio"
        name="carousel"
        id="J"
      />
      <div className="carousel__controls">
        <label
          className="carousel__control carousel__control--backward"
          htmlFor="J"
        />
        <label
          className="carousel__control carousel__control--forward"
          htmlFor="G"
        />
      </div>
      <div className="carousel__controls">
        <label
          className="carousel__control carousel__control--backward"
          htmlFor="F"
        />
        <label
          className="carousel__control carousel__control--forward"
          htmlFor="H"
        />
      </div>
      <div className="carousel__controls">
        <label
          className="carousel__control carousel__control--backward"
          htmlFor="G"
        />
        <label
          className="carousel__control carousel__control--forward"
          htmlFor="I"
        />
      </div>
      <div className="carousel__controls">
        <label
          className="carousel__control carousel__control--backward"
          htmlFor="H"
        />
        <label
          className="carousel__control carousel__control--forward"
          htmlFor="J"
        />
      </div>
      <div className="carousel__controls">
        <label
          className="carousel__control carousel__control--backward"
          htmlFor="I"
        />
        <label
          className="carousel__control carousel__control--forward"
          htmlFor="F"
        />
      </div>
      <div className="carousel__track">
        <li className="carousel__slide">
          <h1>F</h1>
        </li>
        <li className="carousel__slide">
          <h1>G</h1>
        </li>
        <li className="carousel__slide">
          <h1>H</h1>
        </li>
        <li className="carousel__slide">
          <h1>I</h1>
        </li>
        <li className="carousel__slide">
          <h1>J</h1>
        </li>
      </div>
      <div className="carousel__indicators">
        <label className="carousel__indicator" htmlFor="F" />
        <label className="carousel__indicator" htmlFor="G" />
        <label className="carousel__indicator" htmlFor="H" />
        <label className="carousel__indicator" htmlFor="I" />
        <label className="carousel__indicator" htmlFor="J" />
      </div>
    </div>
  </div>
</>
        </div>
    )
}