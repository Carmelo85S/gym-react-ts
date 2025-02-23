import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 flex flex-col md:flex-row items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* MAIN HEADER */}
        <motion.div
          className="z-20 mt-32 w-full md:w-3/5 block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* HEADINGS */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-unlocktext">
              <img alt="home-page-text" src={HomePageText} />
            </div>
          </div>

          <p className="mt-8 text-sm">
            Motivation, support, and workouts that truly make a difference. 
            Are you ready to be part of something bigger?
          </p>
          <p className="mt-8 text-sm font-bold">
            Sign up today and get 50% off your first month!
          </p>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Become a member
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex w-full md:w-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </motion.div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <motion.div
          className="h-[150px] w-full bg-primary-100 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
