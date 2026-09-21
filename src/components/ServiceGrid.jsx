import sportsImg from '../assets/img/sports-pain-img.svg'
import backImg from '../assets/img/back-pain-img.svg'
import surgeryImg from '../assets/img/surgery-pain-img.svg'
import persistentImg from '../assets/img/persistent-pain-img.svg'

const services = [
  {
    img: sportsImg,
    title: 'Sports injuries',
    text: "Sprains, strains, and overuse injuries — assessed properly and rehabbed so they don't keep coming back.",
  },
  {
    img: backImg,
    title: 'Back & neck pain',
    text: "Hands-on treatment and a plan you can actually stick to, whether it's a sudden flare-up or long-standing pain.",
  },
  {
    img: surgeryImg,
    title: 'Post-surgery rehab',
    text: "Structured recovery after knee, hip, or shoulder surgery, working alongside your surgeon's guidance.",
  },
  {
    img: persistentImg,
    title: 'Persistent pain',
    text: 'Persistent pain managed with a realistic, paced approach built around your day-to-day life.',
  },
]

function ServiceGrid() {
  return (
    <div className="sgrid">
      {services.map(({ img, title, text }) => (
        <article key={title} className="sgrid__cell" tabIndex={0}>
          <img src={img} alt="" className="sgrid__icon" />
          <h3 className="sgrid__title">{title}</h3>
          <p className="sgrid__text">{text}</p>
        </article>
      ))}
    </div>
  )
}

export default ServiceGrid
