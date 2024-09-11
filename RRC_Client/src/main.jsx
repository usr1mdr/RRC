import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RRCMain from './RRCMain'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RRCMain />
  </StrictMode>
)
