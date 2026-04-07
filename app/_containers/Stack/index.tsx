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
                <div className="container flex flex-col items-center justify-center">
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
                    <Link href={"/stack"} className="w-[112px] rounded-[12px] px-[21px] py-[6px] bg-[var(--terdiaryColor)] font-bold text-[var(--secondaryColor)] mt-[56px]" type="button">
                        Ver mais
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Stack