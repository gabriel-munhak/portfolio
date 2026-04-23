import { useEffect, useState } from "react"

export const useRepos = () => {
    const [repos, setRepos] = useState<Repo[]>([])

    useEffect(() => {
        fetch("https://api.github.com/users/gabriel-munhak/repos?per_page=100")
            .then((res) => res.json())
            .then((data) => setRepos(data))
    }, [])

    return repos
}