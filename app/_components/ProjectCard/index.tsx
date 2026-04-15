import Image from "next/image"
import placeholder from "@/public/assets/placeholder.png"
import Button from "../Button"

const ProjectCard = ({ name, projectLink, projectRepo, newProject }: ProjectCard) => {
    return (
        <div>
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[var(--overlayColor)] rounded-[20px]"></div>
                <Image className="w-full h-full" src={placeholder} alt={`Imagem do projeto ${name}`} />
                {newProject && (
                    <span className="absolute lg:text-[16px] text-[14px] top-0 left-0 lg:mx-[21px] lg:my-[21px] mx-[16px] my-[16px] lg:px-[11px] lg:py-[7px] px-[10px] py-[6px] rounded-[4px] [background:var(--gradientPrimaryColor)] text-[var(--secondaryTextColor)]">Novo</span>
                )}
            </div>
            <h2 className="lg:text-[18px] md:text-[16px] font-black my-[12px]">{name}</h2>
            <div className="flex gap-[8px] lg:gap-[12px]">
                <Button
                    as="a"
                    href={projectLink}
                    target="_blank"
                    variant="secondary"
                    size="md"
                >
                    Ver projeto
                </Button>
                <Button
                    as="a"
                    href={projectRepo}
                    target="_blank"
                    variant="secondary"
                    size="md"
                >
                    Ver repositório
                </Button>
            </div>
        </div>
    )
}

export default ProjectCard