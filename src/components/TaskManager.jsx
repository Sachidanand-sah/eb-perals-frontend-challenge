// src/components/TaskManager.jsx
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [warning, setWarning] = useState('');

  const addTask = () => {
    if (!newTask.trim()) {
      setWarning('Please enter a task.');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
    setWarning('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <section className="py-12 bg-purple-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8">
        Task Manager
      </h2>
      <p className="text-center text-gray-600 mb-8">Your daily to-do list</p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {warning && <p className="text-red-500 mb-4">{warning}</p>}
        {tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        ))}
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task"
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Add Task
          </button>
        </div>
      </div>
    </section>
  );
}

export default TaskManager;