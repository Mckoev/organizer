import { FormEvent, useState } from 'react';
import './calendar.css';
import { Calendar as CalendarComponent } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CALENDAR_EVENT } from 'constants/constanst';
import { months } from 'helpers/dateValue';
import { tasksCalendar } from 'mock/mock';
import PanelCalendar from 'components/Calendar/PanelCalendar';
import FormCalendar from 'components/Calendar/FormCalendar';
import { ITask } from 'types/interfaices';

function Calendar() {
    const [value, onChange] = useState<Date>(new Date());
    const [date, setDate] = useState<Date>(new Date());
    const [userInput, setUserInput] = useState<string>('');
    const [userInputTimeStart, setUserInputTimeStart] = useState<string>('00:00');
    const [userInputTimeFinish, setUserInputTimeFinish] = useState<string>('00:00');

    const dateValue: string = `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`;

    const initialValue: string | null = localStorage.getItem(CALENDAR_EVENT);

    let initialTasks = {};
    if (initialValue) {
        initialTasks = JSON.parse(initialValue);
    } else {
        initialTasks[dateValue] = tasksCalendar;
    }

    const [tasks, setTasks] = useState(initialTasks);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);
    };

    const handleChangeTimeStart = (e: FormEvent<HTMLInputElement>) => {
        setUserInputTimeStart(e.currentTarget.value);
    };
    const handleChangeTimeFinish = (e: FormEvent<HTMLInputElement>) => {
        setUserInputTimeFinish(e.currentTarget.value);
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
        setUserInputTimeStart('00:00');
        setUserInputTimeFinish('00:00');
    }

    function addTask(task) {
        const newTask = {
            id: Math.random().toString(36).substring(2, 9),
            timeStart: userInputTimeStart,
            timeFinish: userInputTimeFinish,
            task: userInput,
        };
        if (!task) {
            alert('Nothing!!!');
        } else {
            const oldTask = tasks[dateValue];
            const addTask = oldTask ? [...oldTask, newTask] : [newTask];
            const readyTask = {
                ...tasks,
                [dateValue]: addTask,
            };
            setTasks(readyTask);
            localStorage.setItem('calendarEvent', JSON.stringify(readyTask));
        }
    }

    function removeEl(id) {
        const addTask = tasks[dateValue].filter((el) => el.id !== id);
        const readyTask = {
            ...tasks,
            [dateValue]: addTask,
        };
        setTasks(readyTask);
        localStorage.setItem(CALENDAR_EVENT, JSON.stringify(readyTask));
    }

    return (
        <div className='page page-calendar'>
            <div className='overlay' />
            <PanelCalendar
                list={tasks[`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`]}
                date={date}
                className='panel panel-calendar'
                removeEl={removeEl}
            />
            <div className='panel panel-calendar right'>
                <CalendarComponent onChange={onChange} value={value} onClickDay={(value) => setDate(value)} />
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
