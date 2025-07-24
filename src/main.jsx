import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import './styles/styles.css'
import App from './routes.jsx';
import { HeroProvider } from './context/contextHero.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <StrictMode>
        <HeroProvider>
          <App />
        </HeroProvider>
      </StrictMode>
    </BrowserRouter>
  </>
)
