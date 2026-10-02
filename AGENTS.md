# Sentra App — Base44 Development Guide

## Overview
Sentra is a personal device safety and assistant dashboard built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. It runs entirely as a frontend app with mock data — no database or external API required.

## Stack
- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS (dark theme)
- **Runtime**: Node 22 via Docker Compose
- **No external secrets required** — the app uses mock data

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server starts on port 3000 with live reload. Dependencies install automatically on container startup via `npm install`.

## Architecture
- `app/` — Next.js App Router (layout.tsx, page.tsx, globals.css)
- `components/` — UI components (Sidebar, DeviceOverview, SecurityAlerts, TaskList, AIAssistant)
- The AI Assistant uses canned responses — no backend AI integration

## Key notes
- `next.config.js` sets `allowedDevOrigins` using `BASE44_PUBLIC_HOST_SUFFIX` so the preview origin can access dev assets
- `WATCHPACK_POLLING=true` ensures file watching works inside the Docker bind mount
- The `node_modules` directory is an anonymous volume to avoid host/container conflicts
