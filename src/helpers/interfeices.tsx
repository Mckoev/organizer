export interface IMethods {
    POST: string
}

export interface IWeatherBox {
    date: string
    icon_url: string
    maxTemp: number | string
    minTemp: number | string
}

export interface IElement {
    el: IWeatherBox
}