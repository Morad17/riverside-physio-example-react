import founder1 from "../assets/img/physio-founder-1.png";
import founder2 from "../assets/img/physio-founder-2.png";
import founder3 from "../assets/img/physio-founder-3.png";
import physioImg9 from "../assets/img/physio-image-9.jpg";

const team = [
  {
    name: "Elliot Hart",
    role: "Clinic Lead, Chartered Physiotherapist",
    image: founder1,
    bio: "Elliot has over twelve years' experience treating musculoskeletal and sports injuries. He has a particular interest in running injuries and post-surgery rehab, and has worked with clubs across Warwickshire. Elliot believes the best outcomes come from patients understanding their own bodies — so expect clear explanations, not mystery.",
    specialty: "Musculoskeletal and sports injuries specialist",
  },
  {
    name: "James Okafor",
    role: "Chartered Physiotherapist",
    image: founder2,
    bio: "James specialises in back and neck pain and chronic pain management, with a background in both private practice and elite sport. He's known for a calm, methodical approach and a knack for getting to the root of pain that's been going on for years. Outside the clinic, he's a keen cyclist — and an equally keen advocate for not \"pushing through\" pain.",
    specialty: "Back, neck pain and chronic pain specialist",
  },
  {
    name: "Priya Shah",
    role: "Senior Physiotherapist",
    image: founder3,
    bio: "Priya has nine years' experience helping people recover from surgery and get back to the things they love. She trained in a leading orthopaedic hospital before joining Riverside, and has a particular interest in knee and shoulder rehab. Priya is known for her patient, encouraging style — she'll always explain the why behind every exercise.",
    specialty: "Post-surgery and orthopaedic rehab specialist",
  },
];

const badgeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const story = [
  {
    title: "Where we started",
    text: "Elliot Hart and James Okafor met in a busy NHS musculoskeletal service, where ten-minute slots and long waiting lists meant patients rarely got the time they needed.",
    icon: (
      <svg {...svgProps}>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
      </svg>
    ),
  },
  {
    title: "Why Riverside",
    text: "In 2018 they opened Riverside to do it differently: longer appointments, real explanations, and treatment plans built around the person, not the clock.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Six years on",
    text: "Athlete or grandparent, you get the same: a physio who listens, explains in plain English, and gives you a plan that fits your life.",
    icon: (
      <svg {...svgProps}>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Proper time",
    text: "Every appointment is long enough for a thorough assessment and an unhurried conversation. We never run to a conveyor-belt schedule, because good clinical decisions need time.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Plain English",
    text: "We explain your diagnosis, your options and the reasoning behind your treatment in clear, jargon-free language, so you always understand what is happening and why.",
    icon: (
      <svg {...svgProps}>
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "A real plan",
    text: "You leave every visit with a structured, evidence-based plan: the exercises to do, the progress to expect, and exactly what happens at your next appointment.",
    icon: (
      <svg {...svgProps}>
        <path d="M9 11l3 3 8-8" />
        <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9" />
      </svg>
    ),
  },
];

function About() {
  return (
    <>
      <section className="about-us">
        <h3 className="about-us__eyebrow">About Riverside</h3>
        <h1 className="about-us__title">
          Experienced care, without the clinical coldness.
        </h1>
        <p className="about-us__text">
          Riverside was built on a simple idea: better physiotherapy happens
          when you're not rushed out the door.
        </p>

        <div className="about-us__cards">
          {story.map((s, i) => (
            <article
              className={`about-us__card${i === 1 ? " is-featured" : ""}`}
              key={s.title}
            >
              <span className="about-us__icon">{s.icon}</span>
              <h2 className="about-us__card-title">{s.title}</h2>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="values">
          <h3 className="about-us__eyebrow">Our values</h3>
          <div className="values__steps">
            {values.map((v, i) => (
              <article
                className={`values__card${i === 0 ? " is-default" : ""}`}
                key={v.title}
              >
                <span className="values__icon">{v.icon}</span>
                <h4 className="values__title">{v.title}</h4>
                <p>{v.text}</p>
              </article>
            ))}
            <img className="values__img" src={physioImg9} alt="" />
          </div>
        </div>
      </section>

      <section className="team">
        <h2 className="team__title">Meet the team</h2>
        <div className="team__grid">
          {team.map((p) => (
            <article className="team__card" key={p.name}>
              <img className="team__img" src={p.image} alt={p.name} />
              <h3 className="team__name">
                {p.name} — {p.role}
              </h3>
              <p className="team__bio">{p.bio}</p>
              <div className="team__creds">
                <span className="team__creds-icon">{badgeIcon}</span>
                <div>
                  <strong>HCPC-registered · MCSP</strong>
                  <span>{p.specialty}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
