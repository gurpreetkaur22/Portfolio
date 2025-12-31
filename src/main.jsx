import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

console.log('Main.jsx starting...')
console.log('Environment:', {
  NODE_ENV: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD
})

const rootElement = document.getElementById('root')
console.log('Root element found:', !!rootElement)

if (!rootElement) {
  console.error('Root element not found!')
} else {
  console.log('Creating React root...')
  const root = createRoot(rootElement)
  
  console.log('Rendering App...')
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  console.log('App rendered successfully')
}
