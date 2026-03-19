#!/bin/bash
set -e

echo ""
echo "╔══════════════════════════════════════╗"
echo "║        Media Steward                 ║"
echo "║   Family media stewardship tool      ║"
echo "╚══════════════════════════════════════╝"
echo ""

# Check Docker is installed
if ! command -v docker &> /dev/null; then
  echo "❌ Docker is not installed."
  echo "   Install Docker Desktop from https://www.docker.com/products/docker-desktop"
  exit 1
fi

if ! docker info &> /dev/null; then
  echo "❌ Docker is not running. Please start Docker Desktop first."
  exit 1
fi

# Get local IP
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || \
           ipconfig getifaddr en1 2>/dev/null || \
           hostname -I 2>/dev/null | awk '{print $1}' || \
           echo "YOUR-SERVER-IP")

echo "🌐 Your server IP: $LOCAL_IP"
echo ""

# Run docker compose
echo "🚀 Starting Media Steward..."
docker compose up -d --build --wait

echo ""
echo "✅ Media Steward is running!"
echo ""
echo "   Dashboard:  http://localhost:3000"
echo "   DNS server: $LOCAL_IP:53"
echo ""
echo "┌─── Router Setup ──────────────────────────────────┐"
echo "│                                                    │"
echo "│  Point your BrightSpeed router's DNS to:          │"
echo "│                                                    │"
printf "│    Primary DNS: %-35s│\n" "$LOCAL_IP"
echo "│                                                    │"
echo "│  Router Settings → Internet → DNS Settings        │"
echo "│                                                    │"
echo "│  Every device on your WiFi will be covered.       │"
echo "└────────────────────────────────────────────────────┘"
echo ""
echo "  Open http://localhost:3000 to get started."
echo ""
