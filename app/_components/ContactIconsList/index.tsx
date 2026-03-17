import Image from "next/image"
import gitHub from "@/app/assets/github.svg"
import linkedin from "@/app/assets/linkedin.svg"
import phone from "@/app/assets/phone.svg"
import mail from "@/app/assets/mail.svg"

const ContactIconsList = () => {
    return (
        <div className="flex w-[9.5rem] h-[32px] items-center justify-between">
            <Image src={gitHub} alt="Visite meu perfil do GitHub"/>
            <Image src={linkedin} alt="Visite meu perfil do Linkedin" />
            <Image src={phone} alt="Me mande uma mensagem via Whatsapp"/>
            <Image src={mail} alt="Me envie um e-mail" />
        </div>
    )
}

export default ContactIconsList