"use client";

import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import StackList from "@/app/_components/StackList"
import * as C from "@/app/_consts/tags"
import Link from "next/link";
import Button from "@/app/_components/Button";

const Stack = () => {
    return (
        <motion.section id="stack" className="flex flex-col items-center justify-center snap-start container md:container--desktop pb-[104px] lg:pb-[0]"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div variants={itemAnimation}>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="lg:text-[1.875rem] text-[1.25rem] font-bold mb-[0.75rem] text-[var(--secondaryColor)]">
                        Tecnologias
                    </h2>
                    <p className="md:w-[30rem] lg:mb-[3.375rem] mb-[1.25rem] text-center lg:text-[1rem] text-[0.875rem]">
                        Conheça um pouco sobre as tecnologias que já utilizei ao longo da minha jornada como programador.
                    </p>
                    <div className="grid grid-cols-2 gap-x-[4rem] gap-y-[3rem] md:gap-[0] md:flex">
                        <StackList title="Front-end" tags={C.frontTags} first={true}/>
                        <StackList title="Back-end" tags={C.backTags}/>
                        <StackList title="Outros" tags={C.othersTags} last={true}/>
                    </div>
                    <Link href="/stack">
                        <Button variant="tertiary" size="tag">
                            Ver mais
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Stack