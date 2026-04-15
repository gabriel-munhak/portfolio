import ContactIconsList from "../ContactIconsList"

const Hero = () => {
    return (
        <div className="container !h-[auto] flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="flex flex-col justify-end lg:w-[30.9375rem]">
                <div className="md:w-[21.4375rem] w-full">
                    <h1 className="text-[2rem] lg:text-[2.875rem] text-[var(--secondaryColor)] font-medium md:w-[21.4375rem] lg:w-[30.9375rem] leading-[2.438rem] lg:leading-[3.5rem]">
                        Técnico em ADS e <span className="font-black">Engenheiro Front-end</span>
                    </h1>
                    <p className="w-full text-justify mt-[2rem] mb-[2rem] md:text-[0.75rem] lg:text-[1rem] md:my-[1.5rem] lg:my-[2.5rem]">
                        Conheça mais sobre mim ao explorar meu portfólio. Aqui você 
                        encontra um resumo pessoal, minhas experiências acadêmicas 
                        e profissionais, além dos projetos e atividades mais recentes.
                    </p>
                    <div className="lg:block flex items-center justify-between">
                        <a href="#about-me" className="inline-block px-[2.375rem] lg:px-[3.5rem] py-[0.875rem] lg:py-[1.25rem] rounded-[1.25rem] lg:rounded-[2.5rem] bg-[var(--secondaryColor)] text-[var(--secondaryTextColor)] text-[0.875rem] lg:text-[1.375rem] font-black">
                        Sobre mim
                        </a>
                        <div className="lg:mt-[5.625rem]">
                            <ContactIconsList />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[278px] w-[282px]  lg:w-[32.5rem] lg:h-[34.5rem] grid grid-cols-2 gap-[0.375rem] lg:gap-[0.5625rem] text-[var(--secondaryColor)] mb-[2rem] md:mb-[0]">
                <div className="lg:rounded-[1rem] rounded-[.7rem] bg-[var(--terdiaryColor)] lg:pt-[2rem] lg:pl-[1.6875rem] pt-[0.75rem] pl-[1.125rem]">
                    <span className="lg:text-[2.5rem] text-[2rem] font-bold">+25</span>
                    <p className="lg:text-[1.5rem] text-[1rem] font-semi-bold w-[11rem] lg:leading-[1.75rem] leading-[1.1875rem]">
                        Projetos <span className="font-black">Desenvolvidos</span>
                    </p>
                </div>
                <div className="lg:rounded-[1rem] rounded-[.7rem] bg-[var(--secondaryColor)]"></div>
                <div className="lg:rounded-[1rem] rounded-[.7rem] bg-[var(--secondaryColor)]"></div>
                <div className="lg:rounded-[1rem] rounded-[.7rem] bg-[var(--terdiaryColor)] lg:pt-[2rem] lg:pl-[1.6875rem] pt-[0.75rem] pl-[1.125rem]">
                    <span className="lg:text-[2.5rem] text-[2rem] font-bold">+2</span>
                    <p className="lg:text-[1.5rem] text-[1rem] font-semi-bold lg:w-[11rem] w-[5.8125rem] lg:leading-[1.75rem] leading-[1.1875rem]">
                        Anos de <span className="font-black">Experiência</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero