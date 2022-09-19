import { IFormCalendar } from 'types/interfaices';
import styles from 'pages/calendar/calendar.module.scss';
import classNames from 'classnames/bind';

/* eslint-disable */

function Form({
    handleSubmit,
    userInput,
    handleChange,
    userInputTimeStart,
    userInputTimeFinish,
    handleChangeTimeStart,
    handleChangeTimeFinish,
}: IFormCalendar) {
    const cx = classNames.bind(styles);

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formCalendar}>
            <div className={styles.formCalendar__groupInputs}>
                <div className={styles.formCalendar__group}>
                    <input type='time' className={styles.formCalendar__form__field} value={userInputTimeStart} onChange={handleChangeTimeStart} />
                    <label htmlFor='name' className={styles.formCalendar__form__label}>
                        Input time to start event:
                    </label>
                </div>
                <div className={styles.formCalendar__group}>
                    <input type='time' className={styles.formCalendar__form__field} value={userInputTimeFinish} onChange={handleChangeTimeFinish} />
                    <label htmlFor='name' className={styles.formCalendar__form__label}>
                        Input time to finish event:
                    </label>
                </div>
                <div className={styles.formCalendar__group}>
                    <input value={userInput} type='text' onChange={handleChange} className={styles.formCalendar__form__field} />
                    <label htmlFor='name' className={styles.formCalendar__form__label}>
                        Text event:
                    </label>
                </div>
            </div>
            <div className={styles.formCalendar__button} onClick={(e) => handleSubmit(e)}>
                <div className={styles.formCalendar__outer}>
                    <div className={styles.formCalendar__height}>
                        <div className={styles.formCalendar__inner}>Создать</div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
