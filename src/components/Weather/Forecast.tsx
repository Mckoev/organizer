import { useAppSelector } from 'reduxToolkit/hooks';
import { IWeatherBox } from 'types/interfaices';
import Spinner from '../../pages/spinner/Spinner';
import ContentForForecast from './ContentForForecast';

function Box() {
    const weatherDays: IWeatherBox[] = useAppSelector((state) => state.weatherForManyDays.arrState).slice(1);
    const isLoadingWeatherForManyDays: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForManyDays);
    console.log(weatherDays);

    const listItems = weatherDays.map((el, index) => (
        <div className='box' key={index}>
            {isLoadingWeatherForManyDays ? <Spinner /> : <ContentForForecast el={el} />}
        </div>
    ));

    return <div className='panel panel-forecast'>{listItems}</div>;
}

export default Box;
