import Image from 'next/image'
import { site, heroMetrics, credential } from '@/lib/content'
import Sparkline from './Sparkline'
import Scramble from './Scramble'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={`wrap ${styles.hero}`}>
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.top}>
        <div className={styles.copy}>
          <p className={styles.prompt}>
            <span className={styles.promptSign}>sai@bristol</span>:~$ whoami
            <span className={styles.cursor} aria-hidden="true" />
          </p>

          <h1>{site.tagline}</h1>
          <p className={styles.intro}>
            I&rsquo;m {site.name}, a developer-turned-data-scientist based in{' '}
            {site.location}. I build forecasting models, scheduling systems,
            and data products end to end &mdash; and I measure what they
            actually change.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primary} href="#work">
              See selected work
            </a>
            <a className={styles.secondary} href={site.cvHref} download>
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.portrait}>
          <Image
            src={site.photo}
            alt={site.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 700px) 60vw, 220px"
            priority
          />
        </div>
      </div>

      <div className={styles.metrics} aria-label="Career highlights">
        {heroMetrics.map((metric) => (
          <div key={metric.label} className={styles.metric}>
            <div className={styles.metricTop}>
              <Scramble className={styles.metricValue} text={metric.value} />
              <Sparkline trend={metric.trend} />
            </div>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
        <div className={`${styles.metric} ${styles.credential}`}>
          <Scramble className={styles.metricValue} text={credential.value} />
          <span className={styles.metricLabel}>{credential.label}</span>
        </div>
      </div>
    </section>
  )
}
