import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Events() {
  const [showTop, setShowTop] = useState(false)
  const fmt = useMemo(() => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }), [])

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const events = [
    {
      title: 'Tech Innovators 2025',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
      date: 'Mar 12–13, 2025',
      location: 'Expo Center • Hall A',
      price: 199,
      badge: 'Conference',
    },
    {
      title: 'City Music Festival',
      img: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1200&auto=format&fit=crop',
      date: 'Apr 05, 2025',
      location: 'Riverfront Park',
      price: 79,
      badge: 'Festival',
    },
    {
      title: 'Design Week Live',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      date: 'May 18, 2025',
      location: 'Creative Hub',
      price: 49,
      badge: 'Workshop',
    },
    {
      title: 'Startup Showcase',
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      date: 'Jun 10, 2025',
      location: 'Innovation Theater',
      price: 99,
      badge: 'Expo',
    },
  ]

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
              <h1 className="display-5 fw-bold text-white">Explore Upcoming Events</h1>
              <p className="lead text-light-50 mt-3">Curated line‑up of conferences, festivals, workshops, and more. Book early‑bird tickets and VIP experiences.</p>

              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="badge bg-light text-dark px-3 py-2">🎟️ Early‑bird Deals</span>
                <span className="badge bg-light text-dark px-3 py-2">⭐ VIP Access</span>
                <span className="badge bg-light text-dark px-3 py-2">🎤 Headliner Sessions</span>
                <span className="badge bg-light text-dark px-3 py-2">🏆 Awards & Showcases</span>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div className="card border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                    alt="Featured event crowd"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <div className="row g-2">
                    <div className="col-4">
                      <div className="ratio ratio-1x1">
                        <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=800&auto=format&fit=crop" alt="Stage" className="w-100 h-100 object-fit-cover rounded" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="ratio ratio-1x1">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" alt="Festival" className="w-100 h-100 object-fit-cover rounded" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="ratio ratio-1x1">
                        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" alt="Conference" className="w-100 h-100 object-fit-cover rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 em-section">
        <div className="container">
          <div className="row g-4">
            {events.map((ev, i) => (
              <div className="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100} key={ev.title}>
                <div className="card h-100 shadow-sm">
                  <div className="ratio ratio-4x3">
                    <img src={ev.img} alt={ev.title} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary">{ev.badge}</span>
                      <span className="fw-bold">{fmt.format(ev.price)}</span>
                    </div>
                    <h6 className="fw-bold mb-1">{ev.title}</h6>
                    <small className="text-muted d-block">{ev.date}</small>
                    <small className="text-muted">{ev.location}</small>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex gap-2">
                    <Link to="/tickets" state={{ event: ev }} className="btn btn-primary btn-sm link-underline-opacity-0">Buy Ticket</Link>
                    <Link to="/details" state={{ event: ev }} className="btn btn-outline-primary btn-sm link-underline-opacity-0">Details</Link>
                  </div>
                </div>
              </div>
            ))}
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

export default Events

