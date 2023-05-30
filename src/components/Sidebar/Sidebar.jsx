import React from 'react';
import './sidebar.css'
// import { CiTimer } from 'react-icons/ci'
// import { FiBriefcase } from 'react-icons/fi'
// import { MdTimeline } from 'react-icons/md'
import side1 from "../../images/side1.png"
import side2 from "../../images/side2.png"
import side3 from "../../images/side3.png"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='container-fluid'>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/"> <span><img src={side1} alt="photos" /></span> Feed</Link>
                    </li>
                    <li>
                        <Link to="/"><span> <img src={side3} alt="photos" /></span> Accounts</Link>
                    </li>
                    <li>
                        <Link to="/reports"><span><img src={side2} alt="photos" /></span> Reports</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;