const About = () => {
    return (
        <div className="lg:w-[30.4375rem] md:w-[20.375rem]">
            <h2 className="lg:text-[1.875rem] text-[1.25rem] font-black lg:mb-[2rem] mb-[1rem] text-[var(--secondaryColor)]">
                Sobre mim
            </h2>
            <p className="lg:mb-[2rem] text-justify mb-[1rem] lg:text-[1rem] md:text-[0.75rem] lg:h-[310px] h-[12.1875rem] lg:overflow-y-auto md:overflow-y-scroll custom-scrollbar">
                Meu nome é Gabriel, tenho 21 anos e, em 2018, descobri o mundo da TI e da programação. Desde então, decidi seguir carreira na área, unindo meu interesse por tecnologia com minha dedicação aos estudos uma escolha que fez total sentido para mim.
                <br/>
                <br/>
                Em 2019, concluí o curso de Análise e Desenvolvimento de Sistemas integrado ao ensino médio pela ETEC da minha cidade. Posteriormente, em 2023, me especializei em Engenharia Front-end pela EBAC.
                <br/>
                <br/>
                Atualmente, atuo como desenvolvedor Front-end voluntário, iniciei minha graduação e sigo determinado a evoluir cada vez mais. Estou em busca de uma oportunidade profissional que me permita crescer, adquirir experiência e contribuir de forma significativa na área de tecnologia.
                <br />
                <br />
                Ao todo, possuo mais de 2 anos de experiência, adquiridos por meio de projetos práticos e trabalhos voluntários.
            </p>
            <div className="flex justify-between text-[var(--secondaryColor)] lg:text-[1.5rem] md:text-[1rem] font-black">
                <div>
                    <span className="lg:text-[2.5rem] text-[1.75rem]">13</span>
                    <p className="lg:leading-[1.8125rem] leading-[1.1875rem]">
                        Projetos 
                        Realizados
                    </p>
                </div>
                <div>
                    <span className="lg:text-[2.5rem] text-[1.75rem]">25</span>
                    <p className="lg:leading-[1.8125rem] leading-[1.1875rem]">
                        Atividades
                        Realizadas
                    </p>
                </div>
                <div>
                    <span className="lg:text-[2.5rem] text-[1.75rem]">+2</span>
                    <p className="lg:leading-[1.8125rem] leading-[1.1875rem]">
                        Anos de
                        Experiência
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About