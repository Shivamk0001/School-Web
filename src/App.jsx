import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdmissionFeePage from './pages/AdmissionFeePage'
import OurAcademicsPage from './pages/OurAcademicsPage'
import OurCoursePage from './pages/OurCourse'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admission" element={<AdmissionFeePage />} />
          <Route path="/academics" element={<OurAcademicsPage />} /> 
          <Route path="/courses" element={<OurCoursePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App

