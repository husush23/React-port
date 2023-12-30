import { Link } from "react-router-dom";

function Gmail() {
  return (
    <section className="my-48 ml-20  font-beVietnamPro">
      <h3 className="text-3xl font-medium">Want to work together?</h3>
      <h2 className="py-36 text-8xl font-semibold">
        <Link to="mailto:your.email@example.com?subject=Subject%20Here&body=Message%20Here">
          husush21@gmail.com
        </Link>
      </h2>
    </section>
  );
}

export default Gmail;
