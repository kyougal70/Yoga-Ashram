import BannerText from "@/shared/BannerText";
import { PhilosphyCardType, SelectedPages } from "@/types";
import { motion } from "framer-motion";
import stretchingFocused from "@/assets/woman-stretching-focused.png";
import womenLaughingStretching from "@/assets/women-laughing-stretching.png";
import yogaStretching from "@/assets/yoga-stretching.png";
import threeWomenPose from "@/assets/three-women-pose.png";
import twoWomenLaughing from "@/assets/yoga-two-women-laughing.png";
import pranaYogaPose from "@/assets/prana-yoga-pose.png";
import PhilosophyCard from "./PhilosophyCard";
import MainButton from "@/shared/MainButton";

const philosophyCards: PhilosphyCardType[] = [
  {
    image: (
      <img
        src={stretchingFocused}
        alt="pic of incense burning"
        className="rounded-lg"
      />
    ),
    title: "Gentle Flow and Renew",
    description:
      "If you're new to yoga, been off the mat for awhile, have a physical injury or limitation, or just want to get back to basics, this it the class for you! Build awareness of the breath and body using restorative gentle poses. A wonderful way to build heat, strength, and deep surrender through carefully orchestrated movements, controlled pressure and well-measured stretches.",
    level: "Beginners to Advanced yogis",
  },
  {
    image: (
      <img
        src={yogaStretching}
        alt="pic of man stretching"
        className="rounded-lg"
      />
    ),
    title: "Hot Vinyasa Flow",
    description:
      "Hot Vinyasa Flow is the merging of standing and balancing postures fused with Vinyasa, flowing movement through Sun Salutations, standing poses, arm balancing, seated poses, core drills and backbends, in a heated room to increase flexibility, strength, lung capacity and blood circulation. Heated yoga can also help the body flush out toxins, increase heart rate for a better cardio workout and keep muscles in an optimal state for yoga.",
    level: "Beginners to Advanced yogis",
  },
  {
    image: (
      <img
        src={threeWomenPose}
        alt="pic of three women dynamically stretching"
        className="rounded-lg"
      />
    ),
    title: "Power Yoga",
    description:
      "Power Vinyasa Flow Yoga is a powerful, energetic form of yoga where students fluidly move from one pose to the next while connecting their breathing to their movements. It incorporates strength, flexibility, balance, cardio and physical and mental stamina in one session. Baron Baptiste, the founder of this form of yoga, describes this practice as “the perfect blend of sweat and serenity.”",
    level: "Intermediate to Advanced yogis",
  },
  {
    image: (
      <img
        src={twoWomenLaughing}
        alt="pic of two women laughing"
        className="rounded-lg"
      />
    ),
    title: "Tantric Yoga",
    description:
      "Tantra practice is deeply tied to energy connections, sensuality and self-awareness, which can then lead to physical and mental liberation. The exploration of the subtle energies within the body and their connection to the universe provide the opportunity to understand the purpose of life and the principles of union in new dimensions. Expand your capacity for intimacy and become a better lover by deepening your connection to previously dormant energies.",
    level: "Advanced yogis",
  },
];

type PhilosophyProps = {
  setSelectedPage: (page: SelectedPages) => void;
};

function Philosophy({ setSelectedPage }: PhilosophyProps) {
  return (
    <section
      id="philosophy"
      className="mx-auto mt-8 min-h-full w-full  bg-tertiary-25 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage("philosophy")}
        className="xs:mx-auto xs:w-5/6"
      >
        <motion.div
          className="md:my-5 md:w-full md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.618 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <BannerText>Voted Arizona's Best Yoga Studio</BannerText>
          <p className="my-6 text-gray-600">
            Yoga Ashram has been part of the desert yoga & wellness community
            for over a decade. We welcome you with an open heart and are
            committed to providing a safe space for your spiritual journey. Yoga
            Ashram is where you can discover the lightness in your heart, create
            space in your mind and unlock your tantric potential.
          </p>
          <img
            src={womenLaughingStretching}
            alt="photo of woman stretching on a yoga mat in a field"
            className="rounded-lg"
          />
        </motion.div>

        {/* philosophy */}
        <div
          // className="mt-6 items-center justify-between gap-8  xs:flex-col sm:flex md:flex-row"
          className="mt-20 flex flex-col"
        >
          <h3 className="mt-20 font-montserrat text-2xl font-bold text-gray-100">
            Our Philosophy
          </h3>
          <div className="w-full sm:grid sm:grid-cols-2 sm:gap-10 md:grid md:grid-cols-4 md:gap-10">
            {philosophyCards.map((philosophyCard) => (
              <PhilosophyCard
                key={philosophyCard.title}
                image={philosophyCard.image}
                title={philosophyCard.title}
                description={philosophyCard.description}
                level={philosophyCard.level}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
        {/* image and description */}
        <motion.div
          className="md: grid w-full gap-10 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.618 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* image */}
          <img
            src={pranaYogaPose}
            alt="women in meditation"
            className="mx-auto my-10 rounded-lg"
          />

          {/* description */}
          <motion.div
            className="my-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.618 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* title */}
            <h2 className="font-montserrat text-2xl font-bold text-gray-100">
              Connection of Mind, Body, and Soul
            </h2>

            {/* description */}
            <p className="mt-6 text-gray-100">
              Yoga offers so many benefits to your health and overall life.
              Located in the heart of Flowing Wells, AZ, we are here to provide
              you with safe and experienced instruction. Whether you are just
              beginning your practice or are a seasoned yogi, we have just what
              you need. Drop-ins welcome, mats and props are available to use,
              easy parking and beautiful mountain views that encourage a
              tranquil and grounding experience.
            </p>

            {/* button */}
            <div className="mt-10">
              <MainButton setSelectedPage={setSelectedPage}>
                Join now
              </MainButton>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Philosophy;
