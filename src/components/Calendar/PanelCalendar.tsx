import { months } from 'helpers/dateValue';
import { IPanelCalendar } from 'types/interfaices';
import removeIcon from 'img/remove.png';
import styles from 'pages/calendar/calendar.module.scss';
import classNames from 'classnames/bind';

function PanelCalendar({ list, date, removeEl }: IPanelCalendar) {
    const listItems = list
        ? list.map((el) => (
              <li key={el.id} className={styles.listEvent}>
                  <div className={styles.listEvent__time}>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className={styles.listEvent__title}>{el.task}</div>
                  <button type='button' className={styles.listEvent__button} onClick={() => removeEl(el.id)}>
                      <img className={styles.listEvent__img} src={removeIcon} alt='remove' />
                  </button>
              </li>
          ))
        : null;

    const cx = classNames.bind(styles);

    return (
        <div className={cx('panelCalendar', 'panelCalendar_left')}>
            <div className={styles.panelCalendar__header}>
                <div className={styles.panelCalendar__title}>
                    {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
                </div>
            </div>
            <ul className={styles.listEvents}>{listItems}</ul>
        </div>
    );
}

export default PanelCalendar;
