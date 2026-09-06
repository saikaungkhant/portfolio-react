'use client'

import { useEffect, useState } from 'react'
import { site } from '@/lib/content'
import styles from './Sidebar.module.css'

const sections = [
  { href: '#work', num: '01', label: 'Selected Work' },
  { href: '#experience', num: '02', label: 'Experience' },
  { href: '#education', num: '03', label: 'Education' },
  { href: '#about', num: '04', label: 'About' },
  { href: '#contact', num: '05', label: 'Contact' },
]

export default function Sidebar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={styles.sidebar}>
      <div className={styles.top}>
        <a className={styles.brand} href="#top">
          {site.name}
        </a>
        <p className={styles.role}>{site.role}</p>
        <a className={styles.cv} href={site.cvHref} download>
          Download CV
        </a>
      </div>

      <nav className={styles.nav} aria-label="Section navigation">
        <ul className={styles.navList}>
          {sections.map((s) => (
            <li key={s.href}>
              <a
                className={`${styles.navLink} ${active === s.href ? styles.active : ''}`}
                href={s.href}
              >
                <span className={styles.navLine} aria-hidden="true" />
                <span className={styles.navNum}>{s.num}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.social}>
        <a href={`mailto:${site.email}`}>Email</a>
        {site.links.github && <a href={site.links.github}>GitHub</a>}
        {site.links.linkedin && <a href={site.links.linkedin}>LinkedIn</a>}
      </div>
    </header>
  )
}
