import React from 'react';

function Icons() {
    return (
        <div className="page-home" style={{display: 'block'}}>
        <div className="panel panel-functions">
            <div className="icon icon-weather" data-page="weather"><img src={require('../img/sunBig.png')}/></div>
            <div className="icon icon-calendar" data-page="calendar"><img src={require('../img/calendar.png')}/></div>
            <div className="icon icon-map" data-page="map"><img src={require('../img/maps.png')}/></div>
            <div className="icon icon-tasks" data-page="tasks"><img src={require('../img/task.png')}/></div>
            <div className="icon icon-news" data-page="news"><img src={require('../img/news.png')}/></div>
        </div>
        </div>
    );
}

Icons.propTypes = {};

export default Icons;