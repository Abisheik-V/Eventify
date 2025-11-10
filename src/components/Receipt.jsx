import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function calcEstimate(data) {
  if (!data) return { subtotal: 0, rushFee: 0, total: 0, breakdown: [] }
  const type = (data.type || '').toLowerCase()
  const attendees = Math.max(0, Number(data.attendees || 0))
  const baseMap = { conference: 5000, festival: 8000, wedding: 6000, corporate: 4500, private: 3000 }
  const perHeadMap = { conference: 25, festival: 18, wedding: 40, corporate: 22, private: 15 }
  const base = baseMap[type] ?? 4000
  const perHead = perHeadMap[type] ?? 20
  const variable = attendees * perHead
  let rushFee = 0
  try {
    if (data.date) {
      const eventDate = new Date(data.date)
      const today = new Date()
      const days = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24))
      if (days > 0 && days <= 30) rushFee = 0.15 * (base + variable)
    }
  } catch {}
  const subtotal = Math.round(base + variable)
  const total = Math.round(subtotal + rushFee)
  const breakdown = [
    { label: 'Base', value: base },
    { label: `Per‑attendee × ${attendees}`, value: variable },
    ...(rushFee ? [{ label: 'Rush fee (<=30 days)', value: rushFee }] : []),
  ]
  return { subtotal, rushFee, total, breakdown }
}

function Receipt() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state?.form || null
  const orderId = location.state?.orderId || ''
  const estimate = useMemo(() => calcEstimate(data), [data])
  const totalPaid = location.state?.totalPaid ?? estimate.total
  const fmt = useMemo(() => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }), [])

  useEffect(() => {
    if (!data) navigate('/')
  }, [data, navigate])

  // Safety: ensure no leftover modal backdrop from previous page
  useEffect(() => {
    document.body.classList.remove('modal-open')
    const backdrops = document.querySelectorAll('.modal-backdrop')
    backdrops.forEach((b) => b.parentElement && b.parentElement.removeChild(b))
  }, [])

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
              <h1 className="display-5 fw-bold text-white">Receipt & Booking Details</h1>
              <p className="lead text-light-50 mt-3">Thanks {data?.name ? data.name : ''}! Your payment was successful. Keep this receipt and order ID for your records.</p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="badge bg-light text-dark px-3 py-2">✅ Payment Confirmed</span>
                <span className="badge bg-light text-dark px-3 py-2">📧 Email Confirmation Sent</span>
                <span className="badge bg-light text-dark px-3 py-2">🗓️ Add to Calendar</span>
                <span className="badge bg-light text-dark px-3 py-2">🧾 Printable Receipt</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop"
                    alt="Celebrating a successful booking"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <p className="mb-0 text-muted">We’ve reserved your spot. You’ll receive event updates and access instructions closer to the date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 em-section">
        <div className="container">
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">Order ID</h6>
              <div className="fw-bold">{orderId}</div>
            </div>
            <div className="text-end">
              <h6 className="mb-1">Total Paid</h6>
              <div className="fw-bold text-primary">{fmt.format(totalPaid)}</div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title">Customer</h5>
                  <div><small className="text-muted">Name</small><div>{data?.name || '-'}</div></div>
                  <div className="mt-2"><small className="text-muted">Email</small><div>{data?.email || '-'}</div></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title">Event</h5>
                  <div><small className="text-muted">Type</small><div>{data?.type || '-'}</div></div>
                  <div className="mt-2"><small className="text-muted">Attendees</small><div>{data?.attendees || '-'}</div></div>
                  <div className="mt-2"><small className="text-muted">Date</small><div>{data?.date || '-'}</div></div>
                  <div className="mt-2"><small className="text-muted">Venue</small><div>{data?.venue || '-'}</div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border-0 mt-4">
            <div className="card-body p-4">
              <h5 className="card-title">Estimate Breakdown</h5>
              <ul className="list-group list-group-flush">
                {estimate.breakdown.map((b) => (
                  <li key={b.label} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{b.label}</span>
                    <strong>{fmt.format(Math.round(b.value))}</strong>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Subtotal</span>
                  <strong>{fmt.format(estimate.subtotal)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Total</span>
                  <strong className="text-primary">{fmt.format(estimate.total)}</strong>
                </li>
              </ul>

              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-outline-secondary" onClick={() => window.print()}>Print</button>
                <Link to="/" className="btn btn-primary link-underline-opacity-0">Done</Link>
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

export default Receipt
