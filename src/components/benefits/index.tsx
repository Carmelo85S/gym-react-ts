import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import {motion} from "framer-motion"
import Benefit from "./Benefit";

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
                viewport={{once: true, amount: 0.5}}
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
        </motion.div>
    </section>
  )
}

export default Benefits
