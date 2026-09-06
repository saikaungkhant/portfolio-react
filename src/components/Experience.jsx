import { experience } from '@/lib/content'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-heading">
          <Eyebrow num="02">Experience</Eyebrow>
          <h2>From Android developer to data lead.</h2>
        </div>

        <ol className={styles.list}>
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role + job.org} delay={i * 0.06} className={styles.item}>
              <div className={styles.rail}>
                <span className={styles.dot} aria-hidden="true" />
              </div>
              <div className={styles.content}>
                <span className={styles.dates}>{job.dates}</span>
                <p className={styles.role}>{job.role}</p>
                <p className={styles.org}>{job.org}</p>
                <p className={styles.note}>
                  {job.note}{' '}
                  {job.projectLink && (
                    <a href={`#${job.projectLink}`}>See case study &rarr;</a>
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
