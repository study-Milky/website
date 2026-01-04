import React from 'react'
import Home from './Components/Herosection'
import About from './Components/About'
import SkillsPage from './Components/Skill'
import ProjectsPage from './Components/Project'
import ContactPage from './Components/Contact'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default page
