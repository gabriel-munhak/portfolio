import { reposObject } from "../_consts/content"

const validImages = reposObject.Projects

export const nameMap: Record<string, string> = {
    efood: "EFood",
    eplay: "EPlay",
    "bxmailer-front": "BXMailer",
    clone_disney_plus: "Clone Disney+",
    "lista-de-contatos": "Lista de Contatos",
    email: "Email",
    "recent-activity": "Recent Activity",
    loja_doces: "Loja de Doces",
    modulogit: "Módulo Git",
    exercicio_es6: "Exercício ES6",
    ebac_games_redux: "EBAC Games Redux",
    cypress: "Cypress",
    base_exercicio_css_in_js: "CSS-in-JS",
    async: "Async"
}

export const reposMap = (repos: Repo[]) => {
    const imageMap = repos.map(repo => ({
        ...repo,
        name: nameMap[repo.name] || repo.name,
        image: validImages.includes(repo.name)
            ? `/projects/${repo.name}.png`
            : '/projects/placeholder.png'
    }))

    return imageMap
}