import { htmlUrlMap, nameMap, newProjects} from "../_consts/repos"

export const reposMap = (repos: Repo[]) => 
    repos.map(repo => ({
        ...repo,
        name: nameMap[repo.name] || repo.name,
        image: `/projects/${repo.name}.png`,
        html_url: htmlUrlMap[repo.name],
})).sort((a, b) => {
    const aIsNew = newProjects.includes(a.name)
    const bIsNew = newProjects.includes(b.name)

    if (aIsNew && !bIsNew) return -1
    if (!aIsNew && bIsNew) return 1
    return 0
})
