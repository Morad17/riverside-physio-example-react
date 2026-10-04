import { motion } from 'motion/react'

// "strong" for the home page, "subtle" for the quieter inner pages
const levels = {
  strong: { y: 48, duration: 0.9 },
  subtle: { y: 16, duration: 0.6 },
}

// Fades and rises into place the first time it scrolls into view.
// Reduced-motion users get a plain fade via <MotionConfig> in Layout.
function Reveal({ as = 'div', level = 'subtle', delay = 0, ...props }) {
  const Tag = motion[as]
  const { y, duration } = levels[level]

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  )
}

export default Reveal
