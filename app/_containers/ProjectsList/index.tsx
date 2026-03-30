"use client"

import ProjectCard from "@/app/_components/ProjectCard"
import { featuredProjects } from "@/app/_consts/content"
import { useEffect, useState } from "react"

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([])

    useEffect(() => {
        fetch("https://api.github.com/users/gabriel-munhak/repos")
        .then((res) => res.json())
        .then((data) => setRepos(data))
    }, [])

    const filteredRepos = repos.filter((r) => featuredProjects.includes(r.name))

    return (
        <section>
            <div className="container pt-[54px] pb-[54px] text-[var(--secondaryColor)]">
                <h2 className="text-[30px] font-bold mb-[16px]">Projetos e atividades</h2>

                <div className="flex justify-between mb-[22px]">
                    <div className="flex font-semibold">
                        <button type="button" className="py-[8px] px-[16px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] mr-[16px] active">Todos</button>
                        <button type="button" className="py-[8px] px-[16px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] mr-[16px]">Projetos</button>
                        <button type="button" className="py-[8px] px-[16px] bg-[var(--btnBgPrimaryColor)] rounded-[12px]">Atividades</button>
                    </div>

                    <a href="#" className="font-black">Ver mais</a>
                </div>

                <div className="grid grid-cols-3 gap-[22px]">
                    {filteredRepos.map((r, index) => (
                    <ProjectCard key={index} name={r.name} projectLink="" projectRepo={r.html_url}  />
                ))}
                </div>
            </div>
        </section>
    )
}

export default Projects