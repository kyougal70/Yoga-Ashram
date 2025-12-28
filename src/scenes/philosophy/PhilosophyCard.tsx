import { SelectedPages } from "@/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type PhilosophyCardProps = {
  key: string;
  image: JSX.Element;
  title: string;
  description: string;
  level: string;
  setSelectedPage: (page: SelectedPages) => void;
};

function PhilosophyCard({
  key,
  image,
  title,
  description,
  level,
  setSelectedPage,
}: PhilosophyCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.618 }}
      transition={{ duration: 0.618 }}
      variants={{
        hidden: { opacity: 0, x: Math.random() >= 0.5 ? -75 : 75 },
        visible: { opacity: 1, x: 0 },
      }}
      className="mt-5 basis-3/5 rounded-md border-2 border-gray-300 px-10 py-16 text-center md:h-[800px]"
      key={key}
    >
      <div className="mb-4 flex justify-center">{image}</div>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <h6 className="my-3">Level: {level}</h6>
      <AnchorLink
        className="text-sm font-bold text-tertiary-500 underline hover:text-tertiary-300"
        onClick={() => setSelectedPage("contactus")}
        href="#contactus"
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
}

export default PhilosophyCard;
