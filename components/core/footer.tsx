"use client"
import {cn} from "@/utils/cn";
import {motion} from "framer-motion";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={cn("h-max min-h[100px] flex flex-col justify-center items-center")}>
            <motion.div whileInView={{width: "100%"}} transition={{duration: 1.3, ease: "easeInOut"}} className={cn("h-[1px] w-0 bg-gray-300 ")}>
            </motion.div>
            <div className={cn("h-full w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 p-4 gap-3 bg-gray-800")}>
                <div className={cn("h-full grid place-content-center")}>
                    <Image src={"logo.svg"} loading={"lazy"} alt={"logo"} layout={"responsive"} width={0} height={0} className={cn("object-cover w-64 h-64")} />
                </div>
                <div className={cn("bg-teal-200 h-[40svh]")}>

                </div>
                <div className={cn("bg-violet-200 h-[50svh]")}>

                </div>
                <div className={cn("bg-pink-200 h-[50svh]")}>

                </div>
            </div>
        </footer>

    )
}
export default Footer;