import './calendar.css';
import { Calendar as CalendarComponent } from 'react-calendar';
import 'components/Calendar/calendarComponent.css';
import PanelCalendar from 'components/Calendar/PanelCalendar';
import FormCalendar from 'components/Calendar/FormCalendar';
import { useCalendarLogic } from 'hooks/useCalendarLogic';
import { ICalendarLogic } from 'types/interfaices';

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

    return (
        <div className='page page-calendar'>
            <div className='overlay' />
            <PanelCalendar list={list} date={date} className='panel panel-calendar' removeEl={removeEl} />
            <div className='panel panel-calendar right'>
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
