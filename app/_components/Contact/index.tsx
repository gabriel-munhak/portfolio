import ContactIconsList from "../ContactIconsList"

const Contact = () => {
    return (
        <div className="container flex flex-col items-center justify-center">
            <h2 className="lg:text-[1.875rem] md:text-[1.25rem] font-black lg:mb-[2rem] md:mb-[1rem] text-[var(--secondaryColor)]">Entre em contato</h2>
            <p className="w-[30rem] lg:text-[1rem] md:text-[0.875rem] text-center lg:mb-[1.875rem] md:mb-[1rem]">
                Conheça mais sobre mim ao explorar meu portfólio. Aqui você encontra um resumo pessoal, minhas experiências acadêmicas e profissionais, além dos projetos e atividades mais recentes.
            </p>
            <ContactIconsList />
        </div>
    )
}

export default Contact