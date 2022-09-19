import { months } from 'helpers/dateValue';
import { useEffect, useRef, useState } from 'react';
import { DAYS } from 'constants/constanst';
import classNames from 'classnames/bind';
import styles from 'pages/home/home.module.scss';

function PanelTime() {
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

    const cx = classNames.bind(styles);

    return (
        <div className={cx('panel', 'home__panel', 'home__panel_width', 'home__panel_loc-left')}>
            <div className={styles.panel__time}>{time}</div>
            <div className={styles.text}>{`${DAYS[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</div>
        </div>
    );
}

export default PanelTime;
