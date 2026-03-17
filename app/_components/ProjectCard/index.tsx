import Image from "next/image"
import placeholder from "@/app/assets/placeholder.png"

const ProjectCard = ({name, projectLink, projectRepo}: ProjectCard) => {
    return (
        <div>
            <Image width={340} height={190} src={placeholder} alt={`Imagem do projeto ${name}`} />
            <span>Novo</span>
            <h2>{name}</h2>
            <div>
                <a href={projectLink}>Ver projeto</a>
                <a href={projectRepo}>Ver projeto</a>
            </div>
        </div>
    )
}

export default ProjectCard