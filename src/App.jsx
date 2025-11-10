import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Services from './components/Services'
import Events from './components/Events'
import About from './components/About'
import Contact from './components/Contact'
import Request from './components/Request'
import Confirmation from './components/Confirmation'
import Receipt from './components/Receipt'
import Details from './components/Details'
import Tickets from './components/Tickets'
import './assets/style/style.css'

function App() {
  return (
    <BrowserRouter>
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
