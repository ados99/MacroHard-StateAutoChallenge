import '../App.css';
import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function Slider(props) {
    const [ value, setValue ] = useState(5); 

    return (
        <div className="Slider">
            <h3>{props.name} Level <b>{value}</b></h3>
            <RangeSlider
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
            min={0}
            max={10}
            variant='blue'
            size='lg'
            />
        </div>  
    );
}

export default Slider;