import React from 'react';
import './home.css'

function Home() {
    return (
        <div className="page page-home" style={{display: 'block'}}>
            <div className="bg"></div>
            <div className="overlay"></div>
            <div className="panel panel-time">
                <div className="span time">15:06</div>
                <div className="span date">Monday, 27 Juny 2015</div>
            </div>
            <div className="panel panel-weather">
                <div className="location">Budapest, Hungary</div>
                 {/*.icon.wi.wi-day-sunny-overcast*/}
                <img src="http://ultraimg.com/images/KlfpUAu.png"/>
                <div className="span temp">28<span className="degree">&deg;C</span></div>
                <div className="span text">Sunny</div>
            </div>
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
            {/*<div className="panel panel-functions">*/}
            {/*    <div className="icon icon-weather" data-page="weather"><img src={require('../../img/sunBig.png')}/></div>*/}
            {/*    <div className="icon icon-calendar" data-page="calendar"><img src={require('../../img/calendar.png')}/></div>*/}
            {/*    <div className="icon icon-map" data-page="map"><img src={require('../../img/maps.png')}/></div>*/}
            {/*    <div className="icon icon-tasks" data-page="tasks"><img src={require('../../img/task.png')}/></div>*/}
            {/*    <div className="icon icon-news" data-page="news"><img src={require('../../img/news.png')}/></div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Home;