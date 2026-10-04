import { useState } from "react";
import Reveal from "../components/Reveal";
import contactImg from "../assets/img/physio-image-contact.jpg";

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const phoneIcon = (
  <svg {...svgProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const mailIcon = (
  <svg {...svgProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const pinIcon = (
  <svg {...svgProps}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const clockIcon = (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const details = [
  {
    icon: phoneIcon,
    label: "Call us",
    lines: ["01926 xxx xxx", "We answer Mon–Sat during clinic hours."],
  },
  {
    icon: mailIcon,
    label: "Email",
    lines: [
      "hello@riversidephysio.co.uk",
      "We'll get back to you the same working day.",
    ],
  },
  {
    icon: pinIcon,
    label: "Find us",
    lines: [
      "[Plausible address], Leamington Spa, CV32 xxx",
      "Free parking available on site.",
    ],
  },
  {
    icon: clockIcon,
    label: "Opening hours",
    lines: [
      "Monday–Friday: 8am–7pm",
      "Saturday: 9am–1pm",
      "Sunday: Closed",
    ],
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact__inner">
        <Reveal className="contact__left">
          <img className="contact__image" src={contactImg} alt="" />
          <div className="contact__info">
            {details.map((d, i) => (
              <Reveal
                className="contact__row"
                delay={i * 0.08}
                key={d.label}
              >
                <span className="contact__icon">{d.icon}</span>
                <div>
                  <strong className="contact__label">{d.label}</strong>
                  {d.lines.map((line) => (
                    <p className="contact__line" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="form"
          delay={0.12}
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <span className="contact__eyebrow">Book your assessment</span>
          <h1 className="contact__title">Let’s start with a conversation.</h1>

          <label className="contact__field">
            Your name
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={update}
              required
            />
          </label>
          <label className="contact__field">
            Email address
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update}
              required
            />
          </label>
          <label className="contact__field">
            Phone number
            <input
              name="phone"
              type="tel"
              placeholder="01926 000 000"
              value={form.phone}
              onChange={update}
            />
          </label>
          <label className="contact__field">
            What's bothering you (short message)
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a little about it…"
              value={form.message}
              onChange={update}
            />
          </label>

          <button type="submit" className="contact__btn">
            Send booking request
          </button>
          {sent && (
            <p className="contact__sent" role="status">
              Thanks — we'll be in touch the same working day.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
