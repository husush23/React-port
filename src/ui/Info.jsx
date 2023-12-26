import { NavLink } from "react-router-dom";

function Info() {
  return (
    <section className="justfy-center mt-24 flex flex-col items-start px-6">
      <div className=" flex items-start  font-beVietnamPro text-2xl font-medium">
        <h3 className="text-left font-beVietnamPro text-2xl font-medium">
          01.{" "}
        </h3>
      </div>
      <div className="w-[25% pt-4 ">
        <h2 className="pb-8 text-lg font-medium">
          Passionate about visual design imperdiet nunc mauris turpis facilisis
          suspendisse non. Purus viverra egestas amet sed pellentesque aliquet
          pellentesque. Massa tincidunt sed nisl pulvinar congue.
        </h2>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta
          commodi similique porro, quos illum perferendis tempora esse iure
          officia voluptas magni doloremque, earum, fugiat necessitatibus cumque
          eveniet? Aspernatur, nostrum!
        </p>
        <NavLink className="pb-6">More about me</NavLink>
      </div>
    </section>
  );
}

export default Info;
