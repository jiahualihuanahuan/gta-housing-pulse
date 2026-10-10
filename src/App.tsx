import { useState } from 'react'
import Home from './pages/Home'
import Forecast from './pages/Forecast'

export default function App() {
  const [page, setPage] = useState<'home' | 'forecast'>('home')

  return (
    <div className="container">
      <header>
        <h1>GTA Housing Pulse</h1>
        <p className="subtitle">Macro · Rates · Population · Averages · Property Types · Communities · Adjustable Forecast</p>
      </header>

      <nav>
        <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>
          Overview
        </button>
        <button className={page === 'forecast' ? 'active' : ''} onClick={() => setPage('forecast')}>
          Adjustable Forecast
        </button>
      </nav>

      {page === 'home' ? <Home /> : <Forecast />}

      <footer>
        Data as of Sep–Oct 2026 · For reference only · Simple scenario model
      </footer>
    </div>
  )
}
