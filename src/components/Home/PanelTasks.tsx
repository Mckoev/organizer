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
        <li key={el.id} className={cx({ checked: el.complete }, '')}>
            <div className={styles.check} />
            <div className={styles.title}>{el.task}</div>
        </li>
    ));

    const isManyTasks = list.length - list.slice(0, 3).length > 0;

    return (
        <div className={cx('panel', 'panelTasks')}>
            <ul>
                {listItems}
                {isManyTasks && (
                    <li className={styles.other}>
                        <div className={styles.plus} />
                        <div className={styles.title}>... and {list.length - list.slice(0, 3).length} other purchases</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PanelTasks;
