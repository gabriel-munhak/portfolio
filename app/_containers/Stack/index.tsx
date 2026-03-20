import StackList from "@/app/_components/StackList"
import * as C from "@/app/_consts/tags"


const Stack = () => {
    return (
        <section>
            <div className="container flex flex-col items-center">
                <h2 className="text-[30px] font-bold mb-[12px] text-[var(--secondaryColor)]">
                    Tecnologias
                </h2>
                <p className="w-[480px] mb-[54px] text-center">
                    Conheça um pouco sobre as tecnologias que já utilizei ao longo da minha jornada como programador.
                </p>
                <div className="flex">
                    <StackList title="Front-end" tags={C.frontTags} first={true}/>
                    <StackList title="Back-end" tags={C.backTags}/>
                    <StackList title="Outros" tags={C.othersTags} last={true}/>
                </div>
                <button className="w-[112px] h-[32px] rounded-[12px] bg-[var(--terdiaryColor)] font-bold text-[var(--secondaryColor)] mt-[56px]" type="button">
                    Ver mais
                </button>
            </div>
        </section>
    )
}

export default Stack