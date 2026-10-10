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
  { name: 'City of Toronto', price: 1034320, yoy: -3.8, inventory: 4.6 },
  { name: 'York Region', price: 1136650, yoy: -6.5, inventory: 5.0 },
  { name: 'Mississauga', price: 929600, yoy: -3.8, inventory: 4.8 },
  { name: 'Oakville', price: 1365169, yoy: -3.0, inventory: 4.9 },
  { name: 'Durham Region', price: 828141, yoy: -5.2, inventory: 3.5 },
]

export const BASE_PRICES: Record<string, Record<string, number>> = {
  gta: { condo: 605257, townhouse: 820637, semi: 1015202, detached: 1292016, goodschool: 1150000 },
  toronto: { condo: 650000, townhouse: 880000, semi: 1100000, detached: 1400000, goodschool: 1250000 },
  york: { condo: 580000, townhouse: 850000, semi: 1050000, detached: 1350000, goodschool: 1300000 },
  peel: { condo: 550000, townhouse: 780000, semi: 950000, detached: 1200000, goodschool: 1050000 },
  durham: { condo: 480000, townhouse: 700000, semi: 850000, detached: 1000000, goodschool: 920000 },
  oakville: { condo: 620000, townhouse: 950000, semi: 1200000, detached: 1550000, goodschool: 1450000 },
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
