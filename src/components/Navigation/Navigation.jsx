import React from 'react';
import './navigaion.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosSunny } from 'react-icons/io'
import { IoMdNotificationsOutline } from 'react-icons/io'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [profile, setProfile] = useState(false);
    // console.log(window.location.pathname)
    return (
        <div className='headerTopAreaFixd'>
            <div className='navigation'>
                <div className="hader_top_area">
                    <div className="logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="menu-icon">
                        <div className="menu">
                            <Link to="/"> <AiOutlineGlobal /> </Link>
                            <Link to="/"> <IoIosSunny /> </Link>
                            <Link to="/"> <IoMdNotificationsOutline /> </Link>
                        </div>
                        <div className='profileLogo'>
                            <Link to={window.location.pathname}
                                onClick={() => {
                                    setProfile(current => !current)
                                    console.log(profile) // is false 
                                }
                                }
                            >
                                <div className="profile-info">
                                    <span>John Doe <br /> Admin</span>
                                    <div className="profile-icon">
                                        <AiOutlineUser />
                                    </div>
                                </div>
                            </Link>
                            {
                                profile && <div>
                                    <ul className='profileLogo_dopdown'>
                                        <li><Link to="/">Profile Accout</Link></li>
                                        <li><Link to="/">Setting</Link></li>
                                        <li><Link to="/">LogOut</Link></li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navigation;