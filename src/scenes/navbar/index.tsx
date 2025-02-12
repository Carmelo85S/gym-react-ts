import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 dropshadow"

    return (
        <nav
            className={`${navbarBackground} ${flexBetween} fixed py-4 top-0 z-40 w-full`}>
            <section className={`${flexBetween} mx-auto w-5/6`}>

                <section className={`${flexBetween} w-full gap-16`}>
                    {/*LEFT SIDE*/}
                    <img alt="logo" src={Logo} className="w-24 h-auto object-contain" />

                    {/*RIGHT SIDE*/}
                    {isAboveMediumScreen ? (
                        <section className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link 
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Contact us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                            </div>
                            <div className={`${flexBetween} ml-auto gap-8`}>
                                <p>Sign In</p>
                                <ActionButton setSelectedPage = {setSelectedPage}>Become a member</ActionButton>
                            </div>
                        </section>
                        ) : (
                            <button className="rounded-full bg-secondary-500 p-2"
                                onClick = {() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )
                    }
                </section>
            </section>
            {/*MOBILE MODAL*/}
            {!isAboveMediumScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/*CLOSE ICON*/}
                    <div className="flex flex-col justify-items-end p-10">
                        <button
                            className="ml-auto px-7 py-3" 
                            onClick={() => setIsMenuToggled(!setIsMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>

                        {/*MENU ITEMS*/ }
                        <div className="ml-[33%] flex flex-col mt-10 gap-10 text-2xl">
                                <Link 
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Contact us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} 
                                />
                            </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
