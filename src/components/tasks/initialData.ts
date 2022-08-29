export const LISTS_NAMES = {
    shoppingList: 'Shopping list',
    todoList: 'To-do list',
    longtermTasks: 'Long-term tasks',
}

export const shoppingList: string = 'shoppingList'
export const todoList: string = 'todoList'
export const longtermTasks: string = 'longtermTasks'

export const initShopList = [
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
]

export const initTodoList = [
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
]

export const initLongtermTasks = [
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
]
