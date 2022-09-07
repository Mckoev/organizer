import { IElement } from 'types/interfaices';
import { DAYS_RUS } from 'constants/constanst';

function ContentForForecast({ el }: IElement) {
    return (
        <div className='box'>
            <div className='title'>{DAYS_RUS[new Date(el.date).getDay()]}</div>
            <img src={el.icon_url} alt='icon weather' />
            <div className='temp'>
                <span className='value'>
                    {el.maxTemp}
                    <span className='degree'>&deg;C</span>
                </span>
                <span className='separator'>/</span>
                <span className='value'>
                    {el.minTemp}
                    <span className='degree'>&deg;C</span>
                </span>
            </div>
        </div>
    );
}

export default ContentForForecast;
