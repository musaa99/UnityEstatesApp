import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, deleteTask } from './redux/tasksSlice';

const TasksPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const [taskText, setTaskText] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), text: taskText }));
    setTaskText('');
  };

  const handleEditTask = task => {
    setEditingTask(task);
    setTaskText(task.text);
  };

  const handleUpdateTask = () => {
    dispatch(updateTask({ ...editingTask, text: taskText }));
    setTaskText('');
    setEditingTask(null);
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className='text-center'>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingTask ? (
        <div className='grid grid-cols-2 '>
          <input className='border-2'
            type="text"
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
          />
          <button  onClick={handleUpdateTask}>Update Task</button>
          <button onClick={() => setEditingTask(null)}>Cancel</button>
        </div>
      ) : (
        <div className='flex flex-col gap-2 '>
          <input className='  border-2'
            type="text"
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
          />
          <button className='bg-[green]' onClick={handleAddTask}>Add Task</button>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
