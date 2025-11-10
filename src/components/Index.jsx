import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Index({ scrollToId }) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Scroll to a section when rendered via route like /events, /about, /contact
  const location = useLocation()
  useEffect(() => {
    if (!scrollToId) return
    const el = document.getElementById(scrollToId)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    }
  }, [scrollToId, location.pathname])

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

      <header id="home" className="em-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-4 fw-bold text-white">Professional Event Management & Production</h1>
              <p className="lead text-light-50 mt-3">From corporate summits and product launches to weddings and music festivals — strategy, creative, and execution handled end‑to‑end by our expert team.</p>
              <div className="mt-4 d-flex gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg link-underline-opacity-0">Get a Quote</Link>
                <Link to="/services" className="btn btn-outline-light btn-lg link-underline-opacity-0">View Services</Link>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="em-hero-card card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h5 className="card-title">Quick Inquiry</h5>
                  <form className="row g-3">
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div className="col-12">
                      <input type="email" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="col-12">
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Event type</option>
                        <option>Wedding</option>
                        <option>Conference</option>
                        <option>Concert</option>
                        <option>Corporate</option>
                        <option>Private Party</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-12 d-grid">
                      <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="py-5 em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Event Management Services</h2>
            <p className="text-muted">Full‑stack planning, design, production, and promotion for unforgettable experiences.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="zoom-in">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Planning</h5>
                  <p className="card-text">Vendor sourcing, budgeting, timelines, and full project management.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Design</h5>
                  <p className="card-text">Stage, decor, lighting, and immersive brand experiences.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Production</h5>
                  <p className="card-text">AV, logistics, staffing, and on-site coordination.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Marketing</h5>
                  <p className="card-text">Campaigns, ticketing, registrations, and analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-5 bg-light em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Featured Events</h2>
            <p className="text-muted">A glimpse into productions we’re excited to deliver.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Tech Innovators 2025</h5>
                  <p className="card-text">A two-day conference exploring AI, cloud, and product growth.</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary btn-sm">Details</button>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">City Music Festival</h5>
                  <p className="card-text">Multiple stages, national headliners, and indie showcases.</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary btn-sm">Details</button>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Destination Weddings</h5>
                  <p className="card-text">Elegant ceremonies and receptions in breathtaking locations.</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary btn-sm">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 em-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold">Why Choose Us</h2>
              <p className="text-muted">Ten years of delivering high‑impact events for brands, startups, and private clients. We bring strategic planning, creative storytelling, and flawless operations together.</p>
              <ul className="list-unstyled mt-3">
                <li>End‑to‑end management</li>
                <li>Transparent budgets</li>
                <li>Global vendor network</li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/Kw4d8VzSgUc?si=lxuROhK080f8lry1" title="Showreel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container" data-aos="zoom-in">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-2">Subscribe to our newsletter</h3>
              <p className="mb-0">Insights, inspiration, and early-bird tickets straight to your inbox.</p>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Email address" />
                <button className="btn btn-light" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 em-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <h4 className="fw-bold">Get in touch</h4>
              <p className="text-muted">Tell us about your event and we will respond within 24 hours.</p>
              <form className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">Send Message</button>
                </div>
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
        <button aria-label="Back to top" className="em-back-to-top btn btn-primary" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  )
}

export default Index

