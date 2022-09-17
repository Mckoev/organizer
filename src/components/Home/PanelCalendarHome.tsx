import { CALENDAR_EVENT } from 'constants/constanst';
import { months } from 'helpers/dateValue';
import { ICalendarTask, IInitialTask } from 'types/interfaices';
import { tasksCalendar } from 'mock/mock';
import classNames from 'classnames/bind';
import styles from 'pages/home/home.module.scss';

function PanelCalendarHome() {
    const value: Date = new Date();
    const dateValue = `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear()}`;
    const initialValue: string | null = localStorage.getItem(CALENDAR_EVENT);

    const cx = classNames.bind(styles);

    let initialTasks: IInitialTask = {};
    if (initialValue) {
        initialTasks = JSON.parse(initialValue);
    } else {
        initialTasks[dateValue] = tasksCalendar;
    }

    const list: ICalendarTask[] = initialTasks[dateValue];

    const listItems = list
        ? list.slice(0, 3).map((el) => (
              <li key={el.id}>
                  <div className={styles.time}>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className={styles.title}>{el.task}</div>
              </li>
          ))
        : null;

    const isManyTasks: boolean = list ? list.length - list.slice(0, 3).length > 0 : false;
    const isTasksToday: boolean = !!list && list.length !== 0;

    return (
        <div className={cx('panel', 'panelCalendar')}>
            <ul>
                {listItems}
                {isManyTasks && (
                    <li className={styles.other}>
                        <div className={styles.plus} />
                        <div className={styles.title}>... and {list.length - list.slice(0, 3).length} other events</div>
                    </li>
                )}
                {!isTasksToday && (
                    <li className={styles.other}>
                        <div className={styles.title}> Нет задач на сегодня!</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PanelCalendarHome;
