import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const startupScreen = (
  <div>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg" />
  </div>
);

const Slider = (
  <AwesomeSlider
    startupScreen={startupScreen}
    cssModule={styles}
  >
    <div data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg" />
    <div data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg" />
    {/* <div data-src="/path/to/image-2.jpg" /> */}
  </AwesomeSlider>
);
export default Slider;