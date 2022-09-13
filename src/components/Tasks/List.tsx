import React, { useCallback, useState } from 'react';
import { IList, ITask } from 'types/interfaices';
import { getID } from 'helpers/getID';
import removeIcon from 'img/remove.png';
import Form from './Form';

function List({ name, initialStandardValue, store, textTitle }: IList) {
    const initialValue: string | null = localStorage.getItem(store);
    const [list, setList] = useState<ITask[]>(initialValue ? JSON.parse(initialValue) : initialStandardValue);
    const [userInput, setUserInput] = useState<string>('');

    const addTask = useCallback(
        (e) => {
            if (e) {
                const newList = [
                    ...list,
                    ...[
                        {
                            id: getID(),
                            task: e,
                            complete: false,
                        },
                    ],
                ];
                setList(newList);
                localStorage.setItem(store, JSON.stringify(newList));
            }
        },
        [list, store]
    );

    function changeElement(id) {
        const newList = [...list.map((el) => (el.id === id ? { ...el, complete: !el.complete } : { ...el }))];
        setList(newList);
        localStorage.setItem(store, JSON.stringify(newList));
    }

    function removeEl(id) {
        const newList = [...list.filter((el) => el.id !== id)];
        setList(newList);
        localStorage.setItem(store, JSON.stringify(newList));
    }

    const handleChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setUserInput(e.currentTarget.value);
        },
        [setUserInput]
    );

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addTask(userInput);
            setUserInput('');
        },
        [addTask, userInput]
    );

    /* eslint-disable */

    const listItems = list.map((el) => (
        <li key={el.id} className={el.complete ? 'checked' : ''}>
            <div className='check' onClick={() => changeElement(el.id)} />
            <div className='title' onClick={() => changeElement(el.id)}>
                {el.task}
            </div>
            <button type='button' className='button remove' onClick={() => removeEl(el.id)}>
                <img src={removeIcon} alt='remove' />
            </button>
        </li>
    ));

    /* eslint-enable */

    return (
        <div className='panel panel-taskList'>
            <div className='header'>
                <div className='title'>
                    {name} ({list.length})
                </div>
            </div>
            <div className='newItem'>
                <div className='text'>
                    <span className='title'>add new {textTitle}:</span>
                </div>
            </div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput} />
            <ul>{listItems}</ul>
        </div>
    );
}

export default List;
