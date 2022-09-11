import React, { FormEvent, useState } from 'react';
import { months } from 'helpers/dateValue';
import { CALENDAR_EVENT } from 'constants/constanst';
import { tasksCalendar } from 'mock/mock';
import { ICalendarTask, IInitialTask } from 'types/interfaices';

export const useCalendarLogic = () => {
    const [mapValueDate, setMapValueDate] = useState<Date>(new Date());
    const [date, setDate] = useState<Date>(new Date());
    const [userInput, setUserInput] = useState<string>('');
    const [userInputTimeStart, setUserInputTimeStart] = useState<string>('00:00');
    const [userInputTimeFinish, setUserInputTimeFinish] = useState<string>('00:00');

    const dateValue = `${mapValueDate.getDate()} ${months[mapValueDate.getMonth()]} ${mapValueDate.getFullYear()}`;

    const initialValue: string | null = localStorage.getItem(CALENDAR_EVENT);

    let initialTasks = {};
    if (initialValue) {
        initialTasks = JSON.parse(initialValue);
    } else {
        initialTasks[dateValue] = tasksCalendar;
    }

    const [tasks, setTasks] = useState<IInitialTask>(initialTasks);

    function addTask(task) {
        const newTask = {
            id: Math.random().toString(36).substring(2, 9),
            timeStart: userInputTimeStart,
            timeFinish: userInputTimeFinish,
            task: userInput,
        };
        if (task) {
            const oldTask = tasks[dateValue];
            const addNewTask = oldTask ? [...oldTask, newTask] : [newTask];
            const readyTask = {
                ...tasks,
                [dateValue]: addNewTask,
            };
            setTasks(readyTask);
            localStorage.setItem('calendarEvent', JSON.stringify(readyTask));
        }
    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);
    };

    const handleChangeTimeStart = (e: FormEvent<HTMLInputElement>) => {
        setUserInputTimeStart(e.currentTarget.value);
    };
    const handleChangeTimeFinish = (e: FormEvent<HTMLInputElement>) => {
        setUserInputTimeFinish(e.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
        setUserInputTimeStart('00:00');
        setUserInputTimeFinish('00:00');
    };

    const removeEl = (id: string) => {
        const addNewTask = tasks[dateValue].filter((el) => el.id !== id);
        const readyTask = {
            ...tasks,
            [dateValue]: addNewTask,
        };
        setTasks(readyTask);
        localStorage.setItem(CALENDAR_EVENT, JSON.stringify(readyTask));
    };

    const list: ICalendarTask[] = tasks[`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`];

    return {
        date,
        list,
        setDate,
        removeEl,
        setMapValueDate,
        mapValueDate,
        handleSubmit,
        handleChange,
        userInput,
        handleChangeTimeStart,
        handleChangeTimeFinish,
        userInputTimeStart,
        userInputTimeFinish,
    };
};
