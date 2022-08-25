import {useState} from 'react'
import './calendar.css'
import PanelCalendar from "../../components/calendar/PanelCalendar";
import {Calendar as CalendarComponent} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {months} from "../../helpers/dateValue";
import Form from "../../components/tasks/Form";

const classNames = ['panel panel-calendar', 'panel panel-calendar right']

const arr = [{
  timeStart: '8:00',
  timeFinish: '9:00',
  task: 'Shopping'
},
  {
    timeStart: '10:00',
    timeFinish: '12:00',
    task: 'Meet Tom'
  },
  {
    timeStart: '18:00',
    timeFinish: '20:00',
    task: 'Go to cinema'
  },
  {
    timeStart: '23:00',
    timeFinish: '23:00',
    task: 'Drinking'
  },
]

const arr2 = [{
  timeStart: '9:00',
  timeFinish: '10:00',
  task: 'Meeting'
},
  {
    timeStart: '11:00',
    timeFinish: '13:00',
    task: 'Go to bank'
  },
  {
    timeStart: '16:00',
    timeFinish: '17:00',
    task: 'Dinner'
  },
  {
    timeStart: '22:00',
    timeFinish: '23:00',
    task: 'Party'
  },
]

//{day1: [{}, {}, {}],
//  day2: [{}, {}, {}] }

function Calendar() {

  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [userInput, setUserInput] = useState('')


  const obj = {}
  obj[`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`] = arr2

  const [tasks, setTasks] = useState(obj);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  function addTask(task) {
    if (!task) {
      alert('Nothing!!!')
    } else {
      setTasks({
        ...tasks,
        [`${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`] : [{
          timeStart: '22:00',
          timeFinish: '23:00',
          task: `Party ${task}`
        }]
      })
      //localStorage.setItem(store, JSON.stringify(newList))
    }
  }

  return (
    <div className="page page-calendar">
      <div className="bg"></div>
      <div className="overlay"></div>
      <PanelCalendar list={tasks[`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`]} date={date} className={classNames[0]}/>
      <div className={classNames[1]}><CalendarComponent onChange={onChange} value={value} onClickDay={(value, event) => setDate(value)}/>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput} />

      </div>

    </div>
  )
}

export default Calendar
