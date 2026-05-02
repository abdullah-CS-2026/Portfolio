
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/header"
import { HeroSection } from "./components/HeroSection/heroSection"
import { Projects } from "./components/Projects/Projects"
import { SkillsExperience } from "./components/SkillsExperience/SkillsExperience"
import { ContactPage } from "./components/ContactPage/ContactPage"
import { NotFound } from "./components/NotFound/NotFound"
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary"
import { ThemeProvider } from "./context/ThemeContext"

function HomePage({ onContactClick }) {
  return (
    <>
      <Header onContactClick={onContactClick}/>
      <HeroSection onContactClick={onContactClick}/>
      <AboutMe/>
      <SkillsExperience/>
      <Projects/>
      
      <ContactForm/>
      <Footer/>
    </>
  )
}

function App() {
  const [showContactPage, setShowContactPage] = useState(false)

  const goToContactPage = () => {
    setShowContactPage(true)
    window.scrollTo(0, 0)
  }

  const goToHome = () => {
    setShowContactPage(false)
    window.scrollTo(0, 0)
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={
                !showContactPage ? (
                  <HomePage onContactClick={goToContactPage} />
                ) : (
                  <ContactPage onBackClick={goToHome} />
                )
              } 
            />
            <Route path="/contact" element={<ContactPage onBackClick={goToHome} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
