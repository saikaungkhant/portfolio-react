import { bio } from '@/lib/content'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import styles from './Bio.module.css'

export default function Bio() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-heading">
          <Eyebrow num="04">About</Eyebrow>
          <h2>Beyond the CV.</h2>
        </div>
        <Reveal className={styles.body}>
          {bio.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
