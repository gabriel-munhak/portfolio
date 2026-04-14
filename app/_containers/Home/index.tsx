"use client";

import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import Hero from "@/app/_components/Hero"
import Nav from "@/app/_components/Nav"

export const Home = () => {
    return(
        <motion.section id="home" className="snap-start md:pt-[2rem] lg:pt-[2.5rem]"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >

        <motion.div variants={itemAnimation}>
            <Nav />
        </motion.div>

        <motion.div variants={itemAnimation}>
            <Hero />
        </motion.div>
        </motion.section>
    )
}

export default Home