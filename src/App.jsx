import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index.jsx'
import Services from './components/Services.jsx'
import Events from './components/Events.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Request from './components/Request.jsx'
import Confirmation from './components/Confirmation.jsx'
import Receipt from './components/Receipt.jsx'
import Details from './components/Details.jsx'
import Tickets from './components/Tickets.jsx'
import './assets/style/style.css'

function App() {
  return (
    <BrowserRouter basename="/Eventify">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/details" element={<Details />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
