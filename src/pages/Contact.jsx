import { Link } from "react-router-dom";
import Gmail from "../components/Gmail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <section>
      <Navbar />
      <div className="my-16">
        <div className="mx-10 flex flex-col space-y-8 md:mx-20">
          <h3 className="font-semibold">Send me a message</h3>
          <Link className="text-sm font-medium">Click here</Link>
        </div>
        <Gmail />
        <div className="mx-10 my-28 flex flex-col space-y-10 md:mx-20 md:my-36">
          <h3>Or connect with me on socials</h3>
          <ul className="flex flex-wrap text-3xl font-medium md:text-5xl">
            <li className="pr-8">Behance</li>
            <li className="pr-8">Dribble</li>
            <li className="pr-8">LinkedIn</li>
          </ul>
        </div>
        <div className="manual-back  flex flex-col space-y-8 border border-slate-100 md:ml-6 md:flex md:flex-row md:py-36">
          <h2 className="mx-10 mt-16 font-beVietnamPro text-2xl font-medium md:mt-7 md:w-[33%] md:text-[40px] md:leading-9">
            Let's discuss your brand and business goals and objectives
          </h2>
          <form className="mx-10 flex flex-col space-y-4 pb-28 md:w-[50%] ">
            <div>
              <input
                name="name"
                placeholder="Full name"
                className="input-back h-12 w-[100%] border bg-slate-200 p-3 indent-5"
              />
            </div>
            <div>
              <input
                name="email"
                placeholder="Email address"
                className="input-back h-12 w-[100%] border bg-slate-200 p-3 indent-5"
              />
            </div>
            <div>
              <textarea
                name="message"
                className="input-back h-24 w-[100%] border border-slate-200 indent-5"
                placeholder="Your message"
              />
            </div>
            <button className="self-start border-b-2 border-cyan-400 hover:border-b-black">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
