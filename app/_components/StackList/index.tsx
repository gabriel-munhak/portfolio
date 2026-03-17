import Image from "next/image"
import generic from "@/app/assets/generic.svg"

const StackList = ({first, title, tags, last}: StackList) => {
    return (
        <div className="flex h-[300px] text-[var(--secondaryColor)] overflow-y-scroll">
            <div className={`w-[3px] h-full bg-[var(--terdiaryColor)] mr-[50px] ${!first ? "ml-[50px]" : "ml-[0]"}`} />

            <div className="flex flex-col items-center">
                <Image className="mb-[16px]" src={generic} alt={`Icone da tecnlogia: ${title}`} />
                <h2 className="text-[24px] font-black mb-[16px]">{title}</h2>
                {tags.map((t, index) => 
                    <span key={index} className="flex items-center gap-[8px] text-[var(--secondaryColor)]">
                        <div className="w-[8px] h-[8px] rounded-[4px] bg-[var(--secondaryColor)]" /> 
                        {t}
                    </span>
                )}
            </div>

        {last && (
            <div className="w-[3px] h-[390px] bg-[var(--terdiaryColor)] ml-[50px]" />
        )}
        </div>
    )
}

export default StackList