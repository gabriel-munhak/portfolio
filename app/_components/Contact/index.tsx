import ContactIconsList from "../ContactIconsList"

const Contact = () => {
    return (
        <div className="container h-[80vh] md:h-[100vh] flex flex-col items-center justify-center">
            <h2 className="lg:text-[1.875rem] text-[1.25rem] font-black text-[var(--secondaryColor)]">Entre em contato</h2>
            <p className="md:w-[30rem] lg:text-[1rem] text-[0.875rem] text-center lg:mb-[1.5rem] mb-[1rem] lg:mt-[1rem] mt-[.8rem]">
                Conheça mais sobre mim ao explorar meu portfólio. Aqui você encontra um resumo pessoal, minhas experiências acadêmicas e profissionais, além dos projetos e atividades mais recentes.
            </p>
            <ContactIconsList />
        </div>
    )
}

export default Contact