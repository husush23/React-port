import { IoMdArrowRoundDown } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <section>
      <div className="mx-auto mt-4 space-y-4 px-6 md:mb-6 md:ml-8 md:flex md:items-center">
        <div className="mb-8 flex flex-col py-4">
          <h1 className="text-4xl md:text-8xl">
            <span className="font-beVietnamPro font-semibold">
              Hi. I am a <br />
            </span>
            <span className="font-plairFairDisplay italic md:text-7xl">
              full-stack developer <br />
            </span>
            <span className="font-poppins font-semibold">based in Nairobi</span>
          </h1>
        </div>
        <img
          src="./main1.jpg"
          alt="Hussein"
          className=" mx-auto w-11/12 rounded-[30%] py-2 md:h-4/5 md:w-3/12 md:pb-3"
        />
      </div>
      <div className="px-auto mx-auto flex flex-col items-center py-8 text-slate-800 md:flex md:flex-row md:justify-between md:px-8 md:py-0">
        <ul className="flex items-center space-x-6 text-lg font-medium md:order-2  md:gap-16">
          <li>
            <a href="https://github.com/husush23">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/husseinkadare/"> LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/husseinkadare2">Twitter(𝕏)</a>
          </li>
        </ul>
        <div className=" flex flex-col items-center justify-center space-x-4 py-4 md:flex md:flex-row md:space-x-2 md:px-5">
          <ScrollLink
            to="info"
            smooth={true}
            duration={700}
            className="flex cursor-pointer items-center justify-center p-2 md:p-0 md:text-6xl"
          >
            <IoMdArrowRoundDown />
          </ScrollLink>
          <ScrollLink
            to="info"
            smooth={true}
            duration={500}
            className="font-md text-sm tracking-wide text-slate-800 md:text-base md:font-semibold md:text-slate-900"
          >
            Scroll to down
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
