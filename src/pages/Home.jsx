import { Link } from "react-router-dom";
import ServiceGrid from "../components/ServiceGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import calendar from "../assets/img/calendar-icon.svg";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Chartered physiotherapy · Leamington Spa
          </p>
          <h1 className="hero__title">Back to moving well, sooner.</h1>
          <p className="hero__text">
            Expert physiotherapy in Leamington Spa for sports injuries, back and
            neck pain, and post-surgery recovery. Book an initial assessment and
            get a clear plan from your first visit.
          </p>
          <Link to="/contact" className="hero__btn">
            Book an initial assessment
            <img src={calendar} alt="" className="hero__btn-icon" />
          </Link>
        </div>
      </section>

      <section className="intro">
        <div className="intro__inner">
          <div className="intro__info">
            <p>
              HCPC-registered · Chartered Society of Physiotherapy · Recognised
              by Bupa, AXA &amp; Vitality
            </p>
          </div>
          <div className="intro__services">
            <h2 className="intro__title">How we help our clients</h2>
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="appointment">
        <div className="appointment__shape">
          <h2 className="appointment__title">Your first appointment</h2>
          <p className="appointment__text">
            Not sure what happens when you book? Your first visit is a full
            assessment — we listen to what's going on, examine the problem, and
            explain what we think is causing it in plain English. You'll leave
            with a clear plan and usually your first treatment done the same
            day. Around 45 minutes..
          </p>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="testimonials__title">What our patients say</h2>
        <TestimonialSlider />
      </section>
    </>
  );
}

export default Home;
