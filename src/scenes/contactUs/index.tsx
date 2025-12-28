import BannerText from "@/shared/BannerText";
import { SelectedPages } from "@/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import stableDiffWomanPraying from "@/assets/stableDiffWomanPraying.jpeg";

type ContactUsProps = {
  setSelectedPage: (page: SelectedPages) => void;
};

function ContactUs({ setSelectedPage }: ContactUsProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  async function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    //trigger allows form validation if needed
    const isValid = await trigger();

    if (!isValid) {
      evt.preventDefault();
    }
  }

  return (
    <section
      id="contactus"
      className="mx-auto w-full bg-tertiary-25 pt-16 pb-24"
    >
      <motion.div
        className="mx-auto w-5/6  "
        onViewportEnter={() => setSelectedPage("contactus")}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.618 }}
          transition={{ duration: 0.382 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <BannerText>
            <span className="text-tertiary-700">JOIN NOW</span> to liberate the
            energy in your chakras!
          </BannerText>
          <p className="my-3">Questions? We would love to hear from you!</p>
        </motion.div>
        {/* form */}
        <div className="mt-6 justify-between gap-8  md:grid md:grid-cols-2">
          <motion.div
            className="md:t-0 basis-3/5  md:my-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.618 }}
            transition={{ duration: 0.618 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              //when someone clicks submit, we go to a new page
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/el/xuguco"
              method="POST"
            >
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                className="mt-5 w-full rounded-lg bg-secondary-300 px-5 py-3 placeholder-gray-100"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {/* name is from the value registered in register */}
              {errors.name && (
                <p className="mt-1 text-primary-700">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 chars."}
                </p>
              )}

              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                className="mt-5 w-full rounded-lg bg-secondary-300 px-5 py-3 placeholder-gray-100"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern:
                    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/,
                })}
              />
              {/* name is from the value registered in register */}
              {errors.email && (
                <p className="mt-1 text-primary-700">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <label htmlFor="message"></label>
              <textarea
                rows={4}
                cols={50}
                id="message"
                className="mt-5 w-full rounded-lg bg-secondary-300 px-5 py-3 placeholder-gray-100"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {/* name is from the value registered in register */}
              {errors.message && (
                <p className="mt-1 text-primary-700">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 chars."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-tertiary-500 px-20 py-3 transition duration-500 hover:text-white "
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.618 }}
            transition={{ delay: 0.2, duration: 0.618 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full sm:mx-auto sm:h-[512px] sm:w-[512px] md:h-[512px] md:w-[512px]">
              <img
                src={stableDiffWomanPraying}
                alt="stylized portrait of natural woman praying"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
