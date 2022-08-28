import {IElement} from "../../helpers/interfeices";

function ContentForForecast({el}: IElement) {
    const DAYS: string[] = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']

    const listWeather = (
        <div className="box">
            <div className="title">{DAYS[new Date(el.date).getDay()]}</div>
            <img src={el.icon_url} alt="icon weather"/>
            <div className="temp">
        <span className="value">
          {el.maxTemp}
            <span className="degree">&deg;C</span>
        </span>
                <span className="separator">/</span>
                <span className="value">
          {el.minTemp}
                    <span className="degree">&deg;C</span>
        </span>
            </div>
        </div>
    )

    return <>{listWeather}</>
}

export default ContentForForecast
