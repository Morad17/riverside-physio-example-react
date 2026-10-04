import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ServiceGrid from "../components/ServiceGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import calendar from "../assets/img/calendar-icon.svg";
import physioImg1 from "../assets/img/physio-image-1.jpg";

function Home() {
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
          fill="#fff"
          fill-rule="evenodd"
          d="m7 0.464 0.377 -0.27a0.464 0.464 0 0 0 -0.754 0L7 0.464Zm0 0 -0.377 -0.27 -0.002 0.002 -0.005 0.006L6.6 0.226a15.595 15.595 0 0 0 -0.276 0.4 23.46 23.46 0 0 0 -0.652 1.027 12.4 12.4 0 0 0 -0.664 1.25c-0.176 0.395 -0.33 0.831 -0.33 1.198 0 0.631 0.24 1.24 0.673 1.691 0.434 0.452 1.027 0.71 1.649 0.71 0.622 0 1.215 -0.258 1.649 -0.71 0.433 -0.451 0.673 -1.06 0.673 -1.69 0 -0.368 -0.154 -0.804 -0.33 -1.2a12.408 12.408 0 0 0 -0.664 -1.25A23.088 23.088 0 0 0 7.4 0.227L7.384 0.202 7.379 0.196 7.378 0.195 7 0.465ZM0 5.112v4.726a2 2 0 0 0 0.586 1.414l2.191 2.191V14H6.11v-2.874a2.22 2.22 0 0 0 -0.65 -1.57L4.022 8.118l-0.004 -0.004a0.8 0.8 0 0 0 -1.076 1.182l0.92 0.92a0.5 0.5 0 1 1 -0.707 0.707l-0.92 -0.92a1.8 1.8 0 0 1 -0.014 -2.53V5.111a1.11 1.11 0 1 0 -2.222 0Zm14 4.726V5.112a1.11 1.11 0 0 0 -2.222 0v2.361a1.8 1.8 0 0 1 -0.014 2.532l-0.92 0.919a0.5 0.5 0 0 1 -0.707 -0.707l0.92 -0.92A0.8 0.8 0 0 0 9.98 8.115l-0.004 0.004L8.54 9.555a2.22 2.22 0 0 0 -0.65 1.571V14h3.332v-0.556l2.191 -2.192A2 2 0 0 0 14 9.838Z"
          clip-rule="evenodd"
          stroke-width="1"
        ></path>
      </g>
    </svg>
  );
  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      id="Location-Pin-3--Streamline-Core"
      height="14"
      width="14"
    >
      <desc>Location Pin 3 Streamline Icon: https://streamlinehq.com</desc>
      <g id="location-pin-3--navigation-map-maps-pin-gps-location">
        <path
          id="Union"
          fill="#fff"
          fill-rule="evenodd"
          d="M7.00002 -0.000732422c2.62153 0 4.80608 2.184562422 4.80608 4.806102422 0 0.85559 -0.2941 1.69938 -0.7051 2.46388 -0.4126 0.76748 -0.9588 1.48407 -1.50144 2.09414 -0.54367 0.61127 -1.09301 1.12591 -1.52101 1.48951 -0.21378 0.1816 -0.4009 0.3286 -0.54517 0.4327 -0.07124 0.0514 -0.13799 0.0966 -0.19561 0.1312 -0.02804 0.0168 -0.06221 0.0362 -0.09855 0.053 -0.01809 0.0083 -0.04411 0.0195 -0.07516 0.0294 -0.02442 0.0078 -0.08546 0.0261 -0.16404 0.0261 -0.07928 0 -0.1408 -0.0186 -0.1653 -0.0265 -0.03121 -0.0101 -0.05733 -0.0214 -0.07545 -0.0298 -0.03641 -0.017 -0.07061 -0.0365 -0.09864 -0.0535 -0.0576 -0.0349 -0.12432 -0.0805 -0.19552 -0.1323 -0.14417 -0.1048 -0.33121 -0.2528 -0.54488 -0.4356 -0.42779 -0.3658 -0.97687 -0.8831 -1.52028 -1.49601 -0.54233 -0.61168 -1.08825 -1.32892 -1.50073 -2.0946 -0.41071 -0.7624 -0.7053 -1.60274 -0.7053 -2.45162 0 -2.62154 2.18456 -4.806102422 4.8061 -4.806102422Zm0 6.241462422c-0.79274 0 -1.43537 -0.64263 -1.43537 -1.43536 0 -0.79273 0.64263 -1.43537 1.43537 -1.43537 0.79273 0 1.43536 0.64264 1.43536 1.43537s-0.64263 1.43536 -1.43536 1.43536Zm3.09918 3.91567c0.1845 -0.20741 0.3691 -0.42471 0.5503 -0.65046h1.3431c0.2 0 0.3808 0.1192 0.4596 0.30304l1.4977 3.49482c0.0662 0.1545 0.0504 0.3319 -0.0421 0.4722 -0.0925 0.1403 -0.2494 0.2247 -0.4174 0.2247H0.509652c-0.168071 0 -0.324899 -0.0844 -0.4174202 -0.2247 -0.092521717 -0.1403 -0.1083584 -0.3177 -0.0421515 -0.4722L1.54785 9.80898c0.07879 -0.18384 0.25956 -0.30304 0.45958 -0.30304h1.35533c0.17707 0.22048 0.35732 0.43298 0.53741 0.63606 0.66153 0.7462 1.33008 1.3761 1.85055 1.8211 0.26001 0.2224 0.48668 0.4017 0.66027 0.5279 0.0859 0.0625 0.16478 0.1163 0.23154 0.1567 0.03261 0.0198 0.07064 0.0414 0.11007 0.0598 0.01964 0.0092 0.04707 0.021 0.07938 0.0314 0.02561 0.0083 0.08803 0.0271 0.16798 0.0271 0.07927 0 0.14121 -0.0185 0.16673 -0.0266 0.03216 -0.0103 0.05949 -0.022 0.07909 -0.0311 0.03937 -0.0182 0.07736 -0.0396 0.10998 -0.0592 0.06678 -0.0401 0.14568 -0.0935 0.23163 -0.1555 0.17369 -0.1253 0.40045 -0.3033 0.66057 -0.5243 0.52067 -0.4423 1.18949 -1.0689 1.85124 -1.8129Z"
          clip-rule="evenodd"
          stroke-width="1"
        ></path>
      </g>
    </svg>
  );

  const accredits = [
    { icon, text: "Expert Physiotherapy" },
    { icon: locationIcon, text: "Leamington Spa" },
    { icon, text: "HCPC Registered" },
    { icon, text: "Bupa, AXA & Vitality Recognition" },
    { icon, text: "Chartered Society Of Physiotherapy" },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title" aria-label="Back to moving well, sooner.">
            <span className="hero__line" aria-hidden="true">
              {["Back", "to", "moving", "well,"].map((word, i) => (
                <span className="hero__word" key={word}>
                  <span style={{ "--i": i }}>{word}</span>
                </span>
              ))}
            </span>
            <span className="hero__line hero__line--accent" aria-hidden="true">
              sooner.
            </span>
          </h1>
          <p className="hero__text">
            Expert physiotherapists in Leamington Spa for sports injuries, back
            and neck pain, and post-surgery recovery. Book an initial assessment
            and get a clear plan from your first visit.
          </p>
          <Link to="/contact" className="hero__btn">
            Book an initial assessment
            <img src={calendar} alt="" className="hero__btn-icon" />
          </Link>
        </div>

        <div className="hero__marquee" aria-label="Accreditations">
          <ul className="hero__marquee-track">
            {[...accredits, ...accredits, ...accredits, ...accredits].map(
              (a, i) => (
                <li
                  className="hero__accredit"
                  key={i}
                  aria-hidden={i >= accredits.length}
                >
                  {a.icon}
                  {a.text}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section className="intro">
        <div className="intro__inner">
          <div className="intro__info">
            <Reveal as="h2" level="strong" className="intro__title">
              How we help our clients
            </Reveal>
          </div>
          <div className="intro__services">
            <Reveal level="strong" delay={0.15}>
              <ServiceGrid />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="appointment">
        <Reveal level="strong" className="appointment__image-container">
          <img src={physioImg1} alt="" />
        </Reveal>
        <Reveal level="strong" delay={0.2} className="appointment__shape">
          <h2 className="appointment__title">Physios who actually listen</h2>
          <p className="appointment__text">
            Riverside was founded by Emma Hart and James Okafor, two chartered
            physiotherapists who were tired of rushed, ten-minute appointments.
            Here you get proper time, a real explanation, and a plan that fits
            your life — not a conveyor belt.
          </p>
        </Reveal>
      </section>

      <section className="testimonials">
        <Reveal as="h2" level="strong" className="testimonials__title">
          What our patients say
        </Reveal>
        <Reveal level="strong" delay={0.15}>
          <TestimonialSlider />
        </Reveal>
      </section>

      <section className="process">
        <Reveal as="h2" level="strong" className="process__title">
          Your first appointment
        </Reveal>
        <div className="process__cards">
          {[
            {
              num: "01",
              title: "We listen",
              text: "Not sure what happens when you book? Your first visit is a full assessment — we listen to what's going on, examine the problem, and explain what we think is causing it in plain English.",
            },
            {
              num: "02",
              title: "Your clear plan",
              text: "You'll leave with a clear plan and usually your first treatment done the same day.",
            },
            {
              num: "03",
              title: "Around 45 minutes",
              text: "Your first appointment takes around 45 minutes, giving us time to understand the problem properly and start helping straight away.",
            },
          ].map((step, i) => (
            <Reveal
              level="strong"
              delay={i * 0.15}
              className={`process__col${i === 1 ? " process__col--featured" : ""}`}
              key={step.num}
            >
              <article
                className={`process__card${i === 1 ? " process__card--featured" : ""}`}
              >
                <span className="process__num">{step.num}</span>
                <h3 className="process__card-title">{step.title}</h3>
                <p className="process__card-text">{step.text}</p>
              </article>
              {i === 1 && (
                <Link to="/contact" className="process__btn">
                  Book now
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
