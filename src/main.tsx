import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.tsx'

// The build writes a static <title> and description per route for link previews
// (plugins/shareMeta.ts). Drop them so PageMeta's tags are the only ones and the
// tab title follows client-side navigation.
document.querySelectorAll('[data-prerendered]').forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
)
