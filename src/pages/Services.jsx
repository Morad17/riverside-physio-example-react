import { useState } from "react";
import Reveal from "../components/Reveal";
import physioImg4 from "../assets/img/physio-image-4.png";
import physioImg5 from "../assets/img/physio-image-5.png";
import physioImg7 from "../assets/img/physio-image-7.png";
import physioImg8 from "../assets/img/physio-image-8.png";

function ServiceCard({ card, icon, delay }) {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = card.text.split(/(?<=[.!?])\s+/);
  const more = rest.join(" ");

  return (
    <Reveal as="article" delay={delay} className="services-grid__card">
      <div className="services-grid__title-group">
        <span className="services-grid__icon">{icon}</span>
        <h2 className="services-grid__title">{card.title}</h2>
        <div className="services-grid__buffer-right"></div>
      </div>

      <p className="services-grid__text">{first}</p>
      <div
        className={`services-grid__extra${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="services-grid__extra-inner">
          {more && <p className="services-grid__text">{more}</p>}
          <p className="services-grid__list">
            <em>{card.label}</em> {card.list}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="services-grid__more"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Read less" : "Read more"}
        <span aria-hidden="true">{open ? "↑" : "↗"}</span>
      </button>
      <img className="services-grid__img" src={card.image} alt="" />
    </Reveal>
  );
}

function Services() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      id="Blood-Donate-Drop--Streamline-Core"
      height="14"
      width="14"
    >
      <desc>Blood Donate Drop Streamline Icon: https://streamlinehq.com</desc>
      <g id="blood-donate-drop">
        <path
          id="Union"
          fill="currentColor"
          fillRule="evenodd"
          d="m7 0.464 0.377 -0.27a0.464 0.464 0 0 0 -0.754 0L7 0.464Zm0 0 -0.377 -0.27 -0.002 0.002 -0.005 0.006L6.6 0.226a15.595 15.595 0 0 0 -0.276 0.4 23.46 23.46 0 0 0 -0.652 1.027 12.4 12.4 0 0 0 -0.664 1.25c-0.176 0.395 -0.33 0.831 -0.33 1.198 0 0.631 0.24 1.24 0.673 1.691 0.434 0.452 1.027 0.71 1.649 0.71 0.622 0 1.215 -0.258 1.649 -0.71 0.433 -0.451 0.673 -1.06 0.673 -1.69 0 -0.368 -0.154 -0.804 -0.33 -1.2a12.408 12.408 0 0 0 -0.664 -1.25A23.088 23.088 0 0 0 7.4 0.227L7.384 0.202 7.379 0.196 7.378 0.195 7 0.465ZM0 5.112v4.726a2 2 0 0 0 0.586 1.414l2.191 2.191V14H6.11v-2.874a2.22 2.22 0 0 0 -0.65 -1.57L4.022 8.118l-0.004 -0.004a0.8 0.8 0 0 0 -1.076 1.182l0.92 0.92a0.5 0.5 0 1 1 -0.707 0.707l-0.92 -0.92a1.8 1.8 0 0 1 -0.014 -2.53V5.111a1.11 1.11 0 1 0 -2.222 0Zm14 4.726V5.112a1.11 1.11 0 0 0 -2.222 0v2.361a1.8 1.8 0 0 1 -0.014 2.532l-0.92 0.919a0.5 0.5 0 0 1 -0.707 -0.707l0.92 -0.92A0.8 0.8 0 0 0 9.98 8.115l-0.004 0.004L8.54 9.555a2.22 2.22 0 0 0 -0.65 1.571V14h3.332v-0.556l2.191 -2.192A2 2 0 0 0 14 9.838Z"
          clipRule="evenodd"
          strokeWidth="1"
        ></path>
      </g>
    </svg>
  );

  const cards = [
    {
      title: "Sports injuries",
      image: physioImg4,
      text: "From weekend runners to Sunday-league footballers, we treat the full range of sports injuries — sprains, strains, tendon problems, and overuse injuries that build up over time. We don't just settle the pain; we work out why it happened and rehab it so you're not back in six weeks with the same thing. You'll get a return-to-sport plan you can actually follow.",
      label: "Common issues:",
      list: "runner's knee, tennis elbow, hamstring strains, Achilles pain, ankle sprains.",
    },
    {
      title: "Back & neck pain",
      image: physioImg5,
      text: "Back and neck pain is the most common reason people come to see us — and one of the most treatable. Whether you've woken up unable to move or you've been putting up with it for years, we use hands-on treatment alongside targeted exercises to get you moving again. No jargon, no endless appointments — a clear plan and honest timelines.",
      label: "Common issues:",
      list: 'lower back pain, sciatica, neck stiffness, "tech neck", postural pain.',
    },
    {
      title: "Post-surgery rehabilitation",
      image: physioImg7,
      text: "Recovering from surgery can feel daunting, especially when you're not sure what's safe to do. We work alongside your surgeon's guidance to rebuild strength, movement, and confidence at the right pace — never rushing, never holding you back unnecessarily. Most people are surprised how much structured rehab speeds things up.",
      label: "We support recovery after:",
      list: "knee and hip replacements, ACL reconstruction, shoulder surgery, fractures.",
    },
    {
      title: "Persistent pain",
      image: physioImg8,
      text: "Long-standing pain is different, and it needs a different approach. We take the time to understand how pain affects your daily life, then build a paced, realistic plan to help you do more of what matters with less flare-up. This isn't about \"pushing through\" — it's about getting control back.",
      label: "We help with:",
      list: "persistent back pain, arthritis-related pain, fibromyalgia, recurring injuries.",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <Reveal as="h1">
          Care built around your body, your goals and your pace.
        </Reveal>
      </section>

      <section className="services-grid">
        <div className="services-grid__inner">
          {cards.map((c, i) => (
            <ServiceCard key={c.title} card={c} icon={icon} delay={(i % 2) * 0.12} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
