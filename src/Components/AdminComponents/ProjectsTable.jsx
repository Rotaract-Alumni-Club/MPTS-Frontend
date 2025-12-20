import { React, useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa'
import "../../SCSS/AdminStyles/AdminProjectStyles/AdminProjects.scss"

const ProjectsTable = ({ projects: propsProjects = [] }) => {
  const defaultProjects = [
    {
      id: 1,
      eventName: 'Event 1',
      date: '01/01/2024',
      notes: 'Some notes about Event 1',
      chairPersons: 3
    },
    {
      id: 2,
      eventName: 'Event 2',
      date: '02/01/2024',
      notes: 'Some notes about Event 2',
      chairPersons: 2
    },
    {
      id: 3,
      eventName: 'Event 3',
      date: '03/01/2024',
      notes: 'Some notes about Event 3',
      chairPersons: 0
    },
    {
      id: 4,
      eventName: 'Event 4',
      date: '04/01/2024',
      notes: 'Some notes about Event 4',
      chairPersons: 5
    },
  ]

  const [projects, setProjects] = useState(propsProjects.length > 0 ? propsProjects : defaultProjects)

  useEffect(() => {
    if (propsProjects.length > 0) {
      setProjects(propsProjects)
    }
  }, [propsProjects])

  const handleAddChairPersons = (id) => {
    console.log('Add chair persons for event:', id)
    // Add your logic here
  }

  const handleEdit = (id) => {
    console.log('Edit event:', id)
  }

  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  return (
    <div className='projects-table-container'>
      <div className='table-wrapper'>
        <table className='modern-table'>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Notes</th>
              <th>Chairs</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <span className='event-name'>{project.eventName}</span>
                </td>
                <td>
                  <span className='date-badge'>{project.date}</span>
                </td>
                <td>
                  <span className='notes-text'>{project.notes}</span>
                </td>
                <td>
                  <span className='chair-badge'>{project.chairPersons}</span>
                </td>
                <td className='actions-cell'>
                  <button 
                    className='btn-action btn-add-chair'
                    onClick={() => handleAddChairPersons(project.id)}
                    title='Add Chair Person'
                  >
                    <FaUserPlus />
                    <span>Add</span>
                  </button>
                  <button 
                    className='btn-action btn-edit'
                    onClick={() => handleEdit(project.id)}
                    title='Edit Event'
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className='btn-action btn-delete'
                    onClick={() => handleDelete(project.id)}
                    title='Delete Event'
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {projects.length === 0 && (
          <div className='empty-state'>
            <p>No projects found. Create a new project to get started!</p>
          </div>
        )}
      </div>

      <div className='table-stats'>
        <div className='stat-card'>
          <span className='stat-label'>Total Projects</span>
          <span className='stat-value'>{projects.length}</span>
        </div>
        <div className='stat-card'>
          <span className='stat-label'>With Chairs</span>
          <span className='stat-value'>{projects.filter(p => p.chairPersons > 0).length}</span>
        </div>
        <div className='stat-card'>
          <span className='stat-label'>Total Chairs</span>
          <span className='stat-value'>{projects.reduce((sum, p) => sum + p.chairPersons, 0)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectsTable

