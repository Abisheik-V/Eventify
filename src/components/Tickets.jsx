import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Tickets() {
  const location = useLocation()
  const navigate = useNavigate()
  const ev = location.state?.event || null

  useEffect(() => {
    if (!ev) navigate('/events')
  }, [ev, navigate])

  const [tier, setTier] = useState('standard')
  const [qty, setQty] = useState(1)
  const unitPrice = useMemo(() => (tier === 'vip' ? Math.round(ev?.price * 2) : ev?.price || 0), [tier, ev])
  const total = useMemo(() => unitPrice * Math.max(1, Number(qty || 1)), [unitPrice, qty])
  const fmt = useMemo(() => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }), [])

  const handlePay = (e) => {
    e.preventDefault()
    const orderId = `TK-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*9999).toString().padStart(4,'0')}`
    const form = {
      name: 'Ticket Buyer',
      email: '',
      type: ev?.badge || 'Event',
      attendees: qty,
      date: ev?.date || '',
      venue: ev?.location || '',
      notes: `${tier.toUpperCase()} ticket(s) for ${ev?.title}`,
    }
    navigate('/receipt', { state: { form, orderId, totalPaid: total } })
  }

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
              <h1 className="display-5 fw-bold text-white">Buy Tickets</h1>
              <p className="lead text-light-50 mt-3">{ev.title} • {ev.date} • {ev.location}</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <span className="badge bg-primary">{ev.badge}</span>
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
            <div className="col-lg-7">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title">Select Tickets</h5>
                  <form className="row g-3" onSubmit={handlePay}>
                    <div className="col-md-6">
                      <label className="form-label">Tier</label>
                      <select className="form-select" value={tier} onChange={(e) => setTier(e.target.value)}>
                        <option value="standard">Standard — {fmt.format(ev.price)}</option>
                        <option value="vip">VIP — {fmt.format(Math.round(ev.price * 2))}</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Quantity</label>
                      <input type="number" min="1" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                        <span>Unit price</span>
                        <strong>{fmt.format(unitPrice)}</strong>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
                        <span>Total</span>
                        <strong className="text-primary">{fmt.format(total)}</strong>
                      </div>
                    </div>
                    <div className="col-12 d-flex gap-2 mt-2">
                      <button type="submit" className="btn btn-primary">Pay Now</button>
                      <Link to="/events" className="btn btn-outline-primary link-underline-opacity-0">Back to Events</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-2">What’s included</h6>
                  <ul className="mb-0">
                    <li>Access to all sessions</li>
                    <li>Digital badge & certificate</li>
                    <li>Networking lounge access</li>
                    {tier === 'vip' && <li>VIP seating + after‑party</li>}
                  </ul>
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

export default Tickets
