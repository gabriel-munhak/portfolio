const Nav = () => {
    return (
        <nav className="h-[32px] flex items-center justify-center w-full mb-[3rem] text-[var(--secondaryColor)]">
            <div className="container !h-[auto] flex justify-between">
            <span className="text-[24px] font-black">
                Gabriel Munhak
            </span>
            <ul className="flex justify-between items-end w-[520px] text-[14px]">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about-me">Sobre mim</a>
                </li>
                <li>
                    <a href="#stack">Tecnologia</a>
                </li>
                <li>
                    <a href="#project-list">Atividades e Projetos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav