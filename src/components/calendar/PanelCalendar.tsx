import React from 'react';
import {months} from "../../helpers/dateValue";

function PanelCalendar({list, date, className}) {

    const listItems = list ?  list.map((el, index) => (
        <li key={index} >
            <div className="time">{el.timeStart} - {el.timeFinish}</div>
            <div className="title">{el.task}</div>
        </li>
    )) : null

    return (
        <div className={className}>
            <div className="header">
                <div className="title">{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</div>
            </div>
            <ul>
                {listItems}
            </ul></div>


    );
}


export default PanelCalendar;