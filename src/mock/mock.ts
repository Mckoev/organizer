import { ICalendarTask, ITask } from 'types/interfaices';
import { getID } from 'helpers/getID';

export const tasksCalendar: ICalendarTask[] = [
    {
        id: getID(),
        timeStart: '9:00',
        timeFinish: '10:00',
        task: 'Meeting',
    },
    {
        id: getID(),
        timeStart: '11:00',
        timeFinish: '13:00',
        task: 'Go to bank',
    },
    {
        id: getID(),
        timeStart: '16:00',
        timeFinish: '17:00',
        task: 'Dinner',
    },
    {
        id: getID(),
        timeStart: '22:00',
        timeFinish: '23:00',
        task: 'Party',
    },
];

export const initShopList: ITask[] = [
    {
        id: getID(),
        task: 'Milk',
        complete: false,
    },
    {
        id: getID(),
        task: 'Bread',
        complete: false,
    },
    {
        id: getID(),
        task: 'Cheese',
        complete: false,
    },
    {
        id: getID(),
        task: 'Beer',
        complete: false,
    },
];

export const initTodoList: ITask[] = [
    {
        id: getID(),
        task: 'Cleaning',
        complete: false,
    },
    {
        id: getID(),
        task: 'Washing',
        complete: false,
    },
    {
        id: getID(),
        task: 'Shopping',
        complete: false,
    },
    {
        id: getID(),
        task: 'Pay bills',
        complete: true,
    },
    {
        id: getID(),
        task: 'Dusting',
        complete: false,
    },
];

export const initLongTermTasks: ITask[] = [
    {
        id: getID(),
        task: 'Prepare boiler',
        complete: false,
    },
    {
        id: getID(),
        task: 'Bya a sofa',
        complete: false,
    },
    {
        id: getID(),
        task: 'Car service',
        complete: false,
    },
];
