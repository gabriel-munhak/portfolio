import About from "@/app/_components/About"
import Timeline from "@/app/_components/Timeline"

const AboutMe = () => {
    return (
        <section className="container flex items-center justify-between">
            <Timeline />
            <About />
        </section>
    )
}

export default AboutMe