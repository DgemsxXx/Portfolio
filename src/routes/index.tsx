import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Check, ChevronLeft, ChevronRight, Menu, Pause, Play, RotateCcw, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Artwork } from '@/components/Artwork'
import { projects, categories } from '@/data/projects'
import type { Project } from '@/data/projects'

export const Route = createFileRoute('/')({ component: Portfolio })

const navigation = [ ['Work', 'work'], ['Process', 'process'], ['About', 'about'], ['Contact', 'contact'] ]
const steps = [
  ['Brief & hook', 'Your product, your audience, and the two seconds that need to land. We get clear on the idea before making anything.'],
  ['Script & storyboard', 'A story with a shape. Hooks, beats, and visual references mapped out before production starts.'],
  ['Generate & create', 'AI-generated scenes meet considered graphic design. The tools serve the idea, not the other way around.'],
  ['Edit & sound design', 'The rhythm, the captions, the cut. Every detail is built to feel right, even on a phone speaker.'],
  ['Ready to go live', 'Platform-ready exports in 9:16, 1:1, and 16:9, with agreed source files and caption assets.'],
]

function scrollProjects(rail: HTMLDivElement | null, distance: number) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  rail?.scrollBy({ left: distance, behavior: reducedMotion ? 'instant' : 'smooth' })
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [project, setProject] = useState<Project | null>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const visibleProjects = projects.filter((entry) => filter === 'all' || entry.category === filter)

  useEffect(() => {
    if (!menuOpen) return
    const closeMenu = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', closeMenu)
    return () => window.removeEventListener('keydown', closeMenu)
  }, [menuOpen])

  function chooseFilter(category: string) {
    setFilter(category)
    railRef.current?.scrollTo({ left: 0, behavior: 'instant' })
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="navigation">
        <div className="container nav-inner">
          <a href="#top" className="wordmark" aria-label="IDENTRA home">IDENTRA<span className="brand-star">✳</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <a className="button button-small nav-cta" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <nav id="mobile-nav" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!menuOpen}>
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="record-dot" /> INDEPENDENT CREATIVE STUDIO</div>
              <h1 id="hero-title">Edits built for<br />the first<br /><span>two seconds.</span></h1>
              <p>Graphic design and AI-generated UGC ads for brands that need people to stop scrolling. One studio. Start to finish.</p>
              <div className="hero-actions"><a href="#work" className="button">Explore the work <ArrowDown size={18} /></a><a href="#contact" className="text-link">Start a project <ArrowUpRight size={17} /></a></div>
              <div className="hero-note"><span className="availability-dot" /> Ideas welcome. Good briefs even more.</div>
            </div>
            <div className="hero-stage" aria-label="Creative concept showcase">
              <span className="stage-label"><span className="record-dot" /> REC <span>00:00:14</span></span>
              <div className="stage-cross cross-top" aria-hidden="true" />
              <div className="stage-cross cross-bottom" aria-hidden="true" />
              <button className="hero-card hero-card-left" onClick={() => setProject(projects[0])} aria-label="Explore the skincare concept"><Artwork kind="skin" /><span className="mini-card-label">A little daily ritual.</span></button>
              <button className="hero-card hero-card-right" onClick={() => setProject(projects[2])} aria-label="Explore the kinetic type concept"><Artwork kind="motion" /></button>
              <button className="hero-card hero-card-main" onClick={() => setProject(projects[1])} aria-label="Explore VENTI ABSOLU fragrance concept">
                <Artwork kind="fragrance" />
                <div className="hero-card-top"><span>VENTI ABSOLU</span><ArrowUpRight size={16} /></div>
                <div className="hero-card-caption"><span>NOT JUST A SCENT.</span><strong>A whole<br />feeling.</strong><span className="hero-play"><Play size={11} fill="currentColor" /> EXPLORE THE CONCEPT</span></div>
              </button>
              <div className="stage-bottom"><span className="frame-label">FRAME 001 — MADE TO BE SEEN</span><span className="aspect-label">9:16 <span>↗</span></span></div>
              <span className="stage-sticker"><Asterisk size={18} /> HUMAN IDEAS.<br /><span>AI POSSIBILITIES.</span></span>
            </div>
          </div>
          <div className="container hero-foot"><span>DESIGN WITH INTENT. EDIT WITH IMPACT.</span><a href="#work">SCROLL TO DISCOVER <ArrowDown size={13} /></a></div>
        </section>

        <div className="service-strip" aria-label="Studio services"><div className="container"><span>GRAPHIC DESIGN</span><Asterisk /><span>AI UGC ADS</span><Asterisk /><span>MOTION & TYPE</span><Asterisk /><span>BRAND IDENTITIES</span><Asterisk /><span>GOOD FIRST IMPRESSIONS</span></div></div>

        <section id="work" className="section container work-section" aria-labelledby="work-title">
          <div className="section-topline"><span className="eyebrow muted">01 / SELECTED WORK</span><span className="small-label">A FEW IDEAS, BROUGHT TO LIFE.</span></div>
          <div className="section-heading"><h2 id="work-title">Less scrolling.<br /><span>More stopping.</span></h2><p>AI-powered ads, motion that moves, and the graphic design that ties it all together.</p></div>
          <div className="work-toolbar"><div className="filters" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category.id} className="filter" aria-pressed={filter === category.id} onClick={() => chooseFilter(category.id)}>{category.name}{category.id === 'all' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}</div><div className="rail-controls"><button aria-label="Scroll projects left" onClick={() => scrollProjects(railRef.current, -340)}><ChevronLeft size={18} /></button><button aria-label="Scroll projects right" onClick={() => scrollProjects(railRef.current, 340)}><ChevronRight size={18} /></button></div></div>
          <p className="sr-only" role="status">{visibleProjects.length} projects shown</p>
          <div className="project-rail" ref={railRef} tabIndex={0} aria-label="Selected concept projects">
            {visibleProjects.map((entry) => <button className={`project-card project-${entry.art}`} key={entry.id} onClick={() => setProject(entry)}>
              <div className="project-art"><Artwork kind={entry.art} /><div className="project-top"><span className={`category-tag tag-${entry.category}`}>{entry.label}</span><span className="project-format">{entry.format}</span></div><span className="project-open"><ArrowUpRight size={22} /></span><div className="art-caption">{entry.hook}</div></div>
              <div className="project-info"><div><h3>{entry.title}</h3><p>{entry.subtitle}</p></div><ArrowUpRight size={18} /></div>
            </button>)}
          </div>
          <div className="work-note"><span><span className="tiny-dot" /> CREATIVE CONCEPTS & VISUAL STUDIES</span><span>Click a project to get the full picture <ArrowUpRight size={13} /></span></div>

          <div className="design-heading"><h3>The design behind the story.</h3><span>IDENTITIES. PACKAGING. VISUAL SYSTEMS.</span></div>
          <div className="design-grid">
            {projects.filter((entry) => entry.category === 'design').map((entry) => <button className="design-card" key={entry.id} onClick={() => setProject(entry)}><div className="design-art"><Artwork kind={entry.art} /><span className="design-open"><ArrowUpRight size={20} /></span></div><div className="design-info"><h4>{entry.title}</h4><span>{entry.subtitle}</span></div></button>)}
          </div>
        </section>

        <section id="process" className="section process-section" aria-labelledby="process-title"><div className="container"><div className="section-topline"><span className="eyebrow muted">02 / THE PROCESS</span><span className="small-label">NO GUESSWORK. NO HAND-OFFS.</span></div><div className="process-layout"><div className="process-intro"><h2 id="process-title">Good work.<br /><span>Clear process.</span></h2><p>From “I have an idea” to “it’s live.”<br />Here’s how we get there.</p><a href="#contact" className="text-link">Let’s make something <ArrowUpRight size={17} /></a><div className="process-symbol" aria-hidden="true"><Asterisk strokeWidth={0.8} /></div></div><div className="process-list">{steps.map(([title, description], index) => <details key={title} className="process-step" open={index === 0 ? true : undefined}><summary><span className="step-number">0{index + 1}</span><h3>{title}</h3><span className="step-toggle">+</span></summary><p>{description}</p></details>)}</div></div></div></section>

        <section id="about" className="section container about-section" aria-labelledby="about-title"><div className="section-topline"><span className="eyebrow muted">03 / BEHIND IDENTRA</span><span className="small-label">SMALL STUDIO. FULL PICTURE.</span></div><div className="about-layout"><div className="about-visual" aria-hidden="true"><div className="about-grid-lines" /><span className="about-visual-label">THE CREATIVE DEPARTMENT</span><span className="about-monogram">i<span>✳</span></span><div className="about-visual-bottom"><span>IDEA → EXECUTION</span><span>ONE STUDIO.</span></div></div><div className="about-copy"><h2 id="about-title">One person.<br /><span>Many possibilities.</span></h2><p>IDENTRA is an independent creative studio blending graphic design with AI-generated UGC. Built for brands that live on TikTok, Reels, and Shorts.</p><p>From the first hook to the final caption, everything happens in-house. You work directly with the person making the work. Less back-and-forth. More getting it right.</p><div className="studio-values"><span><Check size={14} /> Creative, not templated</span><span><Check size={14} /> One point of contact</span><span><Check size={14} /> Built for your platform</span></div></div></div></section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title"><div className="container contact-layout"><div className="contact-copy"><span className="eyebrow"><span className="record-dot" /> 04 / NEXT UP: YOUR PROJECT</span><h2 id="contact-title">Let’s make<br />them <span>stop.</span><ArrowUpRight className="contact-arrow" /></h2><p>A product to launch? A brand to build?<br />An idea you can’t stop thinking about?<br />Tell me a little about it.</p><span className="contact-note">No pitch deck needed. Just a good starting point.</span></div><ContactForm /></div></section>
      </main>

      <footer className="footer container"><a href="#top" className="wordmark">IDENTRA<span className="brand-star">✳</span></a><span>© {new Date().getFullYear()} IDENTRA. Ideas in-house.</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={15} /></a></footer>
      {project && <ProjectPreview project={project} onClose={() => setProject(null)} />}
    </>
  )
}

function ProjectPreview({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [playing, setPlaying] = useState(true)
  const [previewKey, setPreviewKey] = useState(0)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialogRef.current?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow; previousFocus?.focus() }
  }, [])

  return <dialog ref={dialogRef} className="project-dialog" aria-labelledby="preview-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <div className="dialog-content"><button className="dialog-close" aria-label="Close project preview" onClick={onClose}><X size={20} /></button><div className={`preview-art ${playing ? 'is-playing' : 'is-paused'}`} key={previewKey}><Artwork kind={project.art} /><span className="preview-label">CONCEPT STUDY / VISUAL PREVIEW</span><span className="preview-hook">{project.hook}</span><div className="preview-controls"><button onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause visual animation' : 'Play visual animation'}>{playing ? <Pause size={18} /> : <Play size={18} />}</button><span>ANIMATED CONCEPT · NO AUDIO</span><button onClick={() => { setPreviewKey(previewKey + 1); setPlaying(true) }} aria-label="Restart visual animation"><RotateCcw size={16} /></button></div></div><div className="preview-copy"><span className="eyebrow muted">{project.label} / {project.format}</span><h2 id="preview-title">{project.title}</h2><p>{project.description}</p><h3>The creative direction</h3><p>{project.direction}</p><h3>Designed to deliver</h3><ul>{project.deliverables.map((deliverable) => <li key={deliverable}><Check size={14} />{deliverable}</li>)}</ul><p className="concept-disclaimer">An original studio concept, not a commissioned campaign. This is an animated visual study; finished video footage is not included.</p><a href="#contact" className="button" onClick={onClose}>Create something like this <ArrowUpRight size={17} /></a></div></div>
  </dialog>
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const controllerRef = useRef<AbortController | null>(null)
  useEffect(() => () => controllerRef.current?.abort(), [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    const data = new FormData(form)
    const body = new URLSearchParams()
    data.forEach((value, name) => { if (typeof value === 'string') body.append(name, value) })
    setStatus('sending')
    controllerRef.current = new AbortController()
    const timeout = window.setTimeout(() => controllerRef.current?.abort(), 15000)
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString(), signal: controllerRef.current.signal })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch { setStatus('error') }
    finally { window.clearTimeout(timeout) }
  }

  if (status === 'success') return <div className="form-success" role="status"><span className="success-mark"><Check size={28} /></span><span className="eyebrow">BRIEF RECEIVED</span><h3>A good start.</h3><p>Thanks for sharing your idea. Your project inquiry has been sent to IDENTRA.</p><button className="text-link" onClick={() => setStatus('idle')}>Send another inquiry <ArrowRight size={17} /></button></div>

  return <form className="contact-form" name="project-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="project-inquiry" />
    <p hidden><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="form-row"><label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="alex@yourbrand.com" required maxLength={254} /></label></div>
    <label>Brand / company<input name="company" autoComplete="organization" placeholder="What’s your brand called?" maxLength={150} /></label>
    <div className="form-row"><label>What do you need? <span>*</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>AI UGC ads</option><option>Graphic design & branding</option><option>Motion & kinetic type</option><option>A little of everything</option></select></label><label>Project budget<select name="budget" defaultValue=""><option value="">Let’s discuss</option><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$3,000</option><option>$3,000+</option></select></label></div>
    <label>A little about your project <span>*</span><textarea name="message" placeholder="The idea, the goal, the timeline. Anything that helps paint the picture." required minLength={20} maxLength={5000} rows={4} /></label>
    {status === 'error' && <p className="form-error" role="alert">Your inquiry couldn’t be sent. Your details are still here — please try again.</p>}
    <button className="button submit-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending your idea…' : 'Send the brief'}<ArrowUpRight size={18} /></button>
    <p className="form-fineprint" aria-live="polite">{status === 'sending' ? 'Securely submitting your project inquiry.' : 'Your details stay private and are only used to discuss your project.'}</p>
  </form>
}
