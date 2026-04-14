const About = () => {
    return (
        <div className="w-[487px]">
            <h2 className="text-[30px] font-black mb-[32px]">
                Sobre mim
            </h2>
            <p className="mb-[32px]">
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
            <div className="flex justify-between text-[var(--secondaryColor)] text-[24px] font-black">
                <div>
                    <span className="text-[40px]">13</span>
                    <p className="leading-[29px]">
                        Projetos 
                        Realizados
                    </p>
                </div>
                <div>
                    <span className="text-[40px]">25</span>
                    <p className="leading-[29px]">
                        Atividades
                        Realizadas
                    </p>
                </div>
                <div>
                    <span className="text-[40px]">+2</span>
                    <p className="leading-[29px]">
                        Anos de
                        Experiência
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About