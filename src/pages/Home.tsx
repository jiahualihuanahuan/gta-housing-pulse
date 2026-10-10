import { MACRO, OVERALL, BY_TYPE, COMMUNITIES, TRENDS } from '../data'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

function TrendChart({ data, title }: { data: any[]; title: string }) {
  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <h3 style={{ marginBottom: 12 }}>{title}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <Tooltip formatter={(v: any) => `$${Number(v).toLocaleString()}`} />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false}
                strokeDasharray={(d: any) => d.projected ? '5 5' : '0'} />
          <ReferenceLine x="2026" stroke="#f59e0b" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
      <p style={{ color: '#94a3b8', fontSize: 12, marginTop: 8 }}>Solid = historical · Dotted = projected</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h2 className="section-title">Macro & Interest Rates</h2>
      <div className="grid">
        <div className="card"><h3>BoC Policy Rate</h3><div className="value">{MACRO.bocRate}</div><div className="change neutral">Held steady</div></div>
        <div className="card"><h3>5-yr Fixed Mortgage</h3><div className="value">{MACRO.fixedMortgage}</div><div className="change negative">Elevated by bond yields</div></div>
        <div className="card"><h3>Canada Population Growth</h3><div className="value">{MACRO.popGrowth}</div><div className="change negative">Near century low</div></div>
        <div className="card"><h3>Ontario GDP 2026</h3><div className="value">{MACRO.gdp2026}</div><div className="change neutral">Trade uncertainty</div></div>
      </div>

      <h2 className="section-title">GTA Overall Trend</h2>
      <TrendChart data={TRENDS.overall} title="GTA Average Price" />

      <h2 className="section-title">GTA Overall (Sep 2026)</h2>
      <div className="grid">
        <div className="card"><h3>Average Price</h3><div className="value">${OVERALL.avgPrice.toLocaleString()}</div><div className="change negative">{OVERALL.yoy}% YoY</div></div>
        <div className="card"><h3>Sales</h3><div className="value">{OVERALL.sales.toLocaleString()}</div><div className="change negative">{OVERALL.salesYoy}% YoY</div></div>
        <div className="card"><h3>Months of Inventory</h3><div className="value">{OVERALL.inventory}</div><div className="change neutral">Near balanced</div></div>
        <div className="card"><h3>TRREB 2026 Forecast</h3><div className="value">{OVERALL.trrebForecast}</div><div className="change neutral">Stable to mild decline</div></div>
      </div>

      <h2 className="section-title">By Property Type Trends</h2>
      <div className="grid">
        <TrendChart data={TRENDS.condo} title="Condo Apartment" />
        <TrendChart data={TRENDS.semi} title="Semi-detached" />
        <TrendChart data={TRENDS.detached} title="Detached" />
      </div>

      <h2 className="section-title">By Property Type</h2>
      <table>
        <thead>
          <tr><th>Type</th><th>Avg Price</th><th>YoY</th><th>Inventory (mo)</th><th>Bias</th></tr>
        </thead>
        <tbody>
          {BY_TYPE.map((row) => (
            <tr key={row.type}>
              <td>{row.type}</td>
              <td>${row.price.toLocaleString()}</td>
              <td className={row.yoy < -1 ? 'negative' : row.yoy > 0 ? 'positive' : 'neutral'}>{row.yoy}%</td>
              <td>{row.inventory}</td>
              <td>{row.bias}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="section-title">Selected Neighborhood Trends</h2>
      <div className="grid">
        <TrendChart data={TRENDS.stonehaven} title="Stonehaven-Wyndham" />
        <TrendChart data={TRENDS.jefferson} title="Jefferson" />
      </div>

      <h2 className="section-title">Neighborhoods / Communities</h2>
      <table>
        <thead>
          <tr><th>Neighborhood</th><th>City / Area</th><th>Avg Price</th><th>YoY</th><th>Inventory (mo)</th></tr>
        </thead>
        <tbody>
          {COMMUNITIES.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.city}</td>
              <td>${c.price.toLocaleString()}</td>
              <td className={c.yoy < -1 ? 'negative' : 'neutral'}>{c.yoy}%</td>
              <td>{c.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
