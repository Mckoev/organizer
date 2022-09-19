import { useFormLogic } from 'hooks/useFormLogic';
import { IFormLogic } from 'types/interfaices';
import styles from 'pages/map/map.module.scss';

function FormMap() {
    const { changeCity, setInputCity, country, location }: IFormLogic = useFormLogic();

    return (
        <div className={styles.title}>
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
