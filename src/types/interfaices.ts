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

export interface INews {
    category?: string[];
    content?: string[] | string | null;
    country?: string[];
    creator: string[] | string;
    description: string;
    image_url: string;
    keywords?: null;
    language?: string;
    link: string;
    pubDate: string;
    source_id: string;
    title: string;
    video_url?: null;
}

export interface IStyle {
    height: number;
    left: number;
    position: undefined;
    right: undefined;
    top: number;
    width: string;
}
