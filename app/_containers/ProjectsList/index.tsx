"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import ProjectCard from "@/app/_components/ProjectCard"
import { newProjects, reposObject } from "@/app/_consts/content"
import Link from "next/link";

type Filter = "All" | "Projects" | "Activities"

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([])
    const [filter, setFilter] = useState<Filter>("All")
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        fetch("https://api.github.com/users/gabriel-munhak/repos?per_page=100")
        .then((res) => res.json())
        .then((data) => setRepos(data))
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            setIsMobile(width < 1024)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const filteredRepos = repos
        .filter((r) => {
            switch(filter) {
                case "Projects": 
                    return reposObject.Projects.includes(r.name)

                case "Activities": 
                    return reposObject.Activities.includes(r.name)

                case "All":
                    const all = [...reposObject.Projects, ...reposObject.Activities]
                    return all.includes(r.name)
            } 
        })
        .sort((a, b) => {
            const aIsNew = newProjects.includes(a.name)
            const bIsNew = newProjects.includes(b.name)

            if(aIsNew && !bIsNew) return -1
            if(!aIsNew && bIsNew) return 1
            return 0
        })

    const mobileProjects = filteredRepos.slice(0, 3)
    const desktopProjects = filteredRepos.slice(0, 6)

    const resolvedProjects = isMobile ? mobileProjects : desktopProjects

    return (
        <motion.section id="project-list" className="snap-start"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="container text-[var(--secondaryColor)] flex flex-col items-center justify-center">
                <div className="w-full">

                    <motion.div variants={itemAnimation}>
                        <h2 className="lg:text-[1.875rem] md:text-[1.25rem] font-bold lg:mb-[1rem] md:mb-[.8rem]">Projetos e atividades</h2>
                    </motion.div>

                    <motion.div variants={itemAnimation}>
                        <div className="flex justify-between lg:mb-[1.375rem] md:mb-[1rem]">
                            <div className="flex font-semibold">
                                <button onClick={() => setFilter("All")} type="button" className={`lg:py-[0.5rem] lg:px-[1rem] md:py-[0.375rem] md:px-[0.875rem] bg-[var(--btnBgPrimaryColor)] lg:rounded-[0.75rem] md:rounded-[0.625rem] mr-[1rem] lg:text-[1rem] md:text-[0.875rem] ${filter === "All"? "active" : ""}`}>Todos</button>
                                <button onClick={() => setFilter("Projects")} type="button" className={`lg:py-[0.5rem] lg:px-[1rem] md:py-[0.375rem] md:px-[0.875rem] bg-[var(--btnBgPrimaryColor)] lg:rounded-[0.75rem] md:rounded-[0.625rem] mr-[1rem] lg:text-[1rem] md:text-[0.875rem] ${filter === "Projects"? "active" : ""}`}>Projetos</button>
                                <button onClick={() => setFilter("Activities")} type="button" className={`lg:py-[0.5rem] lg:px-[1rem] md:py-[0.375rem] md:px-[0.875rem] bg-[var(--btnBgPrimaryColor)] lg:rounded-[0.75rem] md:rounded-[0.625rem] lg:text-[1rem] md:text-[0.875rem] ${filter === "Activities"? "active" : ""}`}>Atividades</button>
                            </div>

                            <Link href="/projects" className="font-black lg:text-[1rem] md:text-[0.875rem] self-center">Ver mais</Link>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-[1.375rem] md:gap-[1rem]">
                        {resolvedProjects.map((r, index) => (
                        <motion.div variants={itemAnimation} key={index} >
                            <ProjectCard name={r.name} newProject={newProjects.includes(r.name)} projectLink="" projectRepo={r.html_url}  />
                        </motion.div>
                    ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects