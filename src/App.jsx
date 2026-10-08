import { useState } from 'react'
import FilterBar from './components/FilterBar.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import './App.css'

const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Review lecture notes for chemistry',
    completed: false,
    createdAt: Date.now() - 2,
  },
  {
    id: crypto.randomUUID(),
    title: 'Submit history essay draft',
    completed: true,
    createdAt: Date.now() - 1,
  },
  {
    id: crypto.randomUUID(),
    title: 'Practice coding problems',
    completed: false,
    createdAt: Date.now(),
  },
]

function getEmptyMessage(filter, totalCount) {
  if (totalCount === 0) {
    return 'No tasks yet. Add one to get started.'
  }
  if (filter === 'active') {
    return 'No active tasks.'
  }
  if (filter === 'completed') {
    return 'No completed tasks.'
  }
  return 'No tasks yet. Add one to get started.'
}

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }
    if (filter === 'completed') {
      return task.completed
    }
    return true
  })

  function handleAdd(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
    }
    setTasks((current) => [newTask, ...current])
  }

  function handleToggle(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function handleDelete(id) {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <p className="eyebrow">Student dashboard</p>
        <h1>Tasks</h1>
        <p className="lede">Track assignments, study sessions, and reminders.</p>
      </header>

      <TaskForm onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList
        tasks={visibleTasks}
        emptyMessage={getEmptyMessage(filter, tasks.length)}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
