import Image from "next/image"
import gitHub from "@/public/assets/github.svg"
import linkedin from "@/public/assets/linkedin.svg"
import phone from "@/public/assets/phone.svg"
import mail from "@/public/assets/mail.svg"

const ContactIconsList = () => {
    return (
        <div className="flex w-[9.5rem] h-[32px] items-center justify-between">
            <a href="https://github.com/gabriel-munhak" target="_blank">
                <Image src={gitHub} alt="Visite meu perfil do GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-munhak/" target="_blank">
                <Image src={linkedin} alt="Visite meu perfil do Linkedin" />
            </a>
            <a href="https://wa.me/55119971588621" target="_blank">
                <Image src={phone} alt="Me mande uma mensagem via Whatsapp"/>
            </a>
            <a href="mailto: gabrielmunhak1334@hotmail.com" target="_blank">
                <Image src={mail} alt="Me envie um e-mail" />
            </a>
        </div>
    )
}

export default ContactIconsList