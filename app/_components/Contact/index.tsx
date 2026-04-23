import ContactIconsList from "../ContactIconsList"

const Contact = () => {
    return (
        <div className="container h-[80vh] md:h-[60vh] lg:h-[100vh] flex flex-col items-center justify-center">
            <h2 className="lg:text-[1.875rem] text-[1.25rem] font-black text-[var(--secondaryColor)]">Entre em contato</h2>
            <p className="md:w-[30rem] lg:text-[1rem] text-[0.875rem] text-center lg:mb-[1.5rem] mb-[1rem] lg:mt-[1rem] mt-[.8rem]">
                Entre em contato comigo para saber mais sobre meu trabalho. Aqui você pode enviar uma mensagem, tirar dúvidas ou apresentar propostas, 
                além de iniciar conversas sobre projetos e oportunidades futuras, responderei assim que possível.
            </p>
            <ContactIconsList />
        </div>
    )
}

export default Contact