import { useAppSelector } from 'reduxToolkit/hooks';
import styles from 'pages/weather/weather.module.scss';
import classNames from 'classnames/bind';
import Spinner from '../../pages/spinner/Spinner';
import ContentForPanel from './ContentForPanel';

function PanelWeatherPage() {
    const isLoadingWeatherForManyDays: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForManyDays);
    const cx = classNames.bind(styles);

    return <div className={cx('panel_loc_left', 'panelNow')}>{isLoadingWeatherForManyDays ? <Spinner /> : <ContentForPanel />}</div>;
}

export default PanelWeatherPage;
