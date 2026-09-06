import { site } from '@/lib/content'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="wrap">
        <Reveal>
          <div className={`card ${styles.panel}`}>
            <div>
              <Eyebrow num="05">Contact</Eyebrow>
              <h2 className={styles.heading}>
                Let&rsquo;s talk about your data team.
              </h2>
            </div>
            <div className={styles.actions}>
              <a className={styles.primary} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className={styles.secondary} href={site.cvHref} download>
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
