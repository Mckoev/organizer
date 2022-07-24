import React from 'react';
import {Link} from "react-router-dom";
import './icons.css'

function Icons() {
    return (
        <div className="main-icons" style={{display: 'block'}}>
            <div className="panel panel-functions">
                <div className="icon icon-weather" data-page="home">
                    <Link to="/">
                        <img src={require('../../img/home.png')}/>
                    </Link></div>
                <div className="icon icon-weather" data-page="weather">
                    <Link to="/weather">
                        <img src={require('../../img/sunBig.png')}/>
                    </Link></div>
                <div className="icon icon-calendar" data-page="calendar">
                    <Link to="/calendar"><img src={require('../../img/calendar.png')}/></Link>
                </div>
                <div className="icon icon-map" data-page="map">
                    <Link to="/map"><img src={require('../../img/maps.png')}/></Link></div>
                <div className="icon icon-tasks" data-page="tasks"><Link to="/lists"><img
                    src={require('../../img/task.png')}/></Link></div>
                <div className="icon icon-news" data-page="news"><Link to="/news"><img src={require('../../img/news.png')}/></Link>
                </div>
            </div>
        </div>
    );
}

Icons.propTypes = {};

export default Icons;