# GTA Housing Pulse

Interactive dashboard for Greater Toronto Area housing market data and scenario forecasting.

## Features
- Macro overview (rates, population, GDP, housing starts, labour market, inflation)
- Micro factors (school catchment & GO transit premiums)
- GTA overall and by property type
- Community snapshots (with school/transit notes)
- Adjustable forecast with sliders for rate, population, inventory, and confidence
- Automated data refresh via `scripts/update_data.py`

## Stack
- React + TypeScript + Vite
- Docker Compose

## Run locally

```bash
docker compose up --build
```

Then open http://localhost:5173

## Homelab auto-update (Ubuntu + Docker + cron)

1. Clone the repo on your Ubuntu server.
2. Make the script executable:
   ```bash
   chmod +x scripts/update_data.py
   ```
3. Add a cron job (example: every day at 6:00 AM):
   ```bash
   crontab -e
   ```
   Add:
   ```
   0 6 * * * cd /path/to/gta-housing-pulse && python3 scripts/update_data.py >> /var/log/gta-housing-pulse.log 2>&1
   ```
4. After the script runs, `data/latest.json` is updated.
5. Restart or rebuild the web container if needed so the frontend picks up the new file:
   ```bash
   docker compose up -d --build
   ```

The script currently refreshes the rate fields and timestamp. Extend the fetch functions inside `scripts/update_data.py` to pull live BoC, StatCan, or CMHC pages when you want true daily updates.

## Data

Current snapshot is **October 2026** (All TRREB Areas / GTA). The forecast model is a simple factor scenario tool for exploration, not investment advice.

See previous sections for full source list.
