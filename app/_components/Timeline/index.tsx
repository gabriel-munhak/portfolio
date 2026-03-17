export const Timeline = () => {
    return (
        <div className="h-[512px] flex flex-col items-center justify-center text-[24px] text-[var(--secondaryColor)] font-black">
            <div className="w-[8px] h-[64px] bg-[var(--secondaryColor)] pb-[16px] mb-[16px]"/>

            <div className="w-[16px] h-[16px] rounded-[8px] bg-[var(--secondaryColor)] mb-[16px]">
                <span className="ml-[24px] relative w-[444px] block mt-[-10px]">Tecnico em ADS</span>
            </div>

            <div className="w-[8px] h-[64px] bg-[var(--secondaryColor)] mb-[16px]"/>

            <div className="w-[16px] h-[16px] rounded-[8px] bg-[var(--secondaryColor)] mb-[16px]">
                <span className="ml-[24px] relative w-[444px] block mt-[-10px]">Tecnico em Engenharia Front-end</span>
            </div>

            <div className="w-[8px] h-[64px] bg-[var(--secondaryColor)] mb-[16px]"/>

            <div className="w-[16px] h-[16px] rounded-[8px] bg-[var(--secondaryColor)] mb-[16px]">
                <span className="ml-[24px] relative w-[444px] block mt-[-10px]">Desenvolvedor Front-end Voluntário</span>
            </div>

            <div className="w-[8px] h-[64px] bg-[var(--secondaryColor)] mb-[16px]"/>

            <div className="w-[16px] h-[16px] rounded-[8px] bg-[var(--inProgressPrimaryColor)] mb-[16px]">
                <span className="ml-[24px] relative w-[444px] block mt-[-10px] text-[var(--inProgressSecondaryColor)]">Faculdade de Engenharia de Software</span>
            </div>

            <div className="w-[8px] h-[64px] bg-[var(--inProgressPrimaryColor)] mb-[16px]"/>
        </div>
    )
}

export default Timeline