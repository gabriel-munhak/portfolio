"use client";

import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/app/_consts/motion";
import Contact from "@/app/_components/Contact"

const ContactMe = () => {
    return (
        <motion.section id="contact" className="snap-start"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >

            <motion.div variants={itemAnimation}>
                <Contact />
            </motion.div>
        </motion.section>
    )
}

export default ContactMe