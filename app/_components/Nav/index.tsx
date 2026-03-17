const Nav = () => {
    return (
        <nav className="h-[32px] flex items-center justify-center w-full mt-[2.5rem] mb-[3rem] text-[var(--secondaryColor)]">
            <div className="container !h-[auto] flex justify-between">
            <span className="text-[24px] font-black">
                Gabriel Munhak
            </span>
            <ul className="flex justify-between items-end w-[520px] text-[14px]">
                <li>
                    Home
                </li>
                <li>
                    Sobre mim
                </li>
                <li>
                    Tecnologia
                </li>
                <li>
                    Atividades e Projetos
                </li>
                <li>
                    Contato
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav