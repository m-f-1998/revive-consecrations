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
| `POSTGRES_DB` | The name of the connected postgres database |
| `POSTGRES_USER`           | The user connected to the database |
| `POSTGRES_PASSWORD`           | The password for the database |

## 📁 Example `.env` (for local dev)

```env
POSTGRES_DB=ordo-1962
POSTGRES_USER=your@email.com
POSTGRES_PASSWORD=yourpassword