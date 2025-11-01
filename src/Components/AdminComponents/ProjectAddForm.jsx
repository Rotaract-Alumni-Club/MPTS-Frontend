import React from 'react'

const ProjectAddForm = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="projectName">Project Name:</label>
        <input type="text" id="projectName" name="projectName" required />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
        <br />
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" required />
        <br />
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" required />
        <br />
        <button type="submit">Add Project</button>
        
      </form>
    </div>
  )
}

export default ProjectAddForm
