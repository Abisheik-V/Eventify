import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Contact() {
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

      <header className="em-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-5 fw-bold text-white">Talk to Our Team</h1>
              <p className="lead text-light-50 mt-3">Share your event goals and constraints—we’ll respond in 24 hours with next steps and a tailored proposal.</p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="badge bg-light text-dark px-3 py-2">⏱️ Response in 24h</span>
                <span className="badge bg-light text-dark px-3 py-2">👩‍💼 Dedicated Producer</span>
                <span className="badge bg-light text-dark px-3 py-2">📞 Phone • ✉️ Email • 💬 Chat</span>
                <span className="badge bg-light text-dark px-3 py-2">🎧 Free Discovery Call</span>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div className="card border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img
                    src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1400&auto=format&fit=crop"
                    alt="Support team at work"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <p className="mb-0 text-muted">We’ll align on objectives, audience, budget, and timeline—then suggest the best path forward.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 em-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title">Contact Form</h5>
                  <form className="row g-3">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Full name" /></div>
                    <div className="col-md-6"><input type="email" className="form-control" placeholder="Email address" /></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Company (optional)" /></div>
                    <div className="col-md-6"><input type="tel" className="form-control" placeholder="Phone (optional)" /></div>
                    <div className="col-12"><input type="text" className="form-control" placeholder="Event type (e.g. Conference)" /></div>
                    <div className="col-12"><textarea className="form-control" rows="5" placeholder="Tell us about your event"></textarea></div>
                    <div className="col-12 d-flex gap-2">
                      <button type="button" className="btn btn-primary">Send Message</button>
                      <Link to="/services" className="btn btn-outline-primary link-underline-opacity-0">Explore Services</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title">Contact Details</h5>
                  <p className="mb-1">Email: hello@eventify.io</p>
                  <p className="mb-1">Phone: +1 (555) 123-4567</p>
                  <p className="mb-3">Location: 123 Main Street, Suite 400, City</p>
                  <div className="ratio ratio-16x9 rounded overflow-hidden">
                    <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.90%2C77.75%2C13.10&layer=mapnik" style={{ border: 0 }}></iframe>
                  </div>
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

export default Contact

