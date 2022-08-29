import {useState} from 'react'
import './calendar.css'
import PanelCalendar from "../../components/calendar/PanelCalendar";
import {Calendar as CalendarComponent} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {months} from "../../helpers/dateValue";
import FormCalendar from "../../components/calendar/FormCalendar";
import {initShopList, tasksCalendar} from "../../mock/mock";
import {shoppingList} from "../../components/tasks/initialData";

const classNames = ['panel panel-calendar', 'panel panel-calendar right']
const calendarEvent: string = 'calendarEvent'

function Calendar() {

    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [userInput, setUserInput] = useState('')
    const [userInputTimeStart, setUserInputTimeStart] = useState('00:00')
    const [userInputTimeFinish, setUserInputTimeFinish] = useState('00:00')

    const dateValue = `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`

    const initialValue = localStorage.getItem(calendarEvent)

    const obj = {}
    // if (initialValue) {
    //     obj[dateValue] = JSON.parse(initialValue)[dateValue]
    // } else {
    //     obj[dateValue] = tasksCalendar
    // }

    obj[dateValue] = initialValue ? JSON.parse(initialValue)[dateValue] : tasksCalendar

    const [tasks, setTasks] = useState(obj);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleChangeTimeStart = (e) => {
        setUserInputTimeStart(e.currentTarget.value)
    }
    const handleChangeTimeFinish = (e) => {
        setUserInputTimeFinish(e.currentTarget.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
        setUserInputTimeStart('00:00')
        setUserInputTimeFinish('00:00')
    }

    function addTask(task) {
        const newTask = {
            id: Math.random().toString(36).substring(2, 9),
            timeStart: userInputTimeStart,
            timeFinish: userInputTimeFinish,
            task: userInput
        }
        if (!task) {
            alert('Nothing!!!')
        } else {
            let oldTask = tasks[dateValue]

            const addTask = oldTask ? [...oldTask, newTask] : [newTask]

            const readyTask = {
                ...tasks,
                [dateValue]: addTask
            }
            setTasks(readyTask)
            localStorage.setItem('calendarEvent', JSON.stringify(readyTask))
        }
    }

    function removeEl(id) {
        const addTask = tasks[dateValue].filter((el) => el.id !== id)
        const readyTask = {
            ...tasks,
            [dateValue]: addTask
        }
        setTasks(readyTask)
        localStorage.setItem(calendarEvent, JSON.stringify(readyTask))
    }

    return (
        <div className="page page-calendar">
            <div className="bg"></div>
            <div className="overlay"></div>
            <PanelCalendar list={tasks[`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`]}
                           date={date} className={classNames[0]} removeEl={removeEl}/>
            <div className={classNames[1]}><CalendarComponent onChange={onChange} value={value}
                                                              onClickDay={(value) => setDate(value)}/>
                <FormCalendar handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput}
                              handleChangeTimeStart={handleChangeTimeStart}
                              handleChangeTimeFinish={handleChangeTimeFinish} userInputTimeStart={userInputTimeStart}
                              userInputTimeFinish={userInputTimeFinish}/>

            </div>
        </div>
    )
}

export default Calendar
