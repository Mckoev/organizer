import Spinner from '../../pages/spinner/Spinner';
import { useAppSelector } from 'reduxToolkit/hooks';
import ContentForPanel from './ContentForPanel';

function PanelWeatherPage() {
    const isLoadingWeatherForManyDays: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForManyDays);

    return <div className='panel panel-now'>{isLoadingWeatherForManyDays ? <Spinner /> : <ContentForPanel />}</div>;
}

export default PanelWeatherPage;
