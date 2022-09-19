import { useFormLogic } from 'hooks/useFormLogic';
import { IFormLogic } from 'types/interfaices';
import styles from 'pages/weather/weather.module.scss';

function FormWeather() {
    const { changeCity, setInputCity, country, location }: IFormLogic = useFormLogic();

    return (
        <form className={styles.formCity} onSubmit={(e) => changeCity(e)}>
            <div>Enter the desired city:</div>
            <input className={styles.formCity__input} type='name' id='name' name='city' onChange={(e) => setInputCity(e.target.value)} />
            <label className={styles.formCity__label} htmlFor='name'>
                {location}, {country}
            </label>
            <button type='submit' className={styles.formCity__button}>
                Найти
            </button>
        </form>
    );
}

export default FormWeather;
