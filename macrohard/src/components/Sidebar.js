import '../App.css';
import SliderBox from './SliderBox.js';
import Slider from './Slider.js';
import logo from '../logo.png';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className='center'>
            <img className="logo" src={logo} alt="logo"></img>

            </div>
            <h1>Categories</h1>
            <Slider name="🌪️ Storms:"></Slider>
            <Slider name="🌊 Floods:"></Slider>
            <Slider name="🚫 Crime:"></Slider>
            <Slider name="🔥 Fire:"></Slider>
        </div>
    );
}

export default Sidebar;