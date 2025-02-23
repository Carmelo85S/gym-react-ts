import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

type Props = {
    icon: ReactNode;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariants}
      className="mt-5 rounded-md border-2 border-gray-100 bg-white px-5 py-16 text-center shadow-lg">
     <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit

