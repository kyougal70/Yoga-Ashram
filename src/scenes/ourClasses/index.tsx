import { SelectedPages } from "@/types";
import { motion } from "framer-motion";
import BannerText from "@/shared/BannerText";
import Class from "./Class";

import medHandsOutstretched from "@/assets/women-meditating-hands-outsretched.png";
import medTeacher from "@/assets/women-meditating-teacher.png";
import manStretching from "@/assets/man-stretching.png";
import manDiffPose from "@/assets/man-difficult-pose.png";
import womanDiffPose from "@/assets/woman-difficult-pose.png";
import womenGroupStretching from "@/assets/women-group-stretching.png";

type ClassesObj = {
  name: string;
  description: string;
  image: string;
};

const classes: ClassesObj[] = [
  {
    name: "Iyengar Yoga",
    description:
      "Iyengar yoga is a form of yoga that emphasizes proper alignment and attention to detail in the execution of yoga poses, while using props, such as blankets, blocks, and straps, which are used to help students achieve proper alignment.",
    image: medHandsOutstretched,
  },
  {
    name: "Ashtanga Yoga",
    description:
      "Ashtanga yoga is a dynamic and physically demanding form of yoga that is based on a set series of poses (asanas) that are linked together by flowing movements (vinyasas). It is characterized by its focus on physical strength, flexibility, and breath control.",
    image: manDiffPose,
  },
  {
    name: "Kundalini Yoga",
    description:
      "Kundalini yoga is a powerful and transformative form of yoga that focuses on awakening the energy within us known as kundalini. Kundalini is believed to be a dormant, coiled energy located at the base of the spine that can be awakened and raised to the crown of the head.",
    image: medTeacher,
  },
  {
    name: "Hatha Yoga",
    description:
      "Hatha yoga classes typically focus on alignment and proper form in the execution of the poses. They may include a combination of standing poses, seated poses, twists, backbends, inversions, and relaxation poses. Hatha yoga classes may also include pranayama (breath control) and meditation practices.",
    image: manStretching,
  },
  {
    name: "Mantra Yoga",
    description:
      "Mantra yoga is a form of tantric yoga that involves the repetition of sacred mantras, or words or phrases with spiritual significance, to cultivate and channel the flow of energy in the body. Mantras are believed to have the power to transform the mind and to bring about spiritual growth and enlightenment.",
    image: womenGroupStretching,
  },
  {
    name: "Raja Yoga",
    description:
      "Raja yoga is a form of tantric yoga that focuses on the cultivation of the mind through the practice of meditation and the attainment of higher states of consciousness. It is based on the Yoga Sutras of Patanjali, an ancient text that outlines the path to spiritual realization through the practice of yoga.",
    image: womanDiffPose,
  },
];

type OurClassesProps = { setSelectedPage: (page: SelectedPages) => void };

function OurClasses({ setSelectedPage }: OurClassesProps) {
  return (
    <section className="w-full bg-tertiary-25 py-10" id="ourclasses">
      <motion.div onViewportEnter={() => setSelectedPage("ourclasses")}>
        <motion.div
          className="mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.618 }}
          transition={{ duration: 0.382 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" w-full">
            <BannerText>Private Classes</BannerText>
            <p className="py-5 ">
              With a particular focus on private and semi-private classes and
              holistic health coaching, our clients can be sure they are
              investing in a high-quality, transformative mindbody experience
              specifically designed to cater to their unique needs, all in a
              serene, upscale environment evocative of a true Arizona yoga
              studio.
            </p>
            <p>
              Whether you are seeking to elevate your yoga practice,
              strengthen/tone your body, improve flexibility, or find relief
              from biomechanical misalignment or chronic stress (physical and
              mental), our world-class teachers can help you.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto mt-10 h-[350px] w-5/6 overflow-x-auto overflow-y-hidden">
          {/* overflow happens: child container has a bigger width than parent container which is full width */}
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, idx) => (
              <Class
                key={`${item.image}-${idx}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
