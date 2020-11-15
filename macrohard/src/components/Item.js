import '../App.css';
import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function Item(props) {
    const [ value, setValue ] = useState(5); 

    return (
        <div className="Item">
            <h3>{props.name}</h3>
            {/* <RangeSlider
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
            min={0}
            max={10}
            variant='blue'
            size='lg'
            /> */}
            <p>{props.content}</p>
        </div>  
    );
}

export default Item;