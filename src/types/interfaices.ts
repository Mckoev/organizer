import React, { FormEvent } from 'react';

export interface IWeatherBox {
    id: string;
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

interface IStyle {
    height: number;
    left: number;
    position: undefined;
    right: undefined;
    top: number;
    width: string;
}

export interface IRow {
    item: INews;
    index: number;
    style: IStyle;
}

export interface ITask {
    id: string;
    task: string;
    complete: boolean;
}

export interface IList {
    name: string;
    initialStandardValue: ITask[];
    store: string;
    textTitle: string;
}

export interface IFormTask {
    userInput: string;
    handleSubmit: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface IPanelCalendar {
    list: ICalendarTask[];
    date: Date;
    className: string;
    removeEl: (id: string) => void;
}

export interface IFormCalendar {
    handleSubmit: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    userInput: string;
    handleChange: (e: FormEvent<HTMLInputElement>) => void;
    userInputTimeStart: string;
    userInputTimeFinish: string;
    handleChangeTimeStart: (e: FormEvent<HTMLInputElement>) => void;
    handleChangeTimeFinish: (e: FormEvent<HTMLInputElement>) => void;
}

export interface IInitialTask {
    [key: string]: ICalendarTask[];
}

export interface IMapData {
    center: number[];
    zoom: number;
}
