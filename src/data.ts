export const MACRO = {
  bocRate: '2.25%',
  fixedMortgage: '4.3–4.6%',
  popGrowth: '~0.5%',
  gdp2026: '~0.6%',
}

export const OVERALL = {
  avgPrice: 1006409,
  yoy: -5.1,
  sales: 5040,
  salesYoy: -9.0,
  inventory: 4.6,
  trrebForecast: '$1.00–1.03M',
}

export const BY_TYPE = [
  { type: 'Condo Apartment', price: 605257, yoy: -7.7, inventory: 6.3, bias: 'Buyer' },
  { type: 'Townhouse', price: 820637, yoy: -4.6, inventory: 4.1, bias: 'Balanced' },
  { type: 'Semi-detached', price: 1015202, yoy: -0.2, inventory: 3.0, bias: 'Seller-leaning' },
  { type: 'Detached', price: 1292016, yoy: -5.1, inventory: 5.1, bias: 'Soft balanced' },
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
    { year: '2022', price: 1280000, projected: false },
    { year: '2023', price: 1150000, projected: false },
    { year: '2024', price: 1100000, projected: false },
    { year: '2025', price: 1060000, projected: false },
    { year: '2026', price: 1006409, projected: false },
    { year: '2027', price: 1015000, projected: true },
    { year: '2028', price: 1040000, projected: true },
  ],
  condo: [
    { year: '2022', price: 780000, projected: false },
    { year: '2023', price: 720000, projected: false },
    { year: '2024', price: 680000, projected: false },
    { year: '2025', price: 650000, projected: false },
    { year: '2026', price: 605257, projected: false },
    { year: '2027', price: 590000, projected: true },
    { year: '2028', price: 600000, projected: true },
  ],
  semi: [
    { year: '2022', price: 1200000, projected: false },
    { year: '2023', price: 1100000, projected: false },
    { year: '2024', price: 1050000, projected: false },
    { year: '2025', price: 1020000, projected: false },
    { year: '2026', price: 1015202, projected: false },
    { year: '2027', price: 1030000, projected: true },
    { year: '2028', price: 1060000, projected: true },
  ],
  detached: [
    { year: '2022', price: 1600000, projected: false },
    { year: '2023', price: 1450000, projected: false },
    { year: '2024', price: 1380000, projected: false },
    { year: '2025', price: 1340000, projected: false },
    { year: '2026', price: 1292016, projected: false },
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
  gta: { condo: 605257, townhouse: 820637, semi: 1015202, detached: 1292016, goodschool: 1150000 },
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
