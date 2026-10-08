const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

function FilterBar({ filter, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {FILTERS.map((option) => {
        const isSelected = filter === option.id
        return (
          <button
            key={option.id}
            type="button"
            className={isSelected ? 'is-selected' : undefined}
            aria-pressed={isSelected}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default FilterBar
