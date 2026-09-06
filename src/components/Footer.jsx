import { site } from '@/lib/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={`wrap ${styles.footer}`}>
      <p>
        &copy; {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
