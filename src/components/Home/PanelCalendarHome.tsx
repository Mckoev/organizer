import { tasksCalendar } from '../../mock/mock';
import { months } from '../../helpers/dateValue';
import { CALENDAR_EVENT } from '../../constants/constanst';
import { ICalendarTask, IInitialTask } from '../../types/interfaices';

function PanelCalendarHome() {
    const value: Date = new Date();
    const dateValue: string = `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`;
    const initialValue: string | null = localStorage.getItem(CALENDAR_EVENT);

    let initialTasks: IInitialTask = {};
    if (initialValue) {
        initialTasks = JSON.parse(initialValue);
    } else {
        initialTasks[dateValue] = tasksCalendar;
    }

    const list: ICalendarTask[] = initialTasks[dateValue];

    const listItems = list
        ? list.slice(0, 3).map((el, index) => (
              <li key={index}>
                  <div className='time'>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className='title'>{el.task}</div>
              </li>
          ))
        : null;

    const isManyTasks: boolean = list ? list.length - list.slice(0, 3).length > 0 : false;
    const isTasksToday: boolean = !!list && list.length !== 0;

    return (
        <div className='panel panel-calendar'>
            <ul>
                {listItems}
                {isManyTasks ? (
                    <li className='other'>
                        <div className='plus' />
                        <div className='title'>... and {list.length - list.slice(0, 3).length} other tasks</div>
                    </li>
                ) : (
                    <></>
                )}
                {isTasksToday ? (
                    <></>
                ) : (
                    <li className='other'>
                        <div className='title'> Нет задач на сегодня!</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PanelCalendarHome;
