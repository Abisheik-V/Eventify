import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Request() {
  const [showTop, setShowTop] = useState(false)
  const navigate = useNavigate()
  const formRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const onSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(formRef.current)
    const form = {
      name: fd.get('name') || '',
      email: fd.get('email') || '',
      company: fd.get('company') || '',
      phone: fd.get('phone') || '',
      type: fd.get('type') || '',
      attendees: fd.get('attendees') || '',
      date: fd.get('date') || '',
      venue: fd.get('venue') || '',
      budget: fd.get('budget') || '',
      notes: fd.get('notes') || '',
    }
    navigate('/confirmation', { state: { form } })
  }

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

      <header className="em-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-5 fw-bold text-white">Get Your Custom Quote</h1>
              <p className="lead text-light-50 mt-3">Share a few details about your event—date, size, and vision—and we’ll craft a plan with clear timelines and pricing options.</p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="badge bg-light text-dark px-3 py-2">🧭 Plan & Timeline in 24h</span>
                <span className="badge bg-light text-dark px-3 py-2">💸 Transparent Pricing</span>
                <span className="badge bg-light text-dark px-3 py-2">📍 Venue Sourcing</span>
                <span className="badge bg-light text-dark px-3 py-2">👤 Dedicated PM</span>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div className="card border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop"
                    alt="Event planning moodboard"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <p className="mb-0 text-muted">We’ll align on brief, budget, and objectives to recommend the best format and suppliers for your event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 em-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title">Event Brief</h5>
                  <form ref={formRef} onSubmit={onSubmit} className="row g-3">
                    <div className="col-md-6"><input name="name" type="text" className="form-control" placeholder="Full name" required /></div>
                    <div className="col-md-6"><input name="email" type="email" className="form-control" placeholder="Email" required /></div>
                    <div className="col-md-6"><input name="company" type="text" className="form-control" placeholder="Company (optional)" /></div>
                    <div className="col-md-6"><input name="phone" type="tel" className="form-control" placeholder="Phone (optional)" /></div>
                    <div className="col-md-6">
                      <select name="type" className="form-select" defaultValue="" required>
                        <option value="" disabled>Event type</option>
                        <option>Conference</option>
                        <option>Festival</option>
                        <option>Wedding</option>
                        <option>Corporate</option>
                        <option>Private</option>
                      </select>
                    </div>
                    <div className="col-md-6"><input name="attendees" type="number" min="0" className="form-control" placeholder="# Attendees (approx)" /></div>
                    <div className="col-md-6"><input name="date" type="date" className="form-control" placeholder="Event date" /></div>
                    <div className="col-md-6"><input name="venue" type="text" className="form-control" placeholder="City / Venue" /></div>
                    <div className="col-12"><input name="budget" type="text" className="form-control" placeholder="Estimated budget (optional)" /></div>
                    <div className="col-12"><textarea name="notes" className="form-control" rows="5" placeholder="Tell us about your event"></textarea></div>
                    <div className="col-12 d-flex gap-2">
                      <button type="submit" className="btn btn-primary">Submit Request</button>
                      <Link to="/services" className="btn btn-outline-primary link-underline-opacity-0">Explore Services</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h6 className="fw-bold">What happens next?</h6>
                  <ol className="mb-3">
                    <li>We review your brief within 24 hours</li>
                    <li>Quick discovery call (15–20 min)</li>
                    <li>Receive proposal with options and timeline</li>
                  </ol>
                  <p className="mb-1">Email: hello@eventify.io</p>
                  <p className="mb-0">Phone: +1 (555) 123-4567</p>
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
                <li><Link to="/about" className="link-light link-underline-opacity-0">About</Link></li>
                <li><Link to="/services" className="link-light link-underline-opacity-0">Services</Link></li>
                <li><Link to="/events" className="link-light link-underline-opacity-0">Events</Link></li>
                <li><Link to="/contact" className="link-light link-underline-opacity-0">Contact</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="fw-semibold">Resources</h6>
              <ul className="list-unstyled">
                <li><Link to="/" className="link-light link-underline-opacity-0">Blog</Link></li>
                <li><Link to="/" className="link-light link-underline-opacity-0">Press</Link></li>
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

export default Request

