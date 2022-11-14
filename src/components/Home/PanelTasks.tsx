import { initShopList } from 'mock/mock';
import { ITask } from 'types/interfaices';
import { LISTS_NAMES } from 'constants/constanst';
import styles from 'pages/home/home.module.scss';
import classNames from 'classnames/bind';

function PanelTasks() {
    const initialValue: string | null = localStorage.getItem(LISTS_NAMES.SHOPPING_LIST);
    const list: ITask[] = initialValue ? JSON.parse(initialValue) : initShopList;

    const cx = classNames.bind(styles);

    const listItems = list.slice(0, 3).map((el) => (
        <li key={el.id} className={cx({ eventSwitcher__checked: el.complete }, 'eventSwitcher__event')}>
            <div className={styles.eventSwitcher__check} />
            <div className={styles.eventSwitcher__eventTitle}>{el.task}</div>
        </li>
    ));

    const isManyTasks = list.length - list.slice(0, 3).length > 0;

    return (
        <div className={`${styles.panelTasks} ${styles.panelTasks_loc_right}`}>
            <ul className={styles.eventSwitcher}>
                {listItems}
                {isManyTasks && (
                    <li className={styles.eventSwitcher__event}>
                        <div className={styles.eventSwitcher__other}>... and {list.length - list.slice(0, 3).length} other purchases</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PanelTasks;
