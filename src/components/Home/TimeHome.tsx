import { months } from 'helpers/dateValue';
import { useEffect, useRef, useState } from 'react';
import { DAYS } from 'constants/constanst';

function TimeHome() {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
    const [date, setDate] = useState<Date>(new Date());
    const timerId = useRef<NodeJS.Timeout | null>(null); // eslint-disable-line

    const startTimer = () => {
        timerId.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date());
        }, 1000);
    };

    useEffect(() => startTimer(), []);

    return (
        <div className='span time'>
            <div>{time}</div>
            <div className='span date'>{`${DAYS[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</div>
        </div>
    );
}

export default TimeHome;
