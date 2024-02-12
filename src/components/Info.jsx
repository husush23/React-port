import { Link } from "react-router-dom";

function Info() {
  return (
    <section
      id="info"
      className="justfy-center mt-28 flex flex-col items-start px-6 md:flex md:flex-row md:space-x-44"
    >
      <div className="   font-beVietnamPro text-2xl font-medium md:px-20">
        <h3 className=" font-beVietnamPro text-2xl font-medium md:text-3xl">
          01.{" "}
        </h3>
      </div>
      <div className="w-[25% mb-20 pt-4">
        <h2 className="md:-9 pb-8 text-lg font-medium md:text-3xl md:leading-[3rem]">
          Dedicated to full-stack development, I merge elegant design with
          powerful functionality. Expert in crafting user-centric interfaces and
          scalable backend systems. Passionate about delivering exceptional web
          experiences through innovation and technology
        </h2>
        <p className="pb-6 text-lg">
          Focused on end-to-end solutions, I ensure seamless integration of
          front-end and back-end technologies. My approach combines technical
          skill with design sensibility, aiming for both efficiency and visual
          impact. Committed to excellence, I transform complex challenges into
          intuitive and engaging digital products.
        </p>
        <Link className="border-b-2 border-cyan-400 pt-6 hover:border-black">
          More about me
        </Link>
      </div>
    </section>
  );
}

export default Info;
