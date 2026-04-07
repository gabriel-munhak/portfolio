import Image from "next/image"
import placeholder from "@/public/assets/placeholder.png"

const ProjectCard = ({name, projectLink, projectRepo, newProject}: ProjectCard) => {
    return (
        <div>
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[var(--overlayColor)] rounded-[20px]"></div>
                <Image className="w-full h-full" src={placeholder} alt={`Imagem do projeto ${name}`} />
                {newProject && (
                    <span className="absolute top-0 left-0 mx-[21px] my-[21px] px-[11px] py-[7px] rounded-[4px] [background:var(--gradientPrimaryColor)] text-[var(--secondaryTextColor)]">Novo</span>
                )}
            </div>
            <h2 className="text-[18px] font-black my-[12px]">{name}</h2>
            <div>
                <a href={projectLink} target="_blank" className="py-[8px] px-[22px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] text-[14px] font-black mr-[12px] active:bg-[var(--secondaryColor)] active:text-[var(--secondaryTextColor)] active:font-black">Ver projeto</a>
                <a href={projectRepo} target="_blank" className="py-[8px] px-[22px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] text-[14px] font-black active:bg-[var(--secondaryColor)] active:text-[var(--secondaryTextColor)] active:font-black">Ver repositório</a>
            </div>
        </div>
    )
}

export default ProjectCard