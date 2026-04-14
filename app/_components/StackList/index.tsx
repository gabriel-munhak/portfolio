import Image from "next/image"
import generic from "@/public/assets/generic.svg"

const StackList = ({first, title, tags, last}: StackList) => {
    return (
        <div className="flex lg:h-[18.75rem] md:h-[12.5rem] text-[var(--secondaryColor)]">
            <div className={`w-[0.1875rem] h-full bg-[var(--terdiaryColor)] mr-[3.125rem] ${!first ? "ml-[3.125rem]" : "ml-[0]"}`} />

            <div className="flex flex-col items-center">
                <Image className="lg:mb-[1rem] md:mb-[0.75rem] lg:w-[5.3125rem] md:w-[4rem]" src={generic} alt={`Icone da tecnlogia: ${title}`} />
                <h2 className="lg:text-[1.5rem] md:text-[1.125rem] font-black lg:mb-[1rem] md:mb-[0.75rem]">{title}</h2>
                <ul className="overflow-y-scroll custom-scrollbar">
                    {tags.map((t, index) => 
                        <li key={index}>
                            <span  className="flex items-center gap-[0.5rem] text-[var(--secondaryColor)]">
                                <div className="w-[0.5rem] h-[0.5rem] rounded-[0.25rem] bg-[var(--secondaryColor)]" /> 
                                <h3 className="lg:text-[1rem] md:text-[0.875rem]">{t}</h3>
                            </span>
                        </li>
                    )}
                </ul>
            </div>

        {last && (
            <div className="w-[0.1875rem] h-full bg-[var(--terdiaryColor)] ml-[3.125rem]" />
        )}
        </div>
    )
}

export default StackList