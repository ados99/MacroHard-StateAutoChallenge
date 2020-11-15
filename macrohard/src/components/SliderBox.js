import '../App.css';
import Slider from './Slider';


function SliderBox(props) {

    var value = document.getElementsByClassName("classSlider").textContent;
    return (
        <div className="SliderBox">
        <h3>{props.name}</h3>
        <Slider></Slider>
        </div>
    );
}

export default SliderBox;