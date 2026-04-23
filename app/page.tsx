import AboutMe from "./_containers/AboutMe";
import ContactMe from "./_containers/ContactMe";
import Home from "./_containers/Home";
import ProjectsList from "./_containers/ProjectsList";
import Stack from "./_containers/Stack";

export default function App() {
  return (
    <main className="h-screen overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Home />
      <AboutMe />
      <Stack />
      <ProjectsList />
      <ContactMe />
    </main>
  )
}