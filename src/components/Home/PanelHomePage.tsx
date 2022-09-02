import {useAppSelector} from '../../reduxToolkit/hooks'

function PanelHomePage() {
    const temp: string = useAppSelector((state) => state.weatherForOneDay.temp)
    const condition: string = useAppSelector((state) => state.weatherForOneDay.condition)
    const icon_url: string = useAppSelector((state) => state.weatherForOneDay.icon_url)

    return (
        <>
            <div className="condition">{condition}</div>
            <img src={icon_url} alt='icon'/>
            <div className="span temp">
                {temp}
                <span className="degree">&deg;C</span>
            </div>
        </>
    )
}


export default PanelHomePage
