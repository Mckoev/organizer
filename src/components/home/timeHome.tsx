import {useEffect, useRef, useState} from 'react';
import {months} from "../../helpers/dateValue";

function TimeHome() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date, setDate] = useState(new Date())
    const timerId = useRef<NodeJS.Timeout | null>(null);

    const days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


     useEffect(() => startTimer(),[])

    const startTimer = () => {
        timerId.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date())
        }, 1000)
    }

    return (
        <div className="span time">
            <div>{ time }</div>
            <div className="span date">{`${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</div>
        </div>
    );
}

TimeHome.propTypes = {};

export default TimeHome;