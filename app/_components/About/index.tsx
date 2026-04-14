const About = () => {
    return (
        <div className="lg:w-[30.4375rem] md:w-[20.375rem]">
            <h2 className="lg:text-[1.875rem] md:text-[1.25rem] font-black lg:mb-[2rem] md:mb-[1rem]">
                Sobre mim
            </h2>
            <p className="lg:mb-[2rem] md:mb-[1rem] lg:text-[1rem] md:text-[0.75rem] lg:h-[auto] md:h-[12.1875rem] lg:overflow-y-auto md:overflow-y-scroll custom-scrollbar">
                Meu nome é Gabriel, tenho 21 anos em 2018 eu descobri o 
                mundo do TI e a programação, sempre quis seguir uma carreira 
                de TI e sempre gostei de estudar, então construir uma carreira 
                casou como uma luva para mim.
                <br/>
                <br/>
                Fiz ADS integrado ao ensino médio na ETEC da minha cidade 
                em 2019, posteriormente em 2023 cursei Engenharia Front-end 
                na EBAC.
                <br/>
                <br/>
                Atualmente trabalho com Desenvolvedor Front-end voluntário,
                ingressei na faculdade e quero ir além. Busco uma oportunidade
                de emprego para crescer ainda mais profissionalmente em
                minha carreira.
                <br />
                <br />
                Ao todo possuo mais de 2 anos de experiencia entre projetos praticos e volutarios.
            </p>
            <div className="flex justify-between text-[var(--secondaryColor)] lg:text-[1.5rem] md:text-[1rem] font-black">
                <div>
                    <span className="lg:text-[2.5rem] md:text-[1.75rem]">13</span>
                    <p className="lg:leading-[1.8125rem] md:leading-[1.1875rem]">
                        Projetos 
                        Realizados
                    </p>
                </div>
                <div>
                    <span className="lg:text-[2.5rem] md:text-[1.75rem]">25</span>
                    <p className="lg:leading-[1.8125rem] md:leading-[1.1875rem]">
                        Atividades
                        Realizadas
                    </p>
                </div>
                <div>
                    <span className="lg:text-[2.5rem] md:text-[1.75rem]">+2</span>
                    <p className="lg:leading-[1.8125rem] md:leading-[1.1875rem]">
                        Anos de
                        Experiência
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About