import React from 'react';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function taskCreation(): JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const dispatch = useDispatch();
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        dispatch({ type: 'tasks/addTask', payload: { title, description, isDone: false }});
        setTitle('');
        setDescription('');
    }
    return (
        <div>
            <h1>Форма создания задачи</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button type="submit">Создать</button>
            </form>
        </div>
    );
}