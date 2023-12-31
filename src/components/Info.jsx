import { Link } from "react-router-dom";

function Info() {
  return (
    <section className="justfy-center mt-28 flex flex-col items-start px-6 md:flex md:flex-row md:space-x-44">
      <div className="   font-beVietnamPro text-2xl font-medium md:px-20">
        <h3 className=" font-beVietnamPro text-2xl font-medium md:text-3xl">
          01.{" "}
        </h3>
      </div>
      <div className="w-[25% mb-20 pt-4">
        <h2 className="md:-9 pb-8 text-lg font-medium md:text-3xl md:leading-[3rem]">
          Passionate about visual design imperdiet nunc mauris turpis facilisis
          suspendisse non. Purus viverra egestas amet sed pellentesque aliquet
          pellentesque. Massa tincidunt sed nisl pulvinar congue.
        </h2>
        <p className="pb-6 text-lg">
          Sed amet ultricies nibh in cras id in praesent vitae pellentesque
          felis iaculis egestas interdum justo, lacus aenean in iaculis
          scelerisque orci, dolor, consectetur blandit mi semper feugiat
          consequat non volutpat varius.
        </p>
        <Link className="border-b-2 border-cyan-400 pt-6 hover:border-black">
          More about me
        </Link>
      </div>
    </section>
  );
}

export default Info;
