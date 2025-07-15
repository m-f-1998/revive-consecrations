# revive-consecrations.co.uk 🌐
Website design for [Revive Consecrations](https://revive-consecrations.co.uk) — built using Angular and Node.js, containerized with Docker.

## 🌱 Features
- Modern Angular frontend
- TypeScript backend (Node.js)
- Built and deployed with GitHub Actions
- Dev and Production branches
- Image hosted on GHCR

## 🚀 Deployment

Images are published to:
- `ghcr.io/m-f-1998/revive-coonsecrations:dev` – Dev (`beta.*`)
- `ghcr.io/m-f-1998/revive-coonsecrations:latest` – Production

## 🐳 Local Development

```bash
./dev.sh # Docker Compose Local Development Server on Port 3000
./deploy.sh ${dev|latest} # Deploy Package (Requires GHCR Access Token)
```

## 🔧 Required Environment Variables

The backend server requires the following environment variables to function properly:

| Variable              | Description                         |
|-----------------------|-------------------------------------|
| `DB` | The name of the connected postgres database |
| `USER`           | The user connected to the database |
| `PASS`           | The password for the database |

## 📁 Example `.env` (for local dev)

```env
DB=ordo-1962
USER=your@email.com
PASS=yourpassword