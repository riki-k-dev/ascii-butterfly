import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Overlay from './components/Overlay'
import { Leva } from 'leva'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Leva collapsed />
    <Overlay />
  </>
)
