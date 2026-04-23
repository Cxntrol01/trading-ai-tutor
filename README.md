# trading-ai-tutor

Tiny free MVP: an AI‑assisted trading education site for up to 5 users.  
This repo contains a React frontend, serverless API stubs, lesson content, and a small simulator dataset.

## Quick start (mobile friendly)
1. Create a Supabase project (free tier) — you will add keys to Vercel later.  
2. Add environment variables to Vercel when you connect the repo.  
3. Deploy to Vercel (connect GitHub repo) or run locally if you have a desktop.

## Local development (desktop recommended)
1. Clone the repo:
   - `git clone git@github.com:YOURNAME/trading-ai-tutor.git`
2. Install and run the web app:
   - `cd trading-ai-tutor/web`
   - `npm install`
   - `npm run dev`
3. Serverless API functions live in `/api` and are deployed with Vercel.

## Project structure
- `/web` — React + TypeScript frontend
- `/api` — serverless endpoints (chat, simulator, lessons, journal)
- `/data` — sample candle CSV and lesson markdown
- `/infra` — Supabase schema and deployment config

## Environment variables
Copy `.env.example` to `.env` (or set in Vercel) and fill values:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `LLM_API_KEY`

## Privacy and usage
- The app is educational only. No real money trading or broker integration in the MVP.  
- Memory is **opt‑in**: lesson progress stored by default; trade journals and chat transcripts stored only if the user enables them.

## Deployment (Vercel)
1. Connect this GitHub repo to Vercel.  
2. Set environment variables in Vercel (same names as above).  
3. Build command: `npm run build` (from `/web`)  
4. Output directory: `web/dist` (or `web/build` depending on your setup)

## Next steps
- Create a Supabase project and run the SQL schema in `/infra/supabase-schema.sql`.  
- I will provide the exact SQL and the serverless chat pseudo code next.
