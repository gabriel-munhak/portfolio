type StackList = {
    first?: boolean,
    title: string,
    tags: string[],
    last?: boolean,
}

type ProjectCard = {
    name: string,
    projectLink: string,
    projectRepo: string
    newProject: boolean
}

type Repo = {
    id: number;
    name: string;
    html_url: string;
    homepage: string;
    newProject: boolean
}