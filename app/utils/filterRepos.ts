import { newProjects, reposObject } from "../_consts/content"

export const filterRepos = (repos: Repo[], filter: string) => {
    let isMobile = false

    const filteredRepos = repos.filter((r) => {
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

    const handleResize = () => {
        const width = window.innerWidth
        isMobile = (width < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const mobileProjects = filteredRepos.slice(0, 4)
    const desktopProjects = filteredRepos.slice(0, 6)

    const resolvedProjects = isMobile ? mobileProjects : desktopProjects
    return resolvedProjects
}