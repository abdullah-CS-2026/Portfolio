
import { AboutMe } from "./components/AboutMe/AboutMe"
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/header"
import { HeroSection } from "./components/HeroSection/heroSection"
import { Projects } from "./components/Projects/Projects"
import { SkillsExperience } from "./components/SkillsExperience/SkillsExperience"



function App() {
 

  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutMe/>
    <SkillsExperience/>
    <Projects/>
    <ContactForm/>
    <Footer/>
      
    </>
  )
}

export default App
