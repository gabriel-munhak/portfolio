"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import ProjectCard from "@/app/_components/ProjectCard"
import { newProjects, reposObject } from "@/app/_consts/content"
import Link from "next/link";
import Button from "@/app/_components/Button";

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
            switch (filter) {
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

            if (aIsNew && !bIsNew) return -1
            if (!aIsNew && bIsNew) return 1
            return 0
        })

    const mobileProjects = filteredRepos.slice(0, 4)
    const desktopProjects = filteredRepos.slice(0, 6)

    const resolvedProjects = isMobile ? mobileProjects : desktopProjects

    return (
        <motion.section id="project-list" className="snap-start container md:flex items-center justify-center"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="w-full text-[var(--secondaryColor)] flex flex-col items-center justify-center">
                <div className="w-full">

                    <motion.div variants={itemAnimation}>
                        <h2 className="lg:text-[1.875rem] text-[1.25rem] font-bold lg:mb-[1rem] mb-[.8rem]">Projetos e atividades</h2>
                    </motion.div>

                    <motion.div variants={itemAnimation}>
                        <div className="flex justify-between lg:mb-[1.375rem] mb-[1rem]">
                            <div className="flex font-semibold gap-[.5rem] md:gap-[1rem]">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => setFilter("All")}
                                    className={filter === "All" ? "active" : ""}
                                >
                                    Todos
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => setFilter("Projects")}
                                    className={filter === "Projects" ? "active" : ""}
                                >
                                    Projetos
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => setFilter("Activities")}
                                    className={filter === "Activities" ? "active" : ""}
                                >
                                    Atividades
                                </Button>
                            </div>
                            <Link href="/projects" className="flex items-center justify-center">
                                <Button variant="quaternary" size="tag" className="p-[0]">
                                    Ver mais
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-x-[1rem] lg:gap-[1.375rem]">
                        {resolvedProjects.map((r, index) => (
                            <motion.div variants={itemAnimation} key={index} >
                                <ProjectCard name={r.name} newProject={newProjects.includes(r.name)} projectLink="" projectRepo={r.html_url} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects