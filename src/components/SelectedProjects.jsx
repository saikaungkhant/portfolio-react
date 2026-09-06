import { projects, otherWork } from '@/lib/content'
import Eyebrow from './Eyebrow'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import styles from './SelectedProjects.module.css'

export default function SelectedProjects() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-heading">
          <Eyebrow num="01">Selected work</Eyebrow>
          <h2>Data and ML projects, end to end.</h2>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <h3 className={styles.subheading}>Other work</h3>
        <div className={styles.otherGrid}>
          {otherWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className={`card ${styles.otherCard}`}>
                <div className={styles.otherTop}>
                  <h4 className={styles.otherTitle}>{item.title}</h4>
                  <span className={styles.otherOrg}>{item.org}</span>
                </div>
                <p className={styles.otherBlurb}>{item.blurb}</p>
                {item.href && (
                  <a className={styles.otherLink} href={item.href}>
                    View
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
