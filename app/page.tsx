import React from 'react'
import Home from './Components/Herosection'
import About from './Components/About'
import SkillsPage from './Components/Skill'
import ProjectsPage from './Components/Project'
import ContactPage from './Components/Contact'
import Footer from './Components/Footer'
import { FaStar } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Home/>

  <span><FaStar /></span>

      <About/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default page
