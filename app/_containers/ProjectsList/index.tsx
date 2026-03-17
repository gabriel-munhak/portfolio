"use client"

import ProjectCard from "@/app/_components/ProjectCard"
import { useEffect, useState } from "react"

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([])

    useEffect(() => {
        fetch("https://api.github.com/users/gabriel-munhak/repos")
        .then((res) => res.json())
        .then((data) => setRepos(data))
    }, [])

    return (
        <section>
            {repos.map((r, index) => (
                <ProjectCard key={index} name={r.name} projectLink="" projectRepo={r.html_url}  />
            ))}
        </section>
    )
}

export default Projects