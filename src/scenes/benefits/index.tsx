import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import {motion} from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of art facilities",
        description:"Get fit with expert coaching, top-tier equipment, and high-energy classes designed for real results. Whether you’re building muscle, losing weight, or boosting endurance, we’ve got you covered. Join our community and start your transformation today!"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Hundreds of diverse classes",
        description:"Get fit with expert coaching, top-tier equipment, and high-energy classes designed for real results. Whether you’re building muscle, losing weight, or boosting endurance, we’ve got you covered. Join our community and start your transformation today!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and pro trainers",
        description:"Get fit with expert coaching, top-tier equipment, and high-energy classes designed for real results. Whether you’re building muscle, losing weight, or boosting endurance, we’ve got you covered. Join our community and start your transformation today!"
    },
]

const container = {
    hidden:{},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/*HEADER COMMENT*/}
            <motion.div className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    Get fit with expert coaching, top-tier equipment, 
                    and high-energy classes designed for real results. 
                    Whether you’re building muscle, losing weight, or
                    boosting endurance, we’ve got you covered. 
                    Join our community and start your transformation today! 
                </p>
            </motion.div>

            {/*BENEFITS CARD SECTION*/}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial = "hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage} // Assicurati di passarlo
                />
            ))}
            </motion.div>

            {/*GRAPHICS AND DESCRIPTION*/}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*GRAPHIC*/}
                <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.4}}
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }} className="mx-auto" alt="benefits page graphic" src={BenefitsPageGraphic}/>

                {/*DESCRIPTION*/}
                <div>
                    {/*TITLE*/}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z[-1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 100},
                                visible: {opacity: 1, x: 0},
                            }}>
                                <HText>
                                    MILLIONS OF HAPPY MEMBER GETTING <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/*DESCRIPTION*/}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 100},
                                visible: {opacity: 1, x: 0},
                            }}>
                            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque culpa facilis accusamus suscipit veritatis, fugit hic eum quo tenetur eveniet numquam qui id molestias adipisci aliquid sequi beatae fugiat.</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente laudantium nobis sint voluptate odit neque, suscipit, facere atque ipsa temporibus nam! Ut reprehenderit molestias voluptatibus similique odit deserunt corporis?</p>
                        </motion.div>
                    {/*BUTTON*/}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join now
                                </ActionButton>
                            </div>

                        </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits
