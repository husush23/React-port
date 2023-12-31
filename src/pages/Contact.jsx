import { Link } from "react-router-dom";
import Gmail from "../components/Gmail";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <section>
      <Navbar />
      <div className="my-16">
        <div className="mx-10 flex flex-col space-y-8">
          <h3 className="font-semibold">Send me a message</h3>
          <Link className="text-sm font-medium">Click here</Link>
        </div>
        <Gmail />
        <div className="mx-10 my-28 flex flex-col space-y-10">
          <h3>Or connect with me on socials</h3>
          <ul className="flex flex-wrap text-3xl font-medium">
            <li className="pr-8">Behance</li>
            <li className="pr-8">Dribble</li>
            <li className="pr-8">LinkedIn</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
