# GTA Housing Pulse

Interactive dashboard for Greater Toronto Area housing market data and scenario forecasting.

## Features
- Macro overview (rates, population, GDP)
- GTA overall and by property type
- Community snapshots
- Adjustable forecast with sliders for rate, population, inventory, and confidence

## Stack
- React + TypeScript + Vite
- Docker Compose

## Run locally

```bash
docker compose up --build
```

Then open http://localhost:5173

## Data

Current snapshot is **October 2026** (All TRREB Areas / GTA), last updated 12 Nov 2026 (America/Toronto). The forecast model is a simple factor scenario tool for exploration, not investment advice. Do not treat projections as guarantees.

### Sources and as-of dates
- **TRREB Market Watch October 2026** (released 4 Nov 2026): monthly sales, average prices, new listings, active listings, SNLR trend, months-of-inventory trend, and MLS® HPI benchmarks. PDF: https://trreb.ca/wp-content/files/market-stats/market-watch/mw2610.pdf. News release: https://www.globenewswire.com/news-release/2026/11/04/3395067/0/en/inflation-and-borrowing-costs-impacted-october-gta-real-estate-market.html.
- **Bank of Canada policy rate**: 2.50%, announced 28 Oct 2026, effective 29 Oct 2026. https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/ and https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/.
- **Bank of Canada posted conventional 5-year mortgage** (series V80691335): 6.19% as of 11 Nov 2026. https://www.bankofcanada.ca/rates/banking-and-financial-statistics/posted-interest-rates-offered-by-chartered-banks/.
- **Statistics Canada** population estimates, Q2 2026, released 23 Sep 2026: Canada 41,798,407 on 1 Jul 2026, +0.5% year over year. https://www150.statcan.gc.ca/n1/daily-quotidien/260923/dq260923b-eng.htm and https://www.statcan.gc.ca/o1/en/plus/9334-weekly-review-september-21-25-2026.

### October 2026 GTA snapshot (from Market Watch)
- Sales 5,603 (−7.9% YoY); new listings 14,173 (−11.9% YoY); active listings 25,098 (−10.0% YoY).
- Average price $1,024,108 (−2.7% YoY). MLS® HPI Composite benchmark $916,400 (−4.28% YoY).
- Months of inventory (12-month trend) 4.6; SNLR trend 37.9%.
- Average prices by type (total GTA): detached $1,310,627 (−3.2%); semi-detached $1,024,907 (−0.8%); townhouse $804,416 (−5.0%); condo apartment $621,400 (−5.8%).
- Year-to-date 2026: 52,694 sales, average price $1,025,156. Official annual averages used for the overall 2022–2025 trend: 2022 $1,193,766; 2023 $1,131,219; 2024 $1,120,243; 2025 $1,067,707.

### Municipal totals published by TRREB (not shown as rows in the neighbourhood table)
These city-wide All Home Types figures are official but are not a substitute for the neighbourhood estimates already in the app (Stonehaven-Wyndham, Jefferson, etc.), which TRREB does not publish.
- Aurora: 50 sales, average $1,170,302, SNLR trend 35.3%, 294 active listings, MOI trend 5.0. HPI Composite benchmark $1,096,900 (−7.37% YoY).
- Newmarket: 98 sales, average $959,094, SNLR trend 38.5%, 301 active listings, MOI trend 4.1. HPI Composite benchmark $960,700 (−7.79% YoY).
- Richmond Hill: 185 sales, average $1,193,772, SNLR trend 33.8%, 940 active listings, MOI trend 5.5. HPI Composite benchmark $1,145,900 (−7.32% YoY).

### Left unchanged
- Neighbourhood prices, YoY, inventory, and forecast base prices (not in Market Watch).
- By-type months of inventory and bias labels (type tables in the October PDF do not include the 12-month MOI trend).
- TRREB 2026 average-price forecast range ($1.00–1.03M); no newer official range was found.
- Ontario GDP 2026 (~0.6%); Canada population growth (~0.5%) remains the latest official year-over-year figure.
