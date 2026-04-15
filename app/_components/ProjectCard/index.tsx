import Image from "next/image"
import placeholder from "@/public/assets/placeholder.png"

const ProjectCard = ({name, projectLink, projectRepo, newProject}: ProjectCard) => {
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
            <div>
                <a href={projectLink} target="_blank" className="lg:py-[8px] lg:px-[22px] lg:text-[14px] py-[6px] px-[14px] text-[14px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] font-black lg:mr-[12px] mr-[8px] active:bg-[var(--secondaryColor)] active:text-[var(--secondaryTextColor)] active:font-black">Ver projeto</a>
                <a href={projectRepo} target="_blank" className="lg:py-[8px] lg:px-[22px] lg:text-[14px] py-[6px] px-[14px] text-[14px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] font-black active:bg-[var(--secondaryColor)] active:text-[var(--secondaryTextColor)] active:font-black">Ver repositório</a>
            </div>
        </div>
    )
}

export default ProjectCard