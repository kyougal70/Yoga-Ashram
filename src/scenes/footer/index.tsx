import { SelectedPages } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaDharmachakra } from "react-icons/fa";

type FooterProps = { setSelectedPage: (page: SelectedPages) => void };

function Footer({ setSelectedPage }: FooterProps) {
  return (
    <footer className="w-full bg-tertiary-25 py-14 text-gray-100">
      {/* grid cols div */}
      <div className="mx-auto my-auto w-5/6 gap-10 xs:flex xs:flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
        <div className="mx-auto sm:col-span-2 md:col-span-1">
          <div className="mx-auto flex items-center justify-start">
            <h1 className="mr-5 font-montserrat text-2xl text-gray-100 ">
              Yoga Ashram
            </h1>
            <FaDharmachakra className="scale-150 transform text-secondary-700" />
          </div>
          <p className="pt-8">
            Beginners build a solid foundation from our systematic and safe
            instruction. Your every-day yoga practice can be a powerful workout,
            or a mindful exploration of subtlety and calm. Enjoy classes of
            different length, focus, and style throughout the day.{" "}
          </p>
          <p className="pt-8">© Yoga Ashram / All Rights Reserved</p>
        </div>

        {/* contacts */}
        <div className="mx-auto flex-col items-center justify-center xs:ml-0 sm:col-span-1 sm:mx-auto md:col-span-1">
          <h5 className="mt-10 font-bold">Contacts</h5>
          <p className="mt-5">29 NW Old Valley</p>
          <p className="my-2 mb-4">Flowing Wells, AZ</p>
          <p className="my-2 mb-4">+ (123) 1-800-555-5555</p>
          <p className="my-2">Every day: 08:00 - 22:00</p>
          <p className="my-2">Sat - Sun: 06:00 - 21:00</p>
        </div>

        {/* links */}
        <div className="mx-auto flex-col items-center justify-center xs:ml-0 sm:col-span-1 sm:mx-auto md:col-span-1">
          <h5 className="mt-10 font-bold">Links</h5>
          <AnchorLink
            className="hover:cursor-pointer hover:text-tertiary-300"
            onClick={() => setSelectedPage("home")}
            href="#home"
          >
            <p className="mt-5">Home</p>
          </AnchorLink>

          <AnchorLink
            className="hover:cursor-pointer hover:text-tertiary-300"
            onClick={() => setSelectedPage("philosophy")}
            href="#philosophy"
          >
            <p className="my-2">Philosophy</p>
          </AnchorLink>

          <AnchorLink
            className="hover:cursor-pointer hover:text-tertiary-300"
            onClick={() => setSelectedPage("ourclasses")}
            href="#ourclasses"
          >
            <p className="my-2">Our Classes</p>
          </AnchorLink>

          <AnchorLink
            className="hover:cursor-pointer hover:text-tertiary-300"
            onClick={() => setSelectedPage("contactus")}
            href="#contactus"
          >
            <p className="my-2">Contact Us</p>
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
