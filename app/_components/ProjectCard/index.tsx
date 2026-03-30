import Image from "next/image"
import placeholder from "@/app/assets/placeholder.png"

const ProjectCard = ({name, projectLink, projectRepo}: ProjectCard) => {
    return (
        <div>
            <Image width={340} height={190} src={placeholder} alt={`Imagem do projeto ${name}`} />
            {/* <span>Novo</span> */}
            <h2 className="text-[18px] font-black my-[12px]">{name}</h2>
            <div>
                <a href={projectLink} target="_blank" className="py-[8px] px-[22px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] text-[14px] font-black mr-[12px]">Ver projeto</a>
                <a href={projectRepo} target="_blank" className="py-[8px] px-[22px] bg-[var(--btnBgPrimaryColor)] rounded-[12px] text-[14px] font-black">Ver repositório</a>
            </div>
        </div>
    )
}

export default ProjectCard