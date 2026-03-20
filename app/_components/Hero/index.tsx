import ContactIconsList from "../ContactIconsList"

const Hero = () => {
    return (
        <div className="container !h-[auto] flex justify-between">
            <div className="flex flex-col justify-end">
                <div className="w-[32rem] mb-[90px]">
                    <h1 className="text-[46px] text-[var(--secondaryColor)] font-medium w-[495px] leading-[56px]">Técnico em ADS e <span className="font-black">Engenheiro Front-end</span></h1>
                    <p className="w-full mt-[40px] mb-[40px]">
                        Conheça mais sobre mim ao explorar meu portfólio. Aqui você 
                        encontra um resumo pessoal, minhas experiências acadêmicas 
                        e profissionais, além dos projetos e atividades mais recentes.
                    </p>
                    <button className="w-[185px] h-[65px] rounded-[20px] bg-[var(--secondaryColor)] text-[var(--secondaryTextColor)] text-[22px] font-black">
                        Sobre mim
                    </button>
                </div>
                <ContactIconsList />
            </div>
            <div className="w-[32.5rem] h-[34.5rem] grid grid-cols-2 gap-[9px] text-[var(--secondaryColor)]">
                <div className="rounded-[16px] bg-[var(--terdiaryColor)] pt-[32px] pl-[27px]">
                    <span className="text-[40px] font-bold">+25</span>
                    <p className="text-[24px] font-semi-bold w-[176px] leading-[28px]">Projetos <span className="font-black">Desenvolvidos</span></p>
                </div>
                <div className="rounded-[16px] bg-[var(--secondaryColor)]"></div>
                <div className="rounded-[16px] bg-[var(--secondaryColor)]"></div>
                <div className="rounded-[16px] bg-[var(--terdiaryColor)] pt-[32px] pl-[27px]">
                    <span className="text-[40px] font-bold">+2</span>
                    <p className="text-[24px] font-semi-bold w-[176px] leading-[28px]">Anos de <span className="font-black">Experiência</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hero