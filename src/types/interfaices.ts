export interface IMethods {
    GET: string;
    POST: string;
}

export interface IWeatherBox {
    date: string;
    icon_url: string;
    maxTemp: number | string;
    minTemp: number | string;
}

export interface IElement {
    el: IWeatherBox;
}

export interface ICalendarTask {
    id: string;
    timeStart: string;
    timeFinish: string;
    task: string;
}
