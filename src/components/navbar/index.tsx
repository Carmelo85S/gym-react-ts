import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import { nav } from "framer-motion/client";

const Navbar = () => {

    const flexBetween = "flex item-center flex-between";
    
    return (
        <nav
            className={`${flexBetween} fixed py-6 top-0 z-30 w-full`}>
            <section className={`${flexBetween} mx-auto w-5/6`}>

                <section className={`${flexBetween} w-full gap-16`}>
                    {/*LEFT SIDE*/}
                    <img alt="logo" src={Logo} className="w-24 h-auto object-contain" />

                    {/*RIGHT SIDE*/}
                    <section className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} my-auto gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Classes</p>
                            <p>Contact us</p>
                        </div>
                        <div className="gap-8 ml-auto text-sm">
                            <p>Sign In</p>
                            <button>Become a member</button>
                        </div>
                    </section>
                </section>

            </section>
        </nav>
    )
}

export default Navbar
