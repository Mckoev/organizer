import React from 'react'
import './calendar.css'

function Calendar() {
  return (
    <div className="page page-calendar">
      <div className="bg"></div>
      <div className="overlay"></div>
      <div className="panel panel-calendar left">
        <div className="header">
          <div className="title">Today</div>
          <div className="date">Juny 25, 2015</div>
        </div>
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
          <li>
            <div className="time">23:00 - 24:00</div>
            <div className="title">Drinking</div>
          </li>
        </ul>
      </div>
      <div className="panel panel-calendar right">
        <div className="header">
          <div className="title">Tomorrow</div>
          <div className="date">Juny 26, 2015</div>
        </div>
        <ul>
          <li>
            <div className="time">9:00 - 10:00</div>
            <div className="title">Meeting</div>
          </li>
          <li>
            <div className="time">11:00 - 13:00</div>
            <div className="title">Go to bank</div>
          </li>
          <li>
            <div className="time">16:00 - 17:00</div>
            <div className="title">Dinner</div>
          </li>
          <li>
            <div className="time">22:00 - 24:00</div>
            <div className="title">Party</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Calendar
