import '../App.css';
import Item from './Item.js';
import logo from '../logo.png';

function Sidebar() {

    return (
        <div className="Sidebar">
            <div className='center'>
            <img className="logo" src={logo} alt="logo"></img>

            </div>
            <h1>Categories</h1>
            <Item name="🚫 Crime" content="Franklin County property crime: 41/100."></Item>
            <Item name="🌊 Floods" content="No major flood risk in the area"></Item>
            <Item name="📢 News" content="News by location here"></Item>
        </div>
    );
}

export default Sidebar;