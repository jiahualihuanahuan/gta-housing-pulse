import { useMemo, useState } from 'react'

// ---------- Scoring model ----------
// Each factor: weight (points) + adjustable threshold. Score = sum of points earned.
// Max = 100. >= 60 = worth pursuing.

type Factor = {
  id: string
  label: string
  description: string
  weight: number
  threshold: number
  unit: string
  direction: 'higher' | 'lower'
  value: number
}

const DEFAULT_FACTORS: Factor[] = [
  { id: 'dom', label: 'Days on Market (DOM)', description: 'Stale listings = motivated seller', weight: 25, threshold: 30, unit: 'days', direction: 'higher', value: 30 },
  { id: 'cuts', label: 'Price Cuts', description: 'Each cut signals urgency', weight: 20, threshold: 1, unit: 'cuts', direction: 'higher', value: 1 },
  { id: 'relist', label: 'Relisted (withdrawn & back)', description: 'Previous deal fell through', weight: 15, threshold: 1, unit: 'yes/no', direction: 'higher', value: 0 },
  { id: 'vacant', label: 'Vacant Home', description: 'Seller paying carrying costs', weight: 10, threshold: 1, unit: 'yes/no', direction: 'higher', value: 0 },
  { id: 'discount', label: 'Below Recent Comps', description: '% below same-community sold avg', weight: 15, threshold: 5, unit: '%', direction: 'higher', value: 5 },
  { id: 'inventory', label: 'Community Inventory', description: 'Months of inventory in the area', weight: 10, threshold: 4, unit: 'months', direction: 'higher', value: 4 },
  { id: 'terms', label: 'Offer Terms', description: 'Inspection condition, flexible closing, inclusions', weight: 5, threshold: 1, unit: 'points', direction: 'higher', value: 1 },
]

function scoreFactor(f: Factor): number {
  if (f.direction === 'higher') {
    if (f.value >= f.threshold) return f.weight
    if (f.threshold === 0) return 0
    return Math.max(0, Math.round((f.value / f.threshold) * f.weight))
  } else {
    if (f.value <= f.threshold) return f.weight
    return Math.max(0, Math.round((f.threshold / f.value) * f.weight))
  }
}

function totalScore(factors: Factor[]): number {
  return factors.reduce((s, f) => s + scoreFactor(f), 0)
}

function verdict(score: number): { label: string; color: string } {
  if (score >= 80) return { label: 'Strong deal — move fast', color: '#16a34a' }
  if (score >= 60) return { label: 'Worth pursuing', color: '#2563eb' }
  if (score >= 40) return { label: 'Marginal — negotiate hard or pass', color: '#ca8a04' }
  return { label: 'Skip', color: '#dc2626' }
}

// ---------- Sample listings for demo ----------
type Listing = {
  id: string
  address: string
  community: string
  type: string
  listPrice: number
  dom: number
  cuts: number
  relisted: boolean
  vacant: boolean
  belowCompsPct: number
  inventory: number
  terms: number
}

const SAMPLE_LISTINGS: Listing[] = [
  { id: 's1', address: '12 Stonehaven Dr', community: 'Stonehaven-Wyndham', type: 'Detached', listPrice: 1580000, dom: 52, cuts: 2, relisted: true, vacant: true, belowCompsPct: 6, inventory: 3.8, terms: 2 },
  { id: 's2', address: '45 Jefferson Ave', community: 'Jefferson', type: 'Detached', listPrice: 1350000, dom: 38, cuts: 1, relisted: false, vacant: false, belowCompsPct: 4, inventory: 4.4, terms: 1 },
  { id: 's3', address: '8 Aurora Estates Ct', community: 'Aurora Estates', type: 'Semi', listPrice: 1380000, dom: 21, cuts: 0, relisted: false, vacant: false, belowCompsPct: 2, inventory: 4.0, terms: 1 },
  { id: 's4', address: '22 Bayview Hill Rd', community: 'Bayview Hill', type: 'Detached', listPrice: 1820000, dom: 65, cuts: 3, relisted: true, vacant: true, belowCompsPct: 9, inventory: 3.8, terms: 3 },
]

function listingToFactors(l: Listing, thresholds: Factor[]): Factor[] {
  return thresholds.map((t) => {
    let value = 0
    switch (t.id) {
      case 'dom': value = l.dom; break
      case 'cuts': value = l.cuts; break
      case 'relist': value = l.relisted ? 1 : 0; break
      case 'vacant': value = l.vacant ? 1 : 0; break
      case 'discount': value = l.belowCompsPct; break
      case 'inventory': value = l.inventory; break
      case 'terms': value = l.terms; break
    }
    return { ...t, value }
  })
}

export default function DealScore() {
  const [factors, setFactors] = useState<Factor[]>(DEFAULT_FACTORS)
  const [selected, setSelected] = useState<string>(SAMPLE_LISTINGS[0].id)

  const updateFactor = (id: string, patch: Partial<Factor>) => {
    setFactors((prev) => prev.map((f) => (f.id === id ? { ...f, ...patch } : f)))
  }

  const resetDefaults = () => setFactors(DEFAULT_FACTORS)

  const listing = SAMPLE_LISTINGS.find((l) => l.id === selected)!
  const activeFactors = useMemo(() => listingToFactors(listing, factors), [listing, factors])
  const score = totalScore(activeFactors)
  const v = verdict(score)

  const suggestedOffer = Math.round(listing.listPrice * 0.95)

  return (
    <div>
      <h2>Deal Score</h2>
      <p className="subtitle">
        Adjust the weights and thresholds below. The score updates live for the selected listing.
        Max 100 — <strong>60+ is worth pursuing</strong>.
      </p>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Select a listing</h3>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} style={{ width: '100%', padding: 8, fontSize: 15 }}>
          {SAMPLE_LISTINGS.map((l) => (
            <option key={l.id} value={l.id}>
              {l.address} · {l.community} · {l.type} · ${l.listPrice.toLocaleString()}
            </option>
          ))}
        </select>
        <div style={{ marginTop: 10, fontSize: 14, color: '#555' }}>
          {listing.address} · {listing.community} · {listing.type} · List ${listing.listPrice.toLocaleString()}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3>Score: {score} / 100</h3>
          <span style={{ fontWeight: 700, color: v.color, fontSize: 16 }}>{v.label}</span>
        </div>
        <div style={{ background: '#eee', borderRadius: 6, height: 14, marginTop: 8 }}>
          <div style={{ width: `${score}%`, background: v.color, borderRadius: 6, height: '100%' }} />
        </div>
        <div style={{ marginTop: 10, fontSize: 14 }}>
          Suggested opening offer: <strong>${suggestedOffer.toLocaleString()}</strong> (95% of list, adjustable in practice)
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Scoring factors (adjust weights & thresholds)</h3>
          <button onClick={resetDefaults} style={{ fontSize: 13, padding: '4px 10px' }}>
            Reset defaults
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Factor</th>
              <th>Weight</th>
              <th>Threshold</th>
              <th>Current value</th>
              <th>Points earned</th>
            </tr>
          </thead>
          <tbody>
            {activeFactors.map((f) => (
              <tr key={f.id} style={scoreFactor(f) === f.weight ? { background: '#f0fdf4' } : {}}>
                <td>
                  <strong>{f.label}</strong>
                  <div style={{ fontSize: 12, color: '#777' }}>{f.description}</div>
                </td>
                <td>
                  <input
                    type="number"
                    min={0}
                    max={50}
                    value={f.weight}
                    onChange={(e) => updateFactor(f.id, { weight: Number(e.target.value) })}
                    style={{ width: 60, padding: 4, textAlign: 'center' as const, fontSize: 14, border: '1px solid #ccc', borderRadius: 4, background: '#fff' }} 
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min={0}
                    step={f.unit === 'yes/no' ? 1 : 0.5}
                    value={f.threshold}
                    onChange={(e) => updateFactor(f.id, { threshold: Number(e.target.value) })}
                    style={{ width: 60, padding: 4, textAlign: 'center' as const, fontSize: 14, border: '1px solid #ccc', borderRadius: 4, background: '#fff' }} 
                  />
                  <span style={{ fontSize: 12, color: '#888', marginLeft: 4 }}>{f.unit}</span>
                </td>
                <td style={{ fontWeight: 600 }}>
                  {f.id === 'relist' || f.id === 'vacant' ? (f.value ? 'Yes' : 'No') : f.value}{f.unit !== 'yes/no' ? ` ${f.unit}` : ''}
                </td>
                <td style={{ fontWeight: 700, color: scoreFactor(f) === f.weight ? '#16a34a' : '#555' }}>
                  {scoreFactor(f)} / {f.weight}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>How to use</h3>
        <ul style={{ fontSize: 14, lineHeight: 1.7 }}>
          <li><strong>Weights</strong> = how many points this factor is worth (total should stay near 100).</li>
          <li><strong>Threshold</strong> = the value at which the factor earns its full weight. Below it, points scale down proportionally.</li>
          <li>Green-highlighted rows = factor earned full points for this listing.</li>
          <li>Sample listings are illustrative. Wire real TRREB / HouseSigma / Realtor.ca data in via the agent instructions in the repo README.</li>
        </ul>
      </div>
    </div>
  )
}
