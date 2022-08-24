import {useState} from 'react'
import './calendar.css'
import PanelCalendar from "../../components/calendar/PanelCalendar";
import {Calendar as CalendarComponent} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {months} from "../../helpers/dateValue";

const dates = ['juny 25, 2015', 'juny 26, 2015']
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

function Calendar() {

  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());


  return (
    <div className="page page-calendar">
      <div className="bg"></div>
      <div className="overlay"></div>
      <PanelCalendar list={arr} date={date} className={classNames[0]}/>
      <div className={classNames[1]}><CalendarComponent onChange={onChange} value={value} onClickDay={(value, event) => setDate(value)}/>
      </div>

    </div>
  )
}

export default Calendar
