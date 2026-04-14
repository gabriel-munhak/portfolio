import AboutMe from "./_containers/AboutMe";
import ContactMe from "./_containers/ContactMe";
import Home from "./_containers/Home";
import ProjectsList from "./_containers/ProjectsList";
import Stack from "./_containers/Stack";

export default function App() {
  return (
    <main className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
      <Home />
      <AboutMe />
      <Stack />
      <ProjectsList />
      <ContactMe />
    </main>
  )
}