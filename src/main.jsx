import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../components2/home'
import App from '../components2/home'



createRoot(document.getElementById('root')).render(
  <>
    <Home />
    <App />
  </>,
)
