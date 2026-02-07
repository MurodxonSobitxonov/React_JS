import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './components'

createRoot(document.getElementById('root')).render(
  <>
    <Parent />
  </>,
)
