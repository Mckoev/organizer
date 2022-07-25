import React, {useEffect} from 'react';
import './home.css'
import TimeNow from "../../components/timeNow";
import {getWeatherToHome} from "../../helpers/getWeatherToHome";
import WeatherHome from "../../components/page/weatherHome";



function Home() {
    getWeatherToHome()
    return (
        <div className="page page-home" style={{display: 'block'}}>
            <div className="bg"></div>
            <div className="overlay"></div>
            <div className="panel panel-time">
                <TimeNow/>
            </div>
            <WeatherHome/>
            <div className="panel panel-calendar">
                <ul>
                    <li>
                        <div className="time">8:00 - 9:00</div>
                        <div className="title">Shopping</div>
                    </li>
                    <li>
                        <div className="time">10:00 - 12:00</div>
                        <div className="title">Meet Tom</div>
                    </li>
                    <li>
                        <div className="time">18:00 - 20:00</div>
                        <div className="title">Go to cinema</div>
                    </li>
                </ul>
            </div>
            <div className="panel panel-tasks">
                <ul>
                    <li className="checked">
                        <div className="check"></div>
                        <div className="title">Milk</div>
                    </li>
                    <li>
                        <div className="check"></div>
                        <div className="title">Bread & cheese</div>
                    </li>
                    <li>
                        <div className="check"></div>
                        <div className="title">Beer & wine</div>
                    </li>
                    <li className="other">
                        <div className="plus"></div>
                        <div className="title">... and 15 other tasks</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;