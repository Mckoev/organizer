import React, {useEffect, useRef, useState} from 'react';

function TimeHome() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date, setDate] = useState(new Date())
    const timerId = useRef<NodeJS.Timeout | null>(null);

    const days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AVG', 'SEP', 'OCT', 'NOV', 'DEC']


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
            <div className="span date">{`${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth() -1]} ${date.getFullYear()}`}</div>
        </div>
    );
}

TimeHome.propTypes = {};

export default TimeHome;