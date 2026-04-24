
import { useState } from "react"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/header"
import { HeroSection } from "./components/HeroSection/heroSection"
import { Projects } from "./components/Projects/Projects"
import { SkillsExperience } from "./components/SkillsExperience/SkillsExperience"
import { ContactPage } from "./components/ContactPage/ContactPage"



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
    <>
    {!showContactPage ? (
      <>
        <Header onContactClick={goToContactPage}/>
        <HeroSection onContactClick={goToContactPage}/>
        <AboutMe/>
        <SkillsExperience/>
        <Projects/>
        <ContactForm/>
        <Footer/>
      </>
    ) : (
      <ContactPage onBackClick={goToHome}/>
    )}
    </>
  )
}

export default App
