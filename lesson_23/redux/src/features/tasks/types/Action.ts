import TaskCredentials from './TaskCredentials';

type Action =
| { type: 'tasks/addTask', payload: TaskCredentials }
| { type: 'tasks/changeStatus', payload: string } // id - это стринг в данном случае
| { type: 'tasks/removeTask', payload: string };
export default Action;


