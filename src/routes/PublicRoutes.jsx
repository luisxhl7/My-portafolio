import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/home'
import { Briefcase } from '../components/pages/briefcase'
import { AboutMe } from '../components/pages/aboutMe'
import { Skills } from '../components/pages/skills'
import { ThemeContext } from '../context/themeContext'
import { InfoProjects } from '../components/pages/info-projects'

export const PublicRoutes = () => {
  const { theme } = useContext( ThemeContext )

  return (
    <>
      <Routes>
        <Route path = '/home'        element = { <Home/> }/>
        <Route path = '/portafolio'  element = { <Briefcase theme={theme}/> }/>
        <Route path = '/portafolio/:id'  element = { <InfoProjects theme={theme}/> }/>
        <Route path = '/acercademi'  element = { <AboutMe theme={theme}/> }/>
        <Route path = '/habilidades' element = { <Skills theme={theme}/> }/>
        <Route path = '/'            element = { <Navigate to = '/home' /> }/>
        <Route path = '/*'           element = { <Navigate to = '/home' /> }/>
      </Routes>
    </>
  )
}
