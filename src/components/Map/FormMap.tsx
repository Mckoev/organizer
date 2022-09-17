import { useFormLogic } from 'hooks/useFormLogic';
import { IFormLogic } from 'types/interfaices';

function FormMap() {
    const { changeCity, setInputCity, country, location }: IFormLogic = useFormLogic();

    return (
        <form className='weatherForm' onSubmit={(e) => changeCity(e)}>
            <input className='text-field__input' type='name' id='name' name='city' onChange={(e) => setInputCity(e.target.value)} />
            <label className='text-field__label' htmlFor='name'>
                {location}, {country}
            </label>
        </form>
    );
}

export default FormMap;
