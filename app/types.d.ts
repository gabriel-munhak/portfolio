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

type ButtonProps = {
    as?: "button" | "a"
    href?: string
    variant?: "primary" | "secondary" | "tertiary" | "quaternary"
    size?: "hero" | "md" | "sm" | "tag"
    className?: string
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>