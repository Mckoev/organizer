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
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form__groupFormInputs}>
            <div className={styles.form__groupInputs}>
                <div className={styles.form__group}>
                    <input type='time' className={styles.form__field} value={userInputTimeStart} onChange={handleChangeTimeStart} />
                    <label htmlFor='name' className={styles.form__label}>
                        Input time to start event:
                    </label>
                </div>
                <div className={styles.form__group}>
                    <input type='time' className={styles.form__field} value={userInputTimeFinish} onChange={handleChangeTimeFinish} />
                    <label htmlFor='name' className={styles.form__label}>
                        Input time to finish event:
                    </label>
                </div>
                <div className={styles.form__group}>
                    <input value={userInput} type='text' onChange={handleChange} className={styles.form__field} />
                    <label htmlFor='name' className={styles.form__label}>
                        Text event:
                    </label>
                </div>
            </div>
            <div className={styles.buttonCalendar} onClick={(e) => handleSubmit(e)}>
                <div className={styles.outer}>
                    <div className={styles.height}>
                        <div className={styles.inner}>Создать</div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
