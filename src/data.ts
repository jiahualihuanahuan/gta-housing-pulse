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
  // Newmarket
  { name: 'Stonehaven-Wyndham', price: 1618000, yoy: -0.4, inventory: 3.8, city: 'Newmarket' },
  { name: 'Armitage', price: 1265000, yoy: -3.2, inventory: 4.2, city: 'Newmarket' },
  { name: 'Summerhill Estates', price: 1233000, yoy: -2.1, inventory: 3.9, city: 'Newmarket' },
  { name: 'Glenway Estates', price: 1082000, yoy: -4.5, inventory: 4.5, city: 'Newmarket' },
  { name: 'Woodland Hill', price: 1081000, yoy: -3.8, inventory: 4.1, city: 'Newmarket' },
  { name: 'Huron Heights-Leslie Valley', price: 1129000, yoy: -5.1, inventory: 4.6, city: 'Newmarket' },
  { name: 'Central Newmarket', price: 950000, yoy: -6.0, inventory: 5.2, city: 'Newmarket' },
  { name: 'Bristol-London', price: 1003000, yoy: -4.8, inventory: 4.7, city: 'Newmarket' },
  { name: 'Gorham-College Manor', price: 1011000, yoy: -5.5, inventory: 4.9, city: 'Newmarket' },

  // Aurora
  { name: 'Aurora Estates', price: 1750000, yoy: -1.2, inventory: 4.0, city: 'Aurora' },
  { name: 'Hills of St. Andrew', price: 1680000, yoy: -0.8, inventory: 3.6, city: 'Aurora' },
  { name: 'Bayview Northeast / Southeast', price: 1550000, yoy: -2.5, inventory: 4.3, city: 'Aurora' },
  { name: 'Aurora Highlands', price: 1420000, yoy: -3.0, inventory: 4.1, city: 'Aurora' },
  { name: 'Aurora Village', price: 1250000, yoy: -4.2, inventory: 4.8, city: 'Aurora' },
  { name: 'Aurora Grove', price: 1180000, yoy: -5.0, inventory: 4.5, city: 'Aurora' },
  { name: 'Bayview Wellington', price: 1100000, yoy: -4.7, inventory: 4.9, city: 'Aurora' },
  { name: 'Rural Aurora', price: 1600000, yoy: -1.5, inventory: 5.5, city: 'Aurora' },

  // Richmond Hill
  { name: 'Jefferson', price: 1380000, yoy: -3.5, inventory: 4.4, city: 'Richmond Hill' },
  { name: 'Bayview Hill', price: 1850000, yoy: -1.0, inventory: 3.8, city: 'Richmond Hill' },
  { name: 'Oak Ridges / Lake Wilcox', price: 1600000, yoy: -2.0, inventory: 4.2, city: 'Richmond Hill' },
  { name: 'South Richvale', price: 1550000, yoy: -2.8, inventory: 4.0, city: 'Richmond Hill' },
  { name: 'Mill Pond', price: 1450000, yoy: -3.2, inventory: 3.9, city: 'Richmond Hill' },
  { name: 'Rouge Woods', price: 1320000, yoy: -4.0, inventory: 4.5, city: 'Richmond Hill' },
  { name: 'Doncrest', price: 1150000, yoy: -5.5, inventory: 5.0, city: 'Richmond Hill' },
  { name: 'Langstaff', price: 980000, yoy: -6.8, inventory: 5.8, city: 'Richmond Hill' },
  { name: 'Observatory', price: 1050000, yoy: -5.2, inventory: 5.3, city: 'Richmond Hill' },
]

export const BASE_PRICES: Record<string, Record<string, number>> = {
  gta: { condo: 605257, townhouse: 820637, semi: 1015202, detached: 1292016, goodschool: 1150000 },
  stonehaven: { condo: 720000, townhouse: 1100000, semi: 1300000, detached: 1618000, goodschool: 1700000 },
  armitage: { condo: 600000, townhouse: 950000, semi: 1100000, detached: 1265000, goodschool: 1350000 },
  summerhill: { condo: 620000, townhouse: 980000, semi: 1120000, detached: 1233000, goodschool: 1320000 },
  glenway: { condo: 550000, townhouse: 850000, semi: 980000, detached: 1082000, goodschool: 1150000 },
  woodland: { condo: 540000, townhouse: 840000, semi: 970000, detached: 1081000, goodschool: 1140000 },
  huron: { condo: 560000, townhouse: 880000, semi: 1000000, detached: 1129000, goodschool: 1200000 },
  auroraestates: { condo: 700000, townhouse: 1200000, semi: 1400000, detached: 1750000, goodschool: 1850000 },
  hillsstandrew: { condo: 680000, townhouse: 1150000, semi: 1350000, detached: 1680000, goodschool: 1780000 },
  bayviewne: { condo: 650000, townhouse: 1100000, semi: 1300000, detached: 1550000, goodschool: 1650000 },
  jefferson: { condo: 580000, townhouse: 1000000, semi: 1200000, detached: 1380000, goodschool: 1480000 },
  bayviewhill: { condo: 750000, townhouse: 1300000, semi: 1500000, detached: 1850000, goodschool: 1950000 },
  oakridges: { condo: 680000, townhouse: 1150000, semi: 1350000, detached: 1600000, goodschool: 1700000 },
  southrichvale: { condo: 670000, townhouse: 1120000, semi: 1320000, detached: 1550000, goodschool: 1650000 },
  millpond: { condo: 620000, townhouse: 1050000, semi: 1250000, detached: 1450000, goodschool: 1550000 },
  rougewoods: { condo: 580000, townhouse: 980000, semi: 1150000, detached: 1320000, goodschool: 1420000 },
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
