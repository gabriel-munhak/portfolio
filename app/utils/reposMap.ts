import { htmlUrlMap, nameMap, newProjects, reposObject } from "../_consts/repos"

export const reposMap = (repos: Repo[]) => 
    repos.map(repo => ({
        ...repo,
        name: nameMap[repo.name] || repo.name,
        image: reposObject.Projects.includes(repo.name)
        ? `/projects/${repo.name}.png`
        : '/projects/placeholder.png',
        html_url: htmlUrlMap[repo.name],
})).sort((a, b) => {
    const aIsNew = newProjects.includes(a.name)
    const bIsNew = newProjects.includes(b.name)

    if (aIsNew && !bIsNew) return -1
    if (!aIsNew && bIsNew) return 1
    return 0
})
