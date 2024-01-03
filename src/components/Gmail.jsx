import { Link } from "react-router-dom";

function Gmail() {
  return (
    <section className="mx-10 my-12 font-beVietnamPro md:my-12  md:ml-20">
      <h2 className="w-[100%] text-wrap text-4xl font-semibold md:py-24 md:text-8xl md:font-semibold">
        <Link
          to="mailto:your.email@example.com?subject=Subject%20Here&body=Message%20Here"
          className="break-all underline"
        >
          husush21@gmail.com
        </Link>
      </h2>
    </section>
  );
}

export default Gmail;
