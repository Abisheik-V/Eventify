import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function About() {
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
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-5 fw-bold text-white">About Eventify</h1>
              <p className="lead text-light-50 mt-3">Behind every seamless show is a team that treats your goals like their own. From brand launches to weddings, we blend strategy, design, and production to create moments people remember.</p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <img className="w-100 h-100 object-fit-cover" alt="About Eventify" src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1600&auto=format&fit=crop" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 em-section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="fw-bold">Built on Craft, Powered by People</h2>
              <p className="text-muted">From the first moodboard to the last load‑out, our multidisciplinary team brings creativity, precision, and care to every detail. We partner with the best vendors globally to deliver seamless experiences.</p>
              <ul className="list-unstyled">
                <li>End‑to‑end planning and production</li>
                <li>Transparent budgets and timelines</li>
                <li>Global vendor and venue network</li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="row g-3">
                <div className="col-6">
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img className="w-100 h-100 object-fit-cover" alt="Backstage" src="https://images.stockcake.com/public/4/e/f/4ef36e7f-6c0f-4596-8796-d1857e08253e_large/backstage-concert-preparation-stockcake.jpg" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img className="w-100 h-100 object-fit-cover" alt="Stage lighting" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img className="w-100 h-100 object-fit-cover" alt="Team" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img className="w-100 h-100 object-fit-cover" alt="Audience" src="https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=1200&auto=format&fit=crop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light em-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Milestones</h2>
            <p className="text-muted">A few highlights from the journey.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card h-100 shadow-sm"><div className="card-body text-center">
                <h3 className="fw-bold">500+</h3>
                <p className="text-muted mb-0">Events Delivered</p>
              </div></div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm"><div className="card-body text-center">
                <h3 className="fw-bold">30+</h3>
                <p className="text-muted mb-0">Cities Worldwide</p>
              </div></div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-sm"><div className="card-body text-center">
                <h3 className="fw-bold">98%</h3>
                <p className="text-muted mb-0">Client Satisfaction</p>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 em-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h2 className="fw-bold">Our Mission</h2>
              <p className="text-muted">To design and deliver experiences that connect people and move brands forward. We obsess over details so our clients can stay present in the moment.</p>
              <Link to="/services" className="btn btn-primary">Explore Services</Link>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                <img className="w-100 h-100 object-fit-cover" alt="Mission" src="https://cdn.prod.website-files.com/61cee5ec4d566db869eca133/66b7d27ac261d4890593dc07_665d797f9c6f6d6e3f970558_Info%25202.png" />
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

export default About

