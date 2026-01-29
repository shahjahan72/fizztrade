Deployment checklist

1) Required environment variables (set in Vercel dashboard or local .env):
   - DATABASE_URL (Postgres connection string) — required for Prisma client
   - NEXTAUTH_SECRET (random string) — required by NextAuth
   - NEXTAUTH_URL (e.g. https://your-site.vercel.app) — required by NextAuth

2) Build steps (Vercel handles these automatically):
   - `npm install` (postinstall runs `prisma generate`)
   - `npm run build` (runs `next build`)

3) Notes:
   - This project uses Prisma (Postgres) as its single database. Ensure `DATABASE_URL` is set in Vercel.
   - Prisma client is generated via the `postinstall` script, which runs on Vercel during install.
   - Add the secret values in Vercel under Project Settings > Environment Variables.

If you want, I can add a `.env.example` with the expected variables and a basic `vercel.json` (already added) to make deployment more explicit.