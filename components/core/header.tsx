"use client"
import {cn} from "@/utils/cn";
import {ShoppingCart} from "lucide-react";
import Image from "next/image";
import navHeaderItems from "@/models/constant";


const Header = () => {
    return (
        <header
            className={cn("fixed w-full top-0 left-0 min-h-[75px] min-w-[200px] h-max bg-slate-100/50 backdrop-blur-3xl shadow-md ")}>
            <ul className={cn("hidden lg:flex justify-around w-full items-center h-max px-3 py-3")}>
                {navHeaderItems.map((item, i) => (
                        <li key={i} className={cn("z-[11] group")}>
                            <p id={"menu-popup"} className={cn("bg-violet-200 font-medium px-3")}>{item.content}</p>

                        </li>
                ))}
            </ul>
            <div className={cn("z-10 w-full h-[10svh] flex items-center justify-between")}>
                <div className={cn("h-full w-[20%] grid place-content-center p-1")}>
                    <figure className={cn("relative h-20 w-20")}><Image src={"logo_dark.svg"} alt={"logo"}
                                                                        layout={"fill"} objectFit={"cover"}/>
                    </figure>
                </div>
                <div className={cn("h-full w-[60%]  flex justify-center items-center p-3")}>
                    <input className={cn("h-12  w-[80%] border-2 border-gray-300 rounded-md")}/>
                </div>
                <div className={cn("w-[20%] h-full  flex items-center justify-center p-3 ")}>
                    <button>
                        <ShoppingCart/>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;