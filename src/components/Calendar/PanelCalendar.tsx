import { months } from 'helpers/dateValue';
import { IPanelCalendar } from 'types/interfaices';
import removeIcon from 'img/remove.png';
import styles from 'pages/calendar/calendar.module.scss';

function PanelCalendar({ list, date, className, removeEl }: IPanelCalendar) {
    const listItems = list
        ? list.map((el) => (
              <li key={el.id}>
                  <div className={styles.time}>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className={styles.title}>{el.task}</div>
                  <button type='button' className={styles.remove} onClick={() => removeEl(el.id)}>
                      <img src={removeIcon} alt='remove' />
                  </button>
              </li>
          ))
        : null;

    return (
        <div className={className}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
                </div>
            </div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default PanelCalendar;
