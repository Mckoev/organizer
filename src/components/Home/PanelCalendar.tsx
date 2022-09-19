import { CALENDAR_EVENT } from 'constants/constanst';
import { months } from 'helpers/dateValue';
import { ICalendarTask, IInitialTask } from 'types/interfaices';
import { tasksCalendar } from 'mock/mock';
import styles from 'pages/home/home.module.scss';

function PanelCalendar() {
    const value: Date = new Date();
    const dateValue = `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`;
    const initialValue: string | null = localStorage.getItem(CALENDAR_EVENT);

    let initialTasks: IInitialTask = {};
    if (initialValue) {
        initialTasks = JSON.parse(initialValue);
    } else {
        initialTasks[dateValue] = tasksCalendar;
    }

    const list: ICalendarTask[] = initialTasks[dateValue];

    const listItems = list
        ? list.slice(0, 3).map((el) => (
              <li key={el.id} className={styles.eventSwitcher__event}>
                  <div className={styles.eventSwitcher__eventTime}>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className={styles.eventSwitcher__eventTitle}>{el.task}</div>
              </li>
          ))
        : null;

    const isManyTasks: boolean = list ? list.length - list.slice(0, 3).length > 0 : false;
    const isTasksToday: boolean = !!list && list.length !== 0;

    return (
        <div className={styles.panelTasks}>
            <ul className={styles.eventSwitcher}>
                {listItems}
                {isManyTasks && (
                    <li className={styles.eventSwitcher__event}>
                        <div className={styles.eventSwitcher__other}>... and {list.length - list.slice(0, 3).length} other events</div>
                    </li>
                )}
                {!isTasksToday && (
                    <li className={styles.eventSwitcher__event}>
                        <div className={styles.eventSwitcher__other}> Нет задач на сегодня!</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PanelCalendar;
