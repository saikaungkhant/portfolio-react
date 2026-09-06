import Image from 'next/image'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <article id={project.slug} className={`card ${styles.card}`}>
      <div className={styles.top}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.meta}>{project.year}</span>
      </div>
      <p className={styles.type}>{project.type}</p>

      <div className={styles.figure}>
        <div className={styles.figureInner}>
          <Image
            src={project.image}
            alt={`Screenshot from ${project.title}`}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 700px) 100vw, 620px"
          />
        </div>
      </div>

      <p className={styles.problem}>{project.problem}</p>

      <div className={`tag-row ${styles.tags}`}>
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>

      <details className={styles.details}>
        <summary>Case study — role, decisions, result</summary>
        <div className={styles.detailBody}>
          <div className={styles.detailBlock}>
            <h4>Role</h4>
            <p>{project.role}</p>
          </div>
          <div className={styles.detailBlock}>
            <h4>Key decisions</h4>
            <ul>
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailBlock}>
            <h4>Result</h4>
            <p>{project.result}</p>
          </div>
          {project.links.length > 0 && (
            <div className={`${styles.detailBlock} ${styles.links}`}>
              {project.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </details>
    </article>
  )
}
