import ContactIconsList from "../ContactIconsList"

const Contact = () => {
    return (
        <div className="container flex flex-col items-center justify-center">
            <h2 className="text-[30px] font-black mb-[32px] text-[var(--secondaryColor)]">Entre em contato</h2>
            <p className="w-[480px] text-center mb-[30px]">
                Conheça mais sobre mim ao explorar meu portfólio. Aqui você encontra um resumo pessoal, minhas experiências acadêmicas e profissionais, além dos projetos e atividades mais recentes.
            </p>
            <ContactIconsList />
        </div>
    )
}

export default Contact