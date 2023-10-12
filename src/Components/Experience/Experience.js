import React from 'react'
import styles from './Experience.module.css'


const Experience = () => {
  return (
    <div className={styles.main} >
        <h4 style={{fontWeight:'1200'}}>EXPERIENCE</h4>
        <h6>Open Source Contributor</h6>
        <h6>Girl Script Summer of Code</h6>
        <ul>
            <li><strong>GirlsScript Summer of Code 2023 Open Source Contributor:</strong>
            A   ctively contributed code, implemented features, and resolved bugs in a team-based, open source project.
            </li>
            <li>
                <strong>Collaborative Teamwork:</strong>
                Engaged in remote collaboration, code reviews, and effective communication within a diverse team.
            </li>
            <li>
                <strong>Documentation and Git Proficiency:</strong>
                Contributed to project documentation and proficiently used Git for version control and collaboration.
            </li>
        </ul>
        <h6>Open Source Contributor</h6>
        <h6>Hactoberfest 2023</h6>
        <ul>
            <li>
                Actively participated in Hacktoberfest 2023, contributing to multiple open-source projects.
            </li>
            <li>
                Created and submitted meaningful pull requests, enhancing code quality and functionality.
            </li>
            <li>
                Demonstrated strong problem-solving skills and collaborative teamwork within the open-source community.
            </li>
        </ul>
    </div>
  )
}

export default Experience