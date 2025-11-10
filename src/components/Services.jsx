import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Services() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="em-root">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top em-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold link-light link-underline-opacity-0">Eventify</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link link-light link-underline-opacity-0">Home</Link></li>
              <li className="nav-item"><Link to="/services" className="nav-link link-light link-underline-opacity-0">Services</Link></li>
              <li className="nav-item"><Link to="/events" className="nav-link link-light link-underline-opacity-0">Events</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link link-light link-underline-opacity-0">About</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link link-light link-underline-opacity-0">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="overview" className="em-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-5 fw-bold text-white">Full‑Service Event Management</h1>
              <p className="lead text-light-50 mt-3">Strategy, planning, creative, production, and on‑site operations for corporate, social, and live entertainment events.</p>
              <div className="mt-4 d-flex gap-3">
                <a href="#packages" className="btn btn-primary btn-lg">View Packages</a>
                <a href="#process" className="btn btn-outline-light btn-lg">How We Work</a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="em-hero-card card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h5 className="card-title">Start Your Brief</h5>
                  <form className="row g-3">
                    <div className="col-12"><input type="text" className="form-control" placeholder="Company / Name" /></div>
                    <div className="col-12"><input type="email" className="form-control" placeholder="Email" /></div>
                    <div className="col-12"><input type="text" className="form-control" placeholder="Event type (e.g. Conference)" /></div>
                    <div className="col-12"><input type="text" className="form-control" placeholder="City / Venue" /></div>
                    <div className="col-12 d-grid"><button type="button" className="btn btn-primary">Send Brief</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="capabilities" className="py-5 em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Capabilities</h2>
            <p className="text-muted">A modular stack of services you can tailor to your event.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="zoom-in">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h5 className="card-title">Event Strategy</h5>
                <p className="card-text">Objectives, budgeting, timelines, experience design, and risk management.</p>
              </div></div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h5 className="card-title">Creative & Design</h5>
                <p className="card-text">Branding, stage/scenic, decor, motion, and content programming.</p>
              </div></div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h5 className="card-title">Production</h5>
                <p className="card-text">AV, lighting, staging, logistics, vendor orchestration, and on‑site ops.</p>
              </div></div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h5 className="card-title">Attendee Experience</h5>
                <p className="card-text">Registration, hospitality, speakers/performers, and sponsor management.</p>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-5 bg-light em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Our Process</h2>
            <p className="text-muted">A simple path to complex events.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3" data-aos="fade-up"><div className="card h-100 shadow-sm"><div className="card-body"><h6 className="fw-bold">1. Discovery</h6><p className="mb-0">Goals, scope, and feasibility.</p></div></div></div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100"><div className="card h-100 shadow-sm"><div className="card-body"><h6 className="fw-bold">2. Design</h6><p className="mb-0">Concept, budget, and schedule.</p></div></div></div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="200"><div className="card h-100 shadow-sm"><div className="card-body"><h6 className="fw-bold">3. Production</h6><p className="mb-0">Vendors, logistics, rehearsals.</p></div></div></div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300"><div className="card h-100 shadow-sm"><div className="card-body"><h6 className="fw-bold">4. Show Day</h6><p className="mb-0">On‑site ops and post‑event wrap.</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-5 em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Packages</h2>
            <p className="text-muted">Choose a starting point; we’ll tailor to your needs.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Essential</h5>
                  <ul className="mb-3">
                    <li>Planning & timeline</li>
                    <li>Vendor coordination</li>
                    <li>On‑site manager</li>
                  </ul>
                  <Link to="/request" className="btn btn-outline-primary btn-sm link-underline-opacity-0">Request Quote</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card h-100 shadow-sm border-primary">
                <div className="card-body">
                  <h5 className="card-title">Professional</h5>
                  <ul className="mb-3">
                    <li>All Essential features</li>
                    <li>Creative & design</li>
                    <li>Full production team</li>
                  </ul>
                  <Link to="/request" className="btn btn-primary btn-sm link-underline-opacity-0">Request Quote</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Enterprise</h5>
                  <ul className="mb-3">
                    <li>Custom creative & staging</li>
                    <li>Advanced AV + broadcast</li>
                    <li>Global vendor network</li>
                  </ul>
                  <Link to="/request" className="btn btn-outline-primary btn-sm link-underline-opacity-0">Request Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-5 bg-light em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">FAQ</h2>
            <p className="text-muted">Answers to common questions.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h6 className="fw-bold mb-2">How far in advance should we book?</h6>
                <p className="mb-0">Ideally 8–12 weeks for mid‑size events. We also support expedited timelines.</p>
              </div></div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h6 className="fw-bold mb-2">Do you handle international events?</h6>
                <p className="mb-0">Yes. We work with a vetted network of global partners and vendors.</p>
              </div></div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h6 className="fw-bold mb-2">Can you work with our in‑house team?</h6>
                <p className="mb-0">Absolutely. We collaborate with internal teams and agencies as needed.</p>
              </div></div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-sm"><div className="card-body">
                <h6 className="fw-bold mb-2">Do you offer virtual or hybrid events?</h6>
                <p className="mb-0">Yes. We provide streaming, interactivity, and broadcast‑quality production.</p>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 em-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <h4 className="fw-bold">Let’s Plan Your Event</h4>
              <p className="text-muted">Share your objectives and constraints and we’ll send a tailored proposal.</p>
              <form className="row g-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Name" /></div>
                <div className="col-md-6"><input type="email" className="form-control" placeholder="Email" /></div>
                <div className="col-12"><textarea className="form-control" rows="4" placeholder="Tell us about your event"></textarea></div>
                <div className="col-12"><button type="button" className="btn btn-primary">Send Message</button></div>
              </form>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Contact Details</h5>
                  <p className="mb-1">Email: hello@eventify.io</p>
                  <p className="mb-1">Phone: +1 (555) 123-4567</p>
                  <p className="mb-0">Location: 123 Main Street, Suite 400, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="em-footer text-light">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">Eventify</h5>
              <p className="text-light-50">Crafting seamless experiences from concept to curtain call.</p>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-semibold">Company</h6>
              <ul className="list-unstyled">
                <li><Link to="/services" className="link-light link-underline-opacity-0">Overview</Link></li>
                <li><Link to="/services" className="link-light link-underline-opacity-0">Capabilities</Link></li>
                <li><Link to="/services" className="link-light link-underline-opacity-0">Process</Link></li>
                <li><Link to="/services" className="link-light link-underline-opacity-0">Packages</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="fw-semibold">Resources</h6>
              <ul className="list-unstyled">
                <li><Link to="/" className="link-light link-underline-opacity-0">Blog</Link></li>
                <li><Link to="/" className="link-light link-underline-opacity-0">Case Studies</Link></li>
                <li><Link to="/" className="link-light link-underline-opacity-0">Careers</Link></li>
                <li><Link to="/contact" className="link-light link-underline-opacity-0">Help Center</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-semibold">Follow</h6>
              <div className="d-flex gap-3">
                <a href="#" className="link-light text-decoration-none">Facebook</a>
                <a href="#" className="link-light text-decoration-none">Instagram</a>
                <a href="#" className="link-light text-decoration-none">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="em-footer-bottom py-3">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <small className="text-light-50">© {new Date().getFullYear()} Eventify. All rights reserved.</small>
            <div className="mt-2 mt-md-0 d-flex gap-3">
              <Link to="/" className="link-light link-underline-opacity-0">Terms</Link>
              <Link to="/" className="link-light link-underline-opacity-0">Privacy</Link>
              <Link to="/" className="link-light link-underline-opacity-0">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

      {showTop && (
        <button aria-label="Back to top" className="em-back-to-top btn btn-primary" onClick={scrollToTop}>↑</button>
      )}
    </div>
  )
}

export default Services

