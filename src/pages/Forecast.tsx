import { useState, useMemo } from 'react'
import { BASE_PRICES, DEFAULT_CHANGES, OFFICIAL } from '../data'

export default function Forecast() {
  const [region, setRegion] = useState('gta')
  const [type, setType] = useState('semi')
  const [rate, setRate] = useState(0)
  const [pop, setPop] = useState(0)
  const [inv, setInv] = useState(0)
  const [conf, setConf] = useState(0)

  const result = useMemo(() => {
    const base = BASE_PRICES[region][type]
    const def = DEFAULT_CHANGES[type]
    const y26 = Math.round(base * (1 + def.y26))
    const y27 = Math.round(y26 * (1 + def.y27))

    const rateImpact = rate * -0.0004
    const popImpact = pop * 0.02
    const invImpact = inv * -0.015
    const confImpact = conf * 0.0015
    const adj = 1 + rateImpact + popImpact + invImpact + confImpact

    const user26 = Math.round(y26 * adj)
    const user27 = Math.round(y27 * adj)
    const delta = ((user26 - base) / base) * 100

    return { base, y26, y27, user26, user27, delta }
  }, [region, type, rate, pop, inv, conf])

  return (
    <div>
      <h2 className="section-title">Adjustable Forecast</h2>
      <div className="controls">
        <div>
          <div className="slider-group">
            <label>Region</label>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="gta">GTA Overall</option>
              <option value="toronto">City of Toronto</option>
              <option value="york">York Region</option>
              <option value="peel">Peel / Mississauga</option>
              <option value="durham">Durham</option>
              <option value="oakville">Oakville / Halton</option>
            </select>
          </div>
          <div className="slider-group">
            <label>Property Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="condo">Condo Apartment</option>
              <option value="townhouse">Townhouse</option>
              <option value="semi">Semi-detached</option>
              <option value="detached">Detached</option>
              <option value="goodschool">Good School Semi / Detached</option>
            </select>
          </div>

          <div className="slider-group">
            <label>Rate adjustment <span>{rate} bp</span></label>
            <input type="range" min={-50} max={100} step={25} value={rate} onChange={(e) => setRate(+e.target.value)} />
          </div>
          <div className="slider-group">
            <label>Population growth <span>{pop.toFixed(1)}%</span></label>
            <input type="range" min={-1} max={1.5} step={0.1} value={pop} onChange={(e) => setPop(+e.target.value)} />
          </div>
          <div className="slider-group">
            <label>Inventory change (mo) <span>{inv}</span></label>
            <input type="range" min={-2} max={3} step={0.5} value={inv} onChange={(e) => setInv(+e.target.value)} />
          </div>
          <div className="slider-group">
            <label>Buyer confidence <span>{conf}</span></label>
            <input type="range" min={-20} max={20} step={5} value={conf} onChange={(e) => setConf(+e.target.value)} />
          </div>
        </div>

        <div className="result-box">
          <div className="result-row"><span>Current base</span><span className="big">${result.base.toLocaleString()}</span></div>
          <div className="result-row"><span>Default 2026</span><span>${result.y26.toLocaleString()}</span></div>
          <div className="result-row"><span>Default 2027</span><span>${result.y27.toLocaleString()}</span></div>
          <div className="result-row"><span>Official reference</span><span>{OFFICIAL[type]}</span></div>
          <hr />
          <div className="result-row"><span>Your 2026</span><span className="big">${result.user26.toLocaleString()}</span></div>
          <div className="result-row"><span>Your 2027</span><span className="big">${result.user27.toLocaleString()}</span></div>
          <div className="result-row">
            <span>Change vs current</span>
            <span className={result.delta >= 0 ? 'positive' : 'negative'}>
              {result.delta > 0 ? '+' : ''}{result.delta.toFixed(1)}%
            </span>
          </div>
          <p className="note">Default path from current data + simple factor model. Official notes from TRREB/CMHC. Adjust sliders to see scenario impact.</p>
        </div>
      </div>
    </div>
  )
}
