import { useEffect, useState } from 'react'
import portrait from '../assets/img/portrait-img.svg'

const testimonials = [
  {
    quote:
      "Came in barely able to turn my neck. Emma explained exactly what was going on and had me back to normal in three weeks. Can't recommend them enough.",
    name: 'Sarah T., Leamington Spa',
  },
  {
    quote:
      'Torn calf two weeks before a half marathon. James got me to the start line and I finished. Genuinely brilliant.',
    name: 'Mark R., runner, Warwick',
  },
  {
    quote:
      "After my knee replacement I was nervous about rehab. The team made every step clear and I'm walking better than I have in years.",
    name: 'David P., Kenilworth',
  },
]

const INTERVAL_MS = 5000

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      INTERVAL_MS,
    )
    return () => clearInterval(id)
  }, [paused, index])

  return (
    <div
      className="tslider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="tslider__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live="polite"
      >
        {testimonials.map(({ quote, name }, i) => (
          <figure
            key={name}
            className="tslider__slide"
            aria-hidden={i !== index}
          >
            <img src={portrait} alt="" className="tslider__portrait" />
            <blockquote className="tslider__quote">“{quote}”</blockquote>
            <figcaption className="tslider__name">— {name}</figcaption>
          </figure>
        ))}
      </div>

      <div className="tslider__dots">
        {testimonials.map(({ name }, i) => (
          <button
            key={name}
            type="button"
            className={`tslider__dot${i === index ? ' is-active' : ''}`}
            aria-label={`Show review ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
