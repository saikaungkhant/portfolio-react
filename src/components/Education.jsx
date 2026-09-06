import { education, certifications } from '@/lib/content'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <div className="section-heading">
          <Eyebrow num="03">Education &amp; certification</Eyebrow>
          <h2>Formal grounding, kept current.</h2>
        </div>

        <div className={styles.grid}>
          <Reveal>
            <div>
              {education.map((item) => (
                <div key={item.degree} className={styles.degree}>
                  <p className={styles.degreeName}>{item.degree}</p>
                  <p className={styles.degreeOrg}>{item.org}</p>
                  <p className={styles.degreeMeta}>
                    {item.dates}
                    {item.note ? ` · ${item.note}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className={styles.certHeading}>Certifications</p>
              <ul className={styles.certList}>
                {certifications.map((cert) => (
                  <li key={cert.name} className={styles.cert}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
