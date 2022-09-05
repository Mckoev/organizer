import { ICalendarTask, ITask } from '../types/interfaices';

export const tasksCalendar: ICalendarTask[] = [
    {
        id: Math.random().toString(36).substring(2, 9),
        timeStart: '9:00',
        timeFinish: '10:00',
        task: 'Meeting',
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        timeStart: '11:00',
        timeFinish: '13:00',
        task: 'Go to bank',
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        timeStart: '16:00',
        timeFinish: '17:00',
        task: 'Dinner',
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        timeStart: '22:00',
        timeFinish: '23:00',
        task: 'Party',
    },
];

export const initShopList: ITask[] = [
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Milk',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Bread',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Cheese',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Beer',
        complete: false,
    },
];

export const initTodoList: ITask[] = [
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Cleaning',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Washing',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Shopping',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Pay bills',
        complete: true,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Dusting',
        complete: false,
    },
];

export const initLongTermTasks: ITask[] = [
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Prepare boiler',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Bya a sofa',
        complete: false,
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        task: 'Car service',
        complete: false,
    },
];
