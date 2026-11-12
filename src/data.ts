// GTA Housing Pulse — market snapshot and series.
// Last updated: 12 Nov 2026 (America/Toronto).
//
// Sources (do not invent or interpolate missing figures):
// - TRREB Market Watch October 2026 PDF, released 4 Nov 2026:
//   https://trreb.ca/wp-content/files/market-stats/market-watch/mw2610.pdf
//   News release (4 Nov 2026):
//   https://www.globenewswire.com/news-release/2026/11/04/3395067/0/en/inflation-and-borrowing-costs-impacted-october-gta-real-estate-market.html
//   Snapshot values (OVERALL, BY_TYPE prices/YoY, 2026 trend points, GTA BASE_PRICES)
//   are October 2026 monthly MLS® figures for All TRREB Areas unless noted.
//   Months of inventory and SNLR in Market Watch are 12-month moving-average trends
//   (active listings/sales and sales/new listings). OVERALL.inventory uses the
//   published All TRREB Areas Mos Inv (Trend) of 4.6. By-type Mos Inv (Trend) was
//   not published in the October type tables, so BY_TYPE.inventory and bias are
//   left at the previous (September 2026) values.
//   Historic Annual Statistics in the same PDF: annual average prices for 2022–2025
//   (used in TRENDS.overall) and year-to-date 2026 average $1,025,156 (52,694 sales).
//   The October PDF also revises September 2026 to 5,034 sales and $1,006,557 average
//   (originally published as 5,040 and $1,006,409).
// - Bank of Canada policy rate, effective 29 Oct 2026 (announced 28 Oct 2026): 2.50%.
//   https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/
//   https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/
//   Also printed as 2.5% in Market Watch October 2026 economic indicators.
// - Bank of Canada posted conventional 5-year mortgage (series V80691335): 6.19%
//   as of 11 Nov 2026 (unchanged through October after rising from 6.09% on 30 Sep).
//   https://www.bankofcanada.ca/rates/banking-and-financial-statistics/posted-interest-rates-offered-by-chartered-banks/
//   Same 6.19% is printed in Market Watch October 2026. This replaces the previous
//   4.3–4.6% discounted-offer range, which was not from these official series.
// - Statistics Canada, Canada's population estimates, Q2 2026, released 23 Sep 2026:
//   https://www150.statcan.gc.ca/n1/daily-quotidien/260923/dq260923b-eng.htm
//   StatCan Weekly Review (25 Sep 2026) states population was 41,798,407 on 1 Jul 2026,
//   up 189,425 (+0.5%) from 1 Jul 2025:
//   https://www.statcan.gc.ca/o1/en/plus/9334-weekly-review-september-21-25-2026
// - TRREB 2026 average-price outlook ($1.00–1.03M) was left unchanged; no newer
//   official TRREB forecast range was found.
// - Ontario GDP 2026 was left at ~0.6% (private-sector average still cited in the
//   2026 Ontario Fall Statement). The Ministry of Finance planning projection in
//   that document is 0.5% (published 29 Oct 2026); not applied here because the
//   allowed sources for this update were TRREB, BoC, StatCan, and CMHC.
//
// Not updated (not published at this grain, or not a current snapshot field):
// - Neighborhood COMMUNITIES, neighborhood TRENDS, and non-GTA BASE_PRICES
//   (Stonehaven-Wyndham, Jefferson, Aurora Estates, etc.). TRREB publishes
//   municipal totals for Aurora, Newmarket, and Richmond Hill (see README), not
//   these neighbourhoods.
// - BY_TYPE months of inventory and market-bias labels.
// - DEFAULT_CHANGES and OFFICIAL (forecast-model inputs / narrative, not monthly data).
// - 2027–2028 TRENDS points (projected) and type-level 2022–2025 annuals (no official
//   annual averages by type in the Historic Annual Statistics table).

// Additional mortgage-rate history and Big Five posted rates are in
// MORTGAGE_RATES (this file) and data/mortgage-rates.json. Those exports are
// data-only; no page or forecast logic reads them yet.
//
export const MACRO = {
  bocRate: '2.50%',
  fixedMortgage: '6.19%',
  popGrowth: '~0.5%',
  gdp2026: '~0.6%',
}

export const OVERALL = {
  avgPrice: 1024108,
  yoy: -2.7,
  sales: 5603,
  salesYoy: -7.9,
  inventory: 4.6,
  trrebForecast: '$1.00–1.03M',
}

export const BY_TYPE = [
  { type: 'Condo Apartment', price: 621400, yoy: -5.8, inventory: 6.3, bias: 'Buyer' },
  { type: 'Townhouse', price: 804416, yoy: -5.0, inventory: 4.1, bias: 'Balanced' },
  { type: 'Semi-detached', price: 1024907, yoy: -0.8, inventory: 3.0, bias: 'Seller-leaning' },
  { type: 'Detached', price: 1310627, yoy: -3.2, inventory: 5.1, bias: 'Soft balanced' },
]

export const COMMUNITIES = [
  { name: 'Stonehaven-Wyndham', price: 1618000, yoy: -0.4, inventory: 3.8, city: 'Newmarket', key: 'stonehaven' },
  { name: 'Jefferson', price: 1380000, yoy: -3.5, inventory: 4.4, city: 'Richmond Hill', key: 'jefferson' },
  { name: 'Aurora Estates', price: 1750000, yoy: -1.2, inventory: 4.0, city: 'Aurora', key: 'auroraestates' },
  { name: 'Bayview Hill', price: 1850000, yoy: -1.0, inventory: 3.8, city: 'Richmond Hill', key: 'bayviewhill' },
  { name: 'Oak Ridges / Lake Wilcox', price: 1600000, yoy: -2.0, inventory: 4.2, city: 'Richmond Hill', key: 'oakridges' },
  { name: 'Armitage', price: 1265000, yoy: -3.2, inventory: 4.2, city: 'Newmarket', key: 'armitage' },
  { name: 'Hills of St. Andrew', price: 1680000, yoy: -0.8, inventory: 3.6, city: 'Aurora', key: 'hillsstandrew' },
]

export const TRENDS = {
  overall: [
    { year: '2022', price: 1193766, projected: false },
    { year: '2023', price: 1131219, projected: false },
    { year: '2024', price: 1120243, projected: false },
    { year: '2025', price: 1067707, projected: false },
    { year: '2026', price: 1024108, projected: false },
    { year: '2027', price: 1015000, projected: true },
    { year: '2028', price: 1040000, projected: true },
  ],
  condo: [
    { year: '2022', price: 780000, projected: false },
    { year: '2023', price: 720000, projected: false },
    { year: '2024', price: 680000, projected: false },
    { year: '2025', price: 650000, projected: false },
    { year: '2026', price: 621400, projected: false },
    { year: '2027', price: 590000, projected: true },
    { year: '2028', price: 600000, projected: true },
  ],
  semi: [
    { year: '2022', price: 1200000, projected: false },
    { year: '2023', price: 1100000, projected: false },
    { year: '2024', price: 1050000, projected: false },
    { year: '2025', price: 1020000, projected: false },
    { year: '2026', price: 1024907, projected: false },
    { year: '2027', price: 1030000, projected: true },
    { year: '2028', price: 1060000, projected: true },
  ],
  detached: [
    { year: '2022', price: 1600000, projected: false },
    { year: '2023', price: 1450000, projected: false },
    { year: '2024', price: 1380000, projected: false },
    { year: '2025', price: 1340000, projected: false },
    { year: '2026', price: 1310627, projected: false },
    { year: '2027', price: 1280000, projected: true },
    { year: '2028', price: 1320000, projected: true },
  ],
  stonehaven: [
    { year: '2022', price: 1900000, projected: false },
    { year: '2023', price: 1750000, projected: false },
    { year: '2024', price: 1680000, projected: false },
    { year: '2025', price: 1640000, projected: false },
    { year: '2026', price: 1618000, projected: false },
    { year: '2027', price: 1630000, projected: true },
    { year: '2028', price: 1680000, projected: true },
  ],
  jefferson: [
    { year: '2022', price: 1650000, projected: false },
    { year: '2023', price: 1500000, projected: false },
    { year: '2024', price: 1450000, projected: false },
    { year: '2025', price: 1420000, projected: false },
    { year: '2026', price: 1380000, projected: false },
    { year: '2027', price: 1370000, projected: true },
    { year: '2028', price: 1410000, projected: true },
  ],
}

export const BASE_PRICES: Record<string, Record<string, number>> = {
  gta: { condo: 621400, townhouse: 804416, semi: 1024907, detached: 1310627, goodschool: 1150000 },
  stonehaven: { condo: 720000, townhouse: 1100000, semi: 1300000, detached: 1618000, goodschool: 1700000 },
  jefferson: { condo: 580000, townhouse: 1000000, semi: 1200000, detached: 1380000, goodschool: 1480000 },
  auroraestates: { condo: 700000, townhouse: 1200000, semi: 1400000, detached: 1750000, goodschool: 1850000 },
  bayviewhill: { condo: 750000, townhouse: 1300000, semi: 1500000, detached: 1850000, goodschool: 1950000 },
  oakridges: { condo: 680000, townhouse: 1150000, semi: 1350000, detached: 1600000, goodschool: 1700000 },
}

export const DEFAULT_CHANGES: Record<string, { y26: number; y27: number }> = {
  condo: { y26: -0.04, y27: 0.01 },
  townhouse: { y26: -0.015, y27: 0.025 },
  semi: { y26: 0.005, y27: 0.03 },
  detached: { y26: -0.025, y27: 0.02 },
  goodschool: { y26: 0.01, y27: 0.04 },
}

export const OFFICIAL: Record<string, string> = {
  condo: 'TRREB/CMHC: further softness in 2026, stabilization into 2027',
  townhouse: 'Near balanced; modest downside then recovery',
  semi: 'Most resilient; near bottom or already stabilizing',
  detached: 'Soft balanced; mild further dip then recovery',
  goodschool: 'Smallest adjustment; earliest to bottom',
}


// ---------------------------------------------------------------------------
// Mortgage rates (data-only export; not consumed by existing components)
// Full weekly BoC 5-year history and source notes: data/mortgage-rates.json
// Retrieved 12 Nov 2026 (America/Toronto) from official BoC and bank sources.
// ---------------------------------------------------------------------------
export const MORTGAGE_RATES = {
  asOfRetrieved: '2026-11-12',
  timezone: 'America/Toronto',
  historyFile: 'data/mortgage-rates.json',
  bocPolicy: {
    latest: { rate: 2.5, announcementDate: '2026-10-28', effectiveDate: '2026-10-29', changeBps: 25 },
    officialPage: 'https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/',
    announcement: 'https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/',
    nextScheduledAnnouncement: '2026-12-09',
    // Decision dates in the last ~24 months. Rate changes: Valet V39079 effective
    // dates (announcement = prior calendar day, BoC practice since 2021). Holds:
    // announcement dates from the official key-rate page. Not every 2025 FAD
    // hold may be listed if it was not in the page's recent-data table.
    history: [
      { announcementDate: '2024-10-23', effectiveDate: '2024-10-24', rate: 3.75, changeBps: -50, type: 'change' },
      { announcementDate: '2024-12-11', effectiveDate: '2024-12-12', rate: 3.25, changeBps: -50, type: 'change' },
      { announcementDate: '2025-01-29', effectiveDate: '2025-01-30', rate: 3.0, changeBps: -25, type: 'change' },
      { announcementDate: '2025-03-12', effectiveDate: '2025-03-13', rate: 2.75, changeBps: -25, type: 'change' },
      { announcementDate: '2025-06-04', effectiveDate: '2025-06-05', rate: 2.75, changeBps: 0, type: 'hold' },
      { announcementDate: '2025-07-30', effectiveDate: '2025-07-31', rate: 2.75, changeBps: 0, type: 'hold' },
      { announcementDate: '2025-09-17', effectiveDate: '2025-09-18', rate: 2.5, changeBps: -25, type: 'change' },
      { announcementDate: '2025-10-29', effectiveDate: '2025-10-30', rate: 2.25, changeBps: -25, type: 'change' },
      { announcementDate: '2025-12-10', effectiveDate: '2025-12-11', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-01-28', effectiveDate: '2026-01-29', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-03-18', effectiveDate: '2026-03-19', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-04-29', effectiveDate: '2026-04-30', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-06-10', effectiveDate: '2026-06-11', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-07-15', effectiveDate: '2026-07-16', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-09-02', effectiveDate: '2026-09-03', rate: 2.25, changeBps: 0, type: 'hold' },
      { announcementDate: '2026-10-28', effectiveDate: '2026-10-29', rate: 2.5, changeBps: 25, type: 'change' },
    ],
  },
  bocConventional5Year: {
    series: 'V80691335',
    latest: { date: '2026-11-11', rate: 6.19 },
    about3MonthsAgo: { date: '2026-08-12', rate: 6.09 },
    about6MonthsAgo: { date: '2026-05-13', rate: 6.09 },
    // Posted 5-year conventional rose 10 bps on 2026-10-07 while the policy rate
    // was still held at 2.25%.
    lastChange: { date: '2026-10-07', from: 6.09, to: 6.19, changeBps: 10 },
    page: 'https://www.bankofcanada.ca/rates/banking-and-financial-statistics/posted-interest-rates-offered-by-chartered-banks/',
  },
  bigFivePosted: {
    rbc: {
      page: 'https://www.rbcroyalbank.com/mortgages/mortgage-rates.html',
      asOf: '2026-11-12',
      prime: 4.7,
      posted5YearFixed: 6.19,
      posted5YearVariable: 4.7,
      spreadPpt: 1.49,
    },
    td: {
      page: 'https://www.td.com/ca/en/personal-banking/products/mortgages/mortgage-rates',
      asOf: '2026-11-12',
      tdMortgagePrime: 4.85,
      posted5YearFixed: 6.14,
      posted5YearVariable: 4.85,
      spreadPpt: 1.29,
    },
    scotiabank: {
      page: 'https://www.scotiabank.com/ca/en/personal/rates-prices/mortgages-rates.html',
      asOf: '2026-11-12',
      prime: 4.7,
      primeChangedDate: '2026-10-29',
      posted5YearFixed: 6.19,
      // No 5-year variable row in the official nonspecial/posted table.
      posted5YearVariable: null,
      spreadPpt: null,
    },
    bmo: {
      page: 'https://www.bmo.com/main/personal/mortgages/mortgage-rates/',
      asOf: null,
      posted5YearFixed: null,
      posted5YearVariable: null,
      spreadPpt: null,
      status: 'not_retrieved',
    },
    cibc: {
      page: 'https://www.cibc.com/en/personal-banking/mortgages/rates-table.html',
      asOf: '2026-11-12',
      posted5YearFixed: 6.49,
      posted5YearFixedPublished: '2026-10-09',
      posted5YearVariable: 4.7,
      posted5YearVariablePublished: '2026-10-29',
      spreadPpt: 1.79,
    },
  },
}
