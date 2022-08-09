export interface IMethods {
    GET: string
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

export interface INewsBox {
    creator: string | null
    title: string
    description: string
    date: string
    source_id: string
    image_url: string
    link: string
}

export interface IElementNews {
    el: INewsBox
}

export interface IMap {
    center: any
    zoom: any
}

export interface IObjectMap {
    mapData: any
}