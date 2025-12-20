import React, { useState } from 'react'
import '../../SCSS/AdminStyles/AdminProjectStyles/ProjectAddForm.scss'
import Toast from '../Toast/Toast.jsx'

const ProjectAddForm = ({ onCommitteeAdded }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
  })
  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    // Show toast notification
    setShowToast(true)
    
    // After 2 seconds, switch to view and call the callback
    setTimeout(() => {
      if (onCommitteeAdded) {
        onCommitteeAdded(formData)
      }
      // Reset form
      setFormData({
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
      })
    }, 2000)
  }

  return (
    <div className='project-form-container'>
      <div className='form-card'>
        <div className='form-header'>
          <h2>Add New Project</h2>
          <p>Create a new project with detailed information</p>
        </div>

        <form onSubmit={handleSubmit} className='modern-form'>
          <div className='form-group'>
            <label htmlFor="projectName" className='form-label'>
              Project Name
              <span className='required'>*</span>
            </label>
            <input 
              type="text" 
              id="projectName" 
              name="projectName" 
              className='form-input'
              placeholder='Enter project name'
              value={formData.projectName}
              onChange={handleChange}
              required 
            />
          </div>

          <div className='form-group'>
            <label htmlFor="description" className='form-label'>
              Description
              <span className='required'>*</span>
            </label>
            <textarea 
              id="description" 
              name="description" 
              className='form-textarea'
              placeholder='Enter project description...'
              rows='4'
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="startDate" className='form-label'>
                Start Date
                <span className='required'>*</span>
              </label>
              <input 
                type="date" 
                id="startDate" 
                name="startDate" 
                className='form-input'
                value={formData.startDate}
                onChange={handleChange}
                required 
              />
            </div>

            <div className='form-group'>
              <label htmlFor="endDate" className='form-label'>
                End Date
                <span className='required'>*</span>
              </label>
              <input 
                type="date" 
                id="endDate" 
                name="endDate" 
                className='form-input'
                value={formData.endDate}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className='form-actions'>
            <button type='submit' className='btn-primary'>
              Add Project
            </button>
            <button type='reset' className='btn-secondary'>
              Clear
            </button>
          </div>
        </form>
      </div>
      <Toast message="Project added successfully!" isVisible={showToast} duration={2000} />
    </div>
  )
}

export default ProjectAddForm
