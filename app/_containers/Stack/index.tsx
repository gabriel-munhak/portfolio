"use client";

import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import StackList from "@/app/_components/StackList"
import * as C from "@/app/_consts/tags"
import Link from "next/link";

const Stack = () => {
    return (
        <motion.section id="stack" className="snap-start"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div variants={itemAnimation}>
                <div className="container container--desktop flex flex-col items-center justify-center">
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
                    <Link href={"/stack"} className="rounded-[0.75rem] lg:px-[1.3125rem] lg:py-[0.375rem] px-[1rem] py-[0.25rem] bg-[var(--terdiaryColor)] font-bold text-[var(--secondaryColor)] lg:mt-[3.5rem] md:mt-[0.75rem] mt-[2rem] lg:text-[1rem] text-[0.875rem]" type="button">
                        Ver mais
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Stack