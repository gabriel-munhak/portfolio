type StackList = {
    first?: boolean,
    title: string,
    tags: string[],
    last?: boolean,
}

type ProjectCard = {
    image: string,
    name: string,
    projectLink: string | null,
    projectRepo: string
    newProject: boolean
}

type Repo = {
    id: number;
    name: string;
    image?: string;
    html_url: string;
    svn_url: string;
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

type Filter = "All" | "Projects" | "Activities"
