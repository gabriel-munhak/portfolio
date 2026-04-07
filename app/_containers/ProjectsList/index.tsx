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

    useEffect(() => {
        fetch("https://api.github.com/users/gabriel-munhak/repos?per_page=100")
        .then((res) => res.json())
        .then((data) => setRepos(data))
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
        .slice(0, 6)

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
                        <h2 className="text-[30px] font-bold mb-[16px]">Projetos e atividades</h2>
                    </motion.div>

                    <motion.div variants={itemAnimation}>
                        <div className="flex justify-between mb-[22px]">
                            <div className="flex font-semibold">
                                <button onClick={() => setFilter("All")} type="button" className={`py-[8px] px-[16px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] mr-[16px] ${filter === "All"? "active" : ""}`}>Todos</button>
                                <button onClick={() => setFilter("Projects")} type="button" className={`py-[8px] px-[16px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] mr-[16px] ${filter === "Projects"? "active" : ""}`}>Projetos</button>
                                <button onClick={() => setFilter("Activities")} type="button" className={`py-[8px] px-[16px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] ${filter === "Activities"? "active" : ""}`}>Atividades</button>
                            </div>

                            <Link href="/projects" className="font-black">Ver mais</Link>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-[22px]">
                        {filteredRepos.map((r, index) => (
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