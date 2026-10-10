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
  { name: 'Stonehaven (Newmarket)', price: 1565000, yoy: -0.4, inventory: 3.8, city: 'Newmarket' },
  { name: 'Jefferson (Vaughan)', price: 1420000, yoy: -3.5, inventory: 4.5, city: 'Vaughan' },
  { name: 'Woodbridge', price: 1180000, yoy: -4.2, inventory: 4.8, city: 'Vaughan' },
  { name: 'Maple', price: 1250000, yoy: -2.8, inventory: 4.2, city: 'Vaughan' },
  { name: 'Kleinburg', price: 2100000, yoy: -1.5, inventory: 6.5, city: 'Vaughan' },
  { name: 'Unionville', price: 1350000, yoy: -5.0, inventory: 4.0, city: 'Markham' },
  { name: 'Thornhill', price: 1280000, yoy: -6.2, inventory: 4.7, city: 'Markham/Vaughan' },
  { name: 'Richmond Hill Centre', price: 1150000, yoy: -7.0, inventory: 5.1, city: 'Richmond Hill' },
  { name: 'Leaside', price: 1650000, yoy: -2.0, inventory: 3.2, city: 'Toronto' },
  { name: 'Forest Hill', price: 2800000, yoy: -1.0, inventory: 5.5, city: 'Toronto' },
  { name: 'Willowdale', price: 980000, yoy: -6.5, inventory: 5.8, city: 'North York' },
  { name: 'Port Credit', price: 1200000, yoy: -3.0, inventory: 4.3, city: 'Mississauga' },
  { name: 'Oakville South', price: 1550000, yoy: -2.5, inventory: 4.6, city: 'Oakville' },
  { name: 'Ajax', price: 850000, yoy: -4.8, inventory: 3.0, city: 'Durham' },
  { name: 'Whitby', price: 880000, yoy: -3.9, inventory: 2.9, city: 'Durham' },
]

export const BASE_PRICES: Record<string, Record<string, number>> = {
  gta: { condo: 605257, townhouse: 820637, semi: 1015202, detached: 1292016, goodschool: 1150000 },
  stonehaven: { condo: 720000, townhouse: 1100000, semi: 1300000, detached: 1565000, goodschool: 1650000 },
  jefferson: { condo: 580000, townhouse: 1050000, semi: 1250000, detached: 1420000, goodschool: 1500000 },
  woodbridge: { condo: 550000, townhouse: 950000, semi: 1100000, detached: 1250000, goodschool: 1350000 },
  maple: { condo: 560000, townhouse: 980000, semi: 1150000, detached: 1280000, goodschool: 1380000 },
  kleinburg: { condo: 700000, townhouse: 1400000, semi: 1600000, detached: 2200000, goodschool: 2400000 },
  unionville: { condo: 620000, townhouse: 1050000, semi: 1250000, detached: 1400000, goodschool: 1550000 },
  thornhill: { condo: 600000, townhouse: 1000000, semi: 1200000, detached: 1350000, goodschool: 1480000 },
  leaside: { condo: 750000, townhouse: 1300000, semi: 1500000, detached: 1750000, goodschool: 1900000 },
  foresthill: { condo: 900000, townhouse: 1800000, semi: 2200000, detached: 3000000, goodschool: 3200000 },
  willowdale: { condo: 580000, townhouse: 850000, semi: 1000000, detached: 1200000, goodschool: 1300000 },
  portcredit: { condo: 650000, townhouse: 1050000, semi: 1200000, detached: 1400000, goodschool: 1500000 },
  oakvillesouth: { condo: 680000, townhouse: 1200000, semi: 1400000, detached: 1650000, goodschool: 1800000 },
  ajax: { condo: 450000, townhouse: 700000, semi: 800000, detached: 900000, goodschool: 950000 },
  whitby: { condo: 460000, townhouse: 720000, semi: 820000, detached: 920000, goodschool: 980000 },
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
