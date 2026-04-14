import ContactIconsList from "../ContactIconsList"

const Hero = () => {
    return (
        <div className="container !h-[auto] flex justify-between">
            <div className="flex flex-col justify-end">
                <div className="md:w-[21.4375rem] lg:w-[32rem]">
                    <h1 className="md:text-[2rem] lg:text-[2.875rem] text-[var(--secondaryColor)] font-medium md:w-[21.4375rem] lg:w-[30.9375rem] md:leading-[2.438rem] lg:leading-[3.5rem]">Técnico em ADS e <span className="font-black">Engenheiro Front-end</span></h1>
                    <p className="w-full mt-[2.rem] mb-[2.rem] md:text-[0.75rem] lg:text-[1rem] md:my-[1.5rem] lg:my-[2.5rem]">
                        Conheça mais sobre mim ao explorar meu portfólio. Aqui você 
                        encontra um resumo pessoal, minhas experiências acadêmicas 
                        e profissionais, além dos projetos e atividades mais recentes.
                    </p>
                    <div className="lg:block md:flex md:items-center md:gap-[1.5rem]">
                        <a href="#about-me" className="inline-block md:px-[2.375rem] lg:px-[3.5rem] md:py-[0.875rem] lg:py-[1.25rem] md:rounded-[1.25rem] lg:rounded-[2.5rem] bg-[var(--secondaryColor)] text-[var(--secondaryTextColor)] md:text-[0.875rem] lg:text-[1.375rem] font-black">
                        Sobre mim
                        </a>
                        <div className="lg:mt-[5.625rem]">
                            <ContactIconsList />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[17.625rem] lg:w-[32.5rem] md:h-[17.375rem] lg:h-[34.5rem] grid grid-cols-2 md:gap-[0.375rem] lg:gap-[0.5625rem] text-[var(--secondaryColor)]">
                <div className="rounded-[1rem] bg-[var(--terdiaryColor)] lg:pt-[2rem] lg:pl-[1.6875rem] md:pt-[0.75rem] md:pl-[1.125rem]">
                    <span className="lg:text-[2.5rem] md:text-[2rem] font-bold">+25</span>
                    <p className="lg:text-[1.5rem] md:text-[1rem] font-semi-bold w-[11rem] lg:leading-[1.75rem] md:leading-[1.1875rem]">Projetos <span className="font-black">Desenvolvidos</span></p>
                </div>
                <div className="rounded-[1rem] bg-[var(--secondaryColor)]"></div>
                <div className="rounded-[1rem] bg-[var(--secondaryColor)]"></div>
                <div className="rounded-[1rem] bg-[var(--terdiaryColor)] lg:pt-[2rem] lg:pl-[1.6875rem] md:pt-[0.75rem] md:pl-[1.125rem]">
                    <span className="lg:text-[2.5rem] md:text-[2rem] font-bold">+2</span>
                    <p className="lg:text-[1.5rem] md:text-[1rem] font-semi-bold lg:w-[11rem] md:w-[5.8125rem] lg:leading-[1.75rem] md:leading-[1.1875rem]">Anos de <span className="font-black">Experiência</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hero