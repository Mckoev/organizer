import { useFormLogic } from 'hooks/useFormLogic';
import { IFormLogic } from 'types/interfaices';
import styles from 'pages/map/map.module.scss';
import classNames from 'classnames/bind';

function FormMap() {
    const { changeCity, setInputCity, country, location }: IFormLogic = useFormLogic();

    const cx = classNames.bind(styles);

    return (
        <div className={cx('title', 'pageMap__title')}>
            <form className={styles.formCity} onSubmit={(e) => changeCity(e)}>
                <input className={styles.formCity__input} type='name' id='name' name='city' onChange={(e) => setInputCity(e.target.value)} />
                <label className={styles.formCity__label} htmlFor='name'>
                    {location}, {country}
                </label>
            </form>
        </div>
    );
}

export default FormMap;
