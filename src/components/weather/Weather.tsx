import React from 'react';

function Weather() {
    return (
        <div className="page page-weather">
            <div className="bg"></div>
            <div className="overlay"></div>
            <div className="panel panel-now">
                <div className="mainInfo">
                    <img src="http://ultraimg.com/images/KlfpUAu.png"/>
                    <div className="temp"><span className="value">27<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">19<span
                        className="degree">&deg;C</span></span></div>
                </div>
                <div className="row">
                    <div className="info"><i className="wi wi-strong-wind"></i><span className="value">15 km/h</span>
                    </div>
                    <div className="info"><i className="wi wi-wind-default _150-deg"></i><span
                        className="value">NW</span></div>
                    <div className="info"><i className="wi wi-sprinkles"></i><span
                        className="value">40 %					</span></div>
                </div>
            </div>
            <div className="panel panel-today">
                <div className="box">
                    <div className="title">Morning</div>
                    <img src="http://ultraimg.com/images/Paf07R1.png"/>
                    <div className="temp"><span className="value">16<span className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Afternoon</div>
                    <img src="http://ultraimg.com/images/KlfpUAu.png"/>
                    <div className="temp"><span className="value">26<span className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Tonight</div>
                    <img src="http://ultraimg.com/images/NDKiHOg.png"/>
                    <div className="temp"><span className="value">19<span className="degree">&deg;C</span></span></div>
                </div>
            </div>
            <div className="panel panel-location">
                <div className="title"><span>Budapest</span><span>Hungary</span></div>
                <div className="icon fa fa-map-marker"></div>
            </div>
            <div className="panel panel-forecast">
                <div className="box">
                    <div className="title">Tue</div>

                    <img src="http://ultraimg.com/images/bosikG0.png"/>
                    <div className="temp"><span className="value">31<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">23<span
                        className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Wed</div>
                    <img src="http://ultraimg.com/images/KlfpUAu.png"/>
                    <div className="temp"><span className="value">25<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">20<span
                        className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Thu</div>
                    <img src="http://ultraimg.com/images/t8VL5lw.png"/>
                    <div className="temp"><span className="value">18<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">12<span
                        className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Fri</div>
                    <img src="http://ultraimg.com/images/t8VL5lw.png"/>
                    <div className="temp"><span className="value">16<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">9<span
                        className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Sat</div>
                    <img src="http://ultraimg.com/images/Paf07R1.png"/>
                    <div className="temp"><span className="value">20<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">13<span
                        className="degree">&deg;C</span></span></div>
                </div>
                <div className="box">
                    <div className="title">Sun</div>
                    <img src="http://ultraimg.com/images/bosikG0.png"/>
                    <div className="temp"><span className="value">26<span className="degree">&deg;C</span></span><span
                        className="separator">/</span><span className="value">22<span
                        className="degree">&deg;C</span></span></div>
                </div>
            </div>
        </div>
    );
}

Weather.propTypes = {};

export default Weather;