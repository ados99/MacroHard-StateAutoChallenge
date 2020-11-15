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
            <Item name="🚫 Crime" content="Crime data by location here"></Item>
            <Item name="📢 News" content="News by location here"></Item>
        </div>
    );
}

export default Sidebar;