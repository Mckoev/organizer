import {tasksCalendar} from "../../mock/mock";
import React, {useState} from "react";
import {months} from "../../helpers/dateValue";

function PanelCalendarHome() {
    const [value, onChange] = useState(new Date());

    const calendarEvent: string = 'calendarEvent'
    const dateValue = `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`

    const initialValue = localStorage.getItem(calendarEvent)

    let initialTasks = {}
    if (initialValue) {
        initialTasks = JSON.parse(initialValue)
    } else {
        initialTasks[dateValue] = tasksCalendar
    }

    const [tasks, setTasks] = useState(initialTasks);
    const list = tasks[dateValue]

    const listItems = list ? list.map((el, index) => (
        <li key={index}>
            <div className="time">{el.timeStart} - {el.timeFinish}</div>
            <div className="title">{el.task}</div>
        </li>
    )) : null

    return (
        <div className="panel panel-calendar">
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default PanelCalendarHome;