export const Timeline = () => {
    return (
        <div className="lg:h-[32rem] md:h-[23.5rem] flex flex-col items-center justify-center lg:text-[1.5rem] md:text-[1rem] text-[var(--secondaryColor)] font-black">
            <div className="lg:w-[0.5rem] md:w-[0.375rem] lg:h-[4rem] md:h-[2rem] bg-[var(--secondaryColor)] pb-[1rem] lg:mb-[1rem] md:mb-[0.75rem]"/>

            <div className="lg:w-[1rem] md:w-[0.75rem] lg:h-[1rem] md:h-[0.75rem] rounded-[50%] bg-[var(--secondaryColor)] lg:mb-[1rem] md:mb-[0.75rem]">
                <span className="lg:ml-[1.5rem] md:ml-[1.1875rem] lg:w-[27.75rem] md:w-[18rem] block lg:mt-[-0.625rem] md:mt-[-0.46875rem]">Tecnico em ADS</span>
            </div>

            <div className="lg:w-[0.5rem] md:w-[0.375rem] lg:h-[4rem] md:h-[2rem] bg-[var(--secondaryColor)] lg:mb-[1rem] md:mb-[0.75rem]"/>

            <div className="lg:w-[1rem] md:w-[0.75rem] lg:h-[1rem] md:h-[0.75rem] rounded-[50%] bg-[var(--secondaryColor)] lg:mb-[1rem] md:mb-[0.75rem]">
                <span className="lg:ml-[1.5rem] md:ml-[1.1875rem] lg:w-[27.75rem] md:w-[18rem] block lg:mt-[-0.625rem] md:mt-[-0.46875rem]">Tecnico em Engenharia Front-end</span>
            </div>

            <div className="lg:w-[0.5rem] md:w-[0.375rem] lg:h-[4rem] md:h-[2rem] bg-[var(--secondaryColor)] lg:mb-[1rem] md:mb-[0.75rem]"/>

            <div className="lg:w-[1rem] md:w-[0.75rem] lg:h-[1rem] md:h-[0.75rem] rounded-[50%] bg-[var(--secondaryColor)] lg:mb-[1rem] md:mb-[0.75rem]">
                <span className="lg:ml-[1.5rem] md:ml-[1.1875rem] lg:w-[27.75rem] md:w-[18rem] block lg:mt-[-0.625rem] md:mt-[-0.46875rem]">Desenvolvedor Front-end Voluntário</span>
            </div>

            <div className="lg:w-[0.5rem] md:w-[0.375rem] lg:h-[4rem] md:h-[2rem] bg-[var(--secondaryColor)] lg:mb-[1rem] md:mb-[0.75rem]"/>

            <div className="lg:w-[1rem] md:w-[0.75rem] lg:h-[1rem] md:h-[0.75rem] rounded-[50%] bg-[var(--inProgressPrimaryColor)] lg:mb-[1rem] md:mb-[0.75rem]">
                <span className="lg:ml-[1.5rem] md:ml-[1.1875rem] lg:w-[27.75rem] md:w-[18rem] block lg:mt-[-0.625rem] md:mt-[-0.46875rem] text-[var(--inProgressSecondaryColor)]">Faculdade de Engenharia de Software</span>
            </div>

            <div className="lg:w-[0.5rem] md:w-[0.375rem] lg:h-[4rem] md:h-[2rem] bg-[var(--inProgressPrimaryColor)] lg:mb-[1rem] md:mb-[0.75rem]"/>
        </div>
    )
}

export default Timeline