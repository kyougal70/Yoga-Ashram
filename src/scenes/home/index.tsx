import { SelectedPages } from "@/types";
import useResponsiveWidth from "@/hooks/useResponsiveWidth";
import MainButton from "@/shared/MainButton";
import beyondMeatLogo from "@/assets/Beyond-Meat.png";
import lushLogo from "@/assets/lushLogo.jpeg";
import patagoniaLogo from "@/assets/Patagonia-Fish-Logo.png";
import starbucksLogo from "@/assets/starbucks-logo.png";
import meditatingGroup from "@/assets/yoga-meditation.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type HomeProps = {
  setSelectedPage: (page: SelectedPages) => void;
};

function Home({ setSelectedPage }: HomeProps) {
  const isWidthAboveMedScreens = useResponsiveWidth("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-14 bg-tertiary-25 py-10 md:h-full md:pb-0"
    >
      {/* main header and image */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage("home")}
      >
        {/* main header */}
        <div className="z-10 mt-20 md:basis-3/5">
          {/* headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.618 }}
            transition={{ duration: 0.382 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className=" text-gray-100">
                {/* home page banner text */}
                <h2 className="mb-6 font-montserrat text-5xl">Yoga Ashram</h2>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.618 }}
                  transition={{ duration: 0.618 }}
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h3 className="text-2xl">Mindful Meditation</h3>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.618 }}
                  transition={{ duration: 0.618 }}
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h3 className="text-2xl">Spiritual Awakening</h3>
                </motion.div>
              </div>
            </div>
            <p className="mt-6 text-base text-gray-100 md:text-start">
              Connect your Mind, Body and Soul. Build strength, clarity and
              bliss by employing ancient, powerful and secret tantric practises.
              Harness the kundalini energy in your chakras to achieve
              transcendence.
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 mb-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "tween", duration: 0.618 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <MainButton setSelectedPage={setSelectedPage}>Join Now</MainButton>
            <AnchorLink
              className="text-sm font-bold text-tertiary-500 underline hover:text-tertiary-300"
              onClick={() => setSelectedPage("contactus")}
              href="#contactus"
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={meditatingGroup}
            alt="group meditation led by a teacher"
            className="rounded-lg"
          />
        </div>
      </motion.div>
      {/* sustainable brands */}
      {isWidthAboveMedScreens && (
        <div className="h-[200px] w-full py-4">
          <div className=" mx-auto h-full w-5/6  pt-10">
            <div className="flex w-5/6 items-center justify-between gap-6 font-montserrat text-xl font-bold ">
              Our Sponsors
              <img
                src={starbucksLogo}
                alt="starbucks brand logo"
                className="h-24 w-24"
              />
              <img
                src={beyondMeatLogo}
                alt="beyond meat brand logo"
                className="h-24 w-24"
              />
              <img src={lushLogo} alt="lush brand logo" className="h-24 w-24" />
              <img
                src={patagoniaLogo}
                alt="patagonia brand logo"
                className="h-24 w-24"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
