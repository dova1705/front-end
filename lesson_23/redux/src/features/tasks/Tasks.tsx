import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function Tasks(): JSX.Element {
    // получаем централизованное состояние
    const tasks = useSelector((state: RootState) => state.tasks); // RootState - тип централизованного состояния
    const dispatch = useDispatch(); // функция для изменения централизованного состояния
    function handleChangeStatus(id: string): void {
        dispatch({ type: 'tasks/changeStatus', payload: id });
    }
    function handleRemove (id: string): void {
        dispatch({ type: 'tasks/removeTask', payload: id })
    }
    return (
    <div>
        <h1>Tasks</h1>
        <ul>
            {tasks.map((task) =>(
                <li key={task.id}>
                    <span style={task.isDone? {textDecoration: 'line-through'}: {textDecoration: 'none'}}>
                        <b>{task.title}</b> {task.description}
                    </span>
                    <DeleteIcon onClick={() => handleRemove(task.id)} />
                    {task.isDone ? <CheckBoxIcon onClick={() => handleChangeStatus(task.id)} /> : 
                    <CheckBoxOutlineBlankIcon onClick={() => handleChangeStatus(task.id)} />}
                </li>
            ))}
        </ul>
    </div>
  )
}
