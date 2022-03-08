import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.css'
import { App } from './App'

;(async () => {
  if (import.meta.env.MODE === 'mock') {
    const utils = await import('./test-utils/browser')
    utils.worker.start()
  }

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root'),
  )
})()
