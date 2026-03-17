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
}

type Repo = {
    id: number;
    name: string;
    html_url: string;
    homepage: string;
}