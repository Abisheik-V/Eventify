import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Details() {
  const location = useLocation()
  const navigate = useNavigate()
  const ev = location.state?.event || null
  const fmt = useMemo(() => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }), [])

  useEffect(() => {
    if (!ev) navigate('/events')
  }, [ev, navigate])

  if (!ev) return null

  return (
    <div className="em-root">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top em-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold link-light link-underline-opacity-0">Eventify</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
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
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold text-white">{ev.title}</h1>
              <p className="lead text-light-50 mt-3">Join us at {ev.location} on {ev.date}. Secure your seat and experience {ev.badge?.toLowerCase()} highlights, networking, and more.</p>
              <div className="d-flex align-items-center gap-2 mt-3">
                <span className="badge bg-primary">{ev.badge}</span>
                <span className="fw-bold text-white">{fmt.format(ev.price)}</span>
              </div>
              <div className="d-flex gap-2 mt-4">
                <Link to="/request" className="btn btn-primary link-underline-opacity-0">Request Group Quote</Link>
                <Link to="/events" className="btn btn-outline-primary link-underline-opacity-0">Back to Events</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <img src={ev.img} alt={ev.title} className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 em-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title">About this {ev.badge?.toLowerCase()}</h5>
                  <p className="text-muted">Expect inspiring sessions, hands‑on demos, and curated experiences designed to help you learn, connect, and celebrate. Doors open one hour before the first session.</p>
                  <ul className="list-unstyled mb-0">
                    <li>📅 Date: {ev.date}</li>
                    <li>📍 Venue: {ev.location}</li>
                    <li>💳 Standard Ticket: {fmt.format(ev.price)}</li>
                  </ul>
                </div>
              </div>

              <div className="card shadow-sm border-0 mt-4">
                <div className="card-body p-4">
                  <h5 className="card-title">Schedule (sample)</h5>
                  <ul className="mb-0">
                    <li>09:00 — Registration & Welcome Coffee</li>
                    <li>10:00 — Opening Keynote</li>
                    <li>12:30 — Lunch & Networking</li>
                    <li>14:00 — Breakout Sessions</li>
                    <li>17:00 — Closing & After‑party</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-3">Tickets</h6>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Standard</span>
                    <span className="fw-bold">{fmt.format(ev.price)}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>VIP</span>
                    <span className="fw-bold">{fmt.format(Math.round(ev.price * 2))}</span>
                  </div>
                  <div className="d-grid mt-3">
                    <Link to="/tickets" state={{ event: ev }} className="btn btn-primary link-underline-opacity-0">Buy Ticket</Link>
                  </div>
                  <small className="text-muted d-block mt-2">Group discounts available—contact our team.</small>
                </div>
              </div>

              <div className="card shadow-sm border-0 mt-4">
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-2">Need help?</h6>
                  <p className="mb-2">Email: hello@eventify.io</p>
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
    </div>
  )
}

export default Details
