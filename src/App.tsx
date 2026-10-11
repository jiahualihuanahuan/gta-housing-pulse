import { useState } from 'react'
import Home from './pages/Home'
import Forecast from './pages/Forecast'
import DealScore from './pages/DealScore'

export default function App() {
  const [page, setPage] = useState<'home' | 'forecast' | 'dealscore'>('home')

  return (
    <div className="container">
      <header>
        <h1>GTA Housing Pulse</h1>
        <p className="subtitle">Macro · Rates · Population · Averages · Property Types · Communities · Adjustable Forecast · Deal Score</p>
      </header>

      <nav>
        <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>
          Overview
        </button>
        <button className={page === 'forecast' ? 'active' : ''} onClick={() => setPage('forecast')}>
          Adjustable Forecast
        </button>
        <button className={page === 'dealscore' ? 'active' : ''} onClick={() => setPage('dealscore')}>
          Deal Score
        </button>
      </nav>

      {page === 'home' ? <Home /> : page === 'forecast' ? <Forecast /> : <DealScore />}

      <footer>
        Data as of Sep–Oct 2026 · For reference only · Simple scenario model
      </footer>
    </div>
  )
}
