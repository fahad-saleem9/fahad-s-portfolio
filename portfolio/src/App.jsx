
// import AboutMe from './components/aboutMeSection/AboutMeMain'
// import AboutMeMain from './components/aboutMeSection/AboutMeMain'
// import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import AboutMe from './components/aboutMeSection/AboutMe'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import Experience from './components/experienceSection/Experience'
import FooterMain from './components/footer/FooterMain'
// import ExperienceMain from './components/experienceSection/ExperienceMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
// import Project from './components/Project'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      {" "}
      {/* Wrapper div added */}
      <main className="font-body">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMe />
        <SkillsMain />
        <SubSkills />
        <Experience />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </main>
    </div>
  );
}

export default App;
