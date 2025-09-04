import React from 'react'
import styles from './ProjectsStyles.module.css'

function Projects() {
   return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <div className={styles.projectContainer}>
          <h2>*This Website*</h2>
          <p>My personal portfolio built with React</p>
        </div>

        <br />

        <div className={styles.projectContainer}>
          <a href="https://edufd.netlify.app/" target="_blank" rel="noopener noreferrer">
            <h2>EduFord</h2>
            </a>
            <p>A project I built focused on education-related web-design. Built with only JavaScript, HTML, and CSS.</p>
          
        </div>

        <br />

        <div className={styles.projectContainer}>
          <a href="https://carsong.netlify.app/" target="_blank" rel="noopener noreferrer">
            <h2>Carson Gunter</h2>
             </a>
            <p>A portfolio project I had built for a former colleague of mine. Built with only JavaScript, HTML, and CSS.</p>
         
        </div>

      </div>
      <br />
    </section>
  )
}

export default Projects
