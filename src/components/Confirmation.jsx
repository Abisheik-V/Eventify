import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
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

function Confirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state?.form || null
  const estimate = useMemo(() => calcEstimate(data), [data])
  const fmt = useMemo(() => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }), [])
  const handleMockPay = (e) => {
    e.preventDefault()
    const orderId = `EM-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*9999).toString().padStart(4,'0')}`
    const payModalEl = document.getElementById('payModal')
    const ModalCtor = window.bootstrap && window.bootstrap.Modal
    if (payModalEl && ModalCtor) {
      let instance = ModalCtor.getInstance(payModalEl)
      if (!instance) instance = new ModalCtor(payModalEl)
      const onHidden = () => {
        payModalEl.removeEventListener('hidden.bs.modal', onHidden)
        navigate('/receipt', { state: { form: data, orderId } })
      }
      payModalEl.addEventListener('hidden.bs.modal', onHidden)
      instance.hide()
      return
    }
    // Fallback cleanup
    document.body.classList.remove('modal-open')
    const backdrops = document.querySelectorAll('.modal-backdrop')
    backdrops.forEach((b) => b.parentElement && b.parentElement.removeChild(b))
    navigate('/receipt', { state: { form: data, orderId } })
  }

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
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold text-white">Review & Confirm</h1>
              <p className="lead text-light-50 mt-3">Please verify your event details and instant estimate. When you're ready, proceed to secure payment to lock in your booking.</p>
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
                  <h5 className="card-title">Your Request</h5>
                  <div className="row">
                    <div className="col-sm-6"><small className="text-muted d-block">Name</small><div>{data?.name || '-'}</div></div>
                    <div className="col-sm-6"><small className="text-muted d-block">Email</small><div>{data?.email || '-'}</div></div>
                    <div className="col-sm-6 mt-3"><small className="text-muted d-block">Event Type</small><div>{data?.type || '-'}</div></div>
                    <div className="col-sm-6 mt-3"><small className="text-muted d-block">Attendees</small><div>{data?.attendees || '-'}</div></div>
                    <div className="col-sm-6 mt-3"><small className="text-muted d-block">Date</small><div>{data?.date || '-'}</div></div>
                    <div className="col-sm-6 mt-3"><small className="text-muted d-block">City / Venue</small><div>{data?.venue || '-'}</div></div>
                    <div className="col-12 mt-3"><small className="text-muted d-block">Notes</small><div className="text-break">{data?.notes || '-'}</div></div>
                  </div>
                  <div className="mt-4 d-flex gap-2">
                    <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Edit</button>
                    <Link to="/contact" className="btn btn-primary link-underline-opacity-0">Talk to Us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title">Instant Estimate</h5>
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
                      <span>Total Estimate</span>
                      <strong className="text-primary">{fmt.format(estimate.total)}</strong>
                    </li>
                  </ul>
                  <small className="text-muted d-block mt-2">This is an automated estimate. Final pricing may vary after discovery.</small>

                  <div className="d-grid mt-3">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#payModal"
                    >
                      Proceed to Payment ({fmt.format(estimate.total)})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <div className="modal fade" id="payModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Pay {fmt.format(estimate.total)}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label">Card number</label>
                  <input type="text" className="form-control" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="col-6">
                  <label className="form-label">Expiry</label>
                  <input type="text" className="form-control" placeholder="MM/YY" />
                </div>
                <div className="col-6">
                  <label className="form-label">CVC</label>
                  <input type="text" className="form-control" placeholder="CVC" />
                </div>
                <div className="col-12">
                  <label className="form-label">Name on card</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>
              </form>
              <small className="text-muted d-block mt-2">Happyly Enojoy Your Event</small>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleMockPay}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
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

export default Confirmation

