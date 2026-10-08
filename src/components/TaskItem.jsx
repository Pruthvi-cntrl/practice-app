function TaskItem({ task, onToggle, onDelete }) {
  const checkboxId = `task-${task.id}`

  return (
    <li className={`task-item${task.completed ? ' is-completed' : ''}`}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label htmlFor={checkboxId}>{task.title}</label>
      <button
        type="button"
        className="task-delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
