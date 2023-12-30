import { Link } from "react-router-dom";

function Gmail() {
  return (
    <section className="mx-10 my-16 space-y-12 font-beVietnamPro md:my-48  md:ml-20">
      <h3 className="text-xl font-semibold md:text-3xl md:font-medium">
        Want to work together?
      </h3>
      <h2 className="w-[100%] text-wrap text-4xl font-semibold md:py-36 md:text-8xl md:font-semibold">
        <Link
          to="mailto:your.email@example.com?subject=Subject%20Here&body=Message%20Here"
          className="break-all"
        >
          husush21@gmail.com
        </Link>
      </h2>
    </section>
  );
}

export default Gmail;
