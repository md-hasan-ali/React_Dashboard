import React from 'react';
import './upcoming.css'
import showcase from '../../images/showcase.png'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { SlCalender } from 'react-icons/sl'
import { Link } from 'react-router-dom';

const Upcomingevent = () => {
    return (
        <div className='upcoming-event'>
            <div className="title">
                <span>Upcoming event</span>
                <Link href="#"><AiOutlinePlus /></Link>
            </div>
            <div>
                <div className="u-title">
                    <img src={showcase} alt="" />
                    <h4>Join us for our Earth Day Clean-up Event!</h4>
                </div>
                <div className="u-info u-border">
                    <li><SlCalender /> 16.03.2023 - 18.03.2023</li>
                    <li><BiTimeFive /> 16.03.2023 - 18.03.2023</li>
                    <li><HiOutlineLocationMarker /> 16.03.2023 - 18.03.2023</li>
                </div>
            </div>
            <div>
                <div className="u-title">
                    <img src={showcase} alt="" />
                    <h4>Creators Meetup</h4>
                </div>
                <div className="u-info">
                    <li><SlCalender /> 16.03.2023 - 18.03.2023</li>
                    <li><BiTimeFive /> 16.03.2023 - 18.03.2023</li>
                    <li><HiOutlineLocationMarker /> 16.03.2023 - 18.03.2023</li>
                </div>
            </div>
        </div >
    );
};

export default Upcomingevent;