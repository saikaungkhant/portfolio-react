import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import SelectedProjects from '@/components/SelectedProjects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Bio from '@/components/Bio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Sidebar />
      <div className="main-col">
        <main id="main">
          <Hero />
          <SelectedProjects />
          <Experience />
          <Education />
          <Bio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
