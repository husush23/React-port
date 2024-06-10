import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l6k3z0s",
        "template_g8p3pog",
        e.target,
        "HioYq74KuahyuMZtj",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus("error");
        },
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="mx-10 flex flex-col items-center space-y-4 pb-28 md:w-[50%]">
      {submissionStatus === "success" && (
        <div className="w-full border border-green-700 bg-green-100 p-4 text-center text-green-700">
          Email successfully sent!
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="w-full border border-red-700 bg-red-100 p-4 text-center text-red-700">
          Failed to send email. Please try again.
        </div>
      )}
      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="input-back h-12 w-full border bg-slate-200 p-3 indent-5"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="input-back h-12 w-full border bg-slate-200 p-3 indent-5"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input-back h-24 w-full border border-slate-200 indent-5"
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          className="self-start border-b-2 border-cyan-400 hover:border-b-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
