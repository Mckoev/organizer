import 'pages/calendar/calendar.module.scss';
import { Calendar as CalendarComponent } from 'react-calendar';
import classNames from 'classnames/bind';
import PanelCalendar from 'components/Calendar/PanelCalendar';
import FormCalendar from 'components/Calendar/FormCalendar';
import { useCalendarLogic } from 'hooks/useCalendarLogic';
import { ICalendarLogic } from 'types/interfaices';
import styles from './calendar.module.scss';
import 'components/Calendar/calendarComponent.module.scss';

function Calendar() {
    const {
        date,
        list,
        setDate,
        removeEl,
        setMapValueDate,
        mapValueDate,
        handleSubmit,
        handleChange,
        userInput,
        handleChangeTimeStart,
        handleChangeTimeFinish,
        userInputTimeStart,
        userInputTimeFinish,
    }: ICalendarLogic = useCalendarLogic();

    const cx = classNames.bind(styles);

    return (
        <div className={styles.calendar}>
            <PanelCalendar list={list} date={date} removeEl={removeEl} />
            <div className={cx('panelCalendar', 'panelCalendar_right')}>
                <CalendarComponent onChange={setMapValueDate} value={mapValueDate} onClickDay={(value) => setDate(value)} />
                <FormCalendar
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    userInput={userInput}
                    handleChangeTimeStart={handleChangeTimeStart}
                    handleChangeTimeFinish={handleChangeTimeFinish}
                    userInputTimeStart={userInputTimeStart}
                    userInputTimeFinish={userInputTimeFinish}
                />
            </div>
        </div>
    );
}

export default Calendar;
