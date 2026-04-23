"use client"

import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import About from "@/app/_components/About"
import Timeline from "@/app/_components/Timeline"

const AboutMe = () => {
    return (
        <motion.section
            id="about-me"
            className="container md:container--desktop flex items-center justify-between snap-start py-[104px] lg:py-[0px]"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div variants={itemAnimation}>
                <Timeline />
            </motion.div>

            <motion.div variants={itemAnimation}>
                <About />
            </motion.div>
        </motion.section>
    );
};

export default AboutMe