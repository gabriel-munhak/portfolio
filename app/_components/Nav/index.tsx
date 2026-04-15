import Image from "next/image"
import menu from "@/public/assets/menu.svg"
import { useState } from "react"

const Nav = () => {
    const [showMobileList, setShowMobileList] = useState<boolean>(false)

    const handleClick = () => {
        setShowMobileList((prev) => !prev)
    }

    return (
        <nav className="h-[5rem] md:h-[2rem] flex items-center justify-center w-full lg:mb-[3rem] md:mb-[1.25rem] text-[var(--secondaryColor)]">
            <div className="container !h-[auto] flex justify-between md:relative">
                <span className="text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem] font-black">
                    Gabriel Munhak
                </span>
                <ul className="hidden lg:flex justify-between items-end w-[32.5rem] text-[1rem]">
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
                <Image onClick={handleClick} className="block lg:hidden w-[1.5rem] h-[1.5rem]" src={menu} alt="Ícone de expandir o menu" />
                {showMobileList && (
                    <div className="absolute w-[100vw] h-[100vh] top-[4rem] md:top-[2.5rem] left-[0] bg-[var(--primaryColor)]">
                        <div className="container md:!mx-0">
                            <ul className="flex flex-col justify-between gap-[1rem] text-[1rem] lg:hidden ">
                            <li>
                                <a onClick={handleClick} href="#home">Home</a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#about-me">Sobre mim</a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#stack">Tecnologia</a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#project-list">Atividades e Projetos</a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#contact">Contato</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav