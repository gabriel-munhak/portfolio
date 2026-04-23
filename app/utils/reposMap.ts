import { htmlUrlMap, nameMap, reposObject } from "../_consts/repos"

export const reposMap = (repos: Repo[]) => 
    repos.map(repo => ({
        ...repo,
        name: nameMap[repo.name] || repo.name,
        image: reposObject.Projects.includes(repo.name)
        ? `/projects/${repo.name}.png`
        : '/projects/placeholder.png',
        html_url: htmlUrlMap[repo.name],
}))
