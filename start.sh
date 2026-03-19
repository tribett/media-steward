#!/bin/bash
set -e

echo ""
echo "╔══════════════════════════════════════╗"
echo "║        Media Steward                 ║"
echo "║   Family media stewardship tool      ║"
echo "╚══════════════════════════════════════╝"
echo ""

# ── Detect OS ────────────────────────────────────────────────────────────────
OS="$(uname -s)"

# ── Check Docker is installed ─────────────────────────────────────────────────
if ! command -v docker &> /dev/null; then
  echo "❌ Docker is not installed."
  if [ "$OS" = "Linux" ]; then
    echo "   Install Docker Engine:  https://docs.docker.com/engine/install/"
    echo "   On Raspberry Pi, the quickest way:"
    echo "     curl -fsSL https://get.docker.com | sh"
    echo "     sudo usermod -aG docker \$USER   (log out and back in after)"
  else
    echo "   Install Docker Desktop: https://www.docker.com/products/docker-desktop"
  fi
  exit 1
fi

if ! docker info &> /dev/null; then
  if [ "$OS" = "Linux" ]; then
    echo "❌ Docker is not running, or your user is not in the docker group."
    echo "   Fix: sudo usermod -aG docker \$USER  (then log out and back in)"
    echo "   Or run with:  sudo ./start.sh"
  else
    echo "❌ Docker is not running. Please start Docker Desktop first."
  fi
  exit 1
fi

# ── Linux/Pi: warn if port 53 is already bound (systemd-resolved) ────────────
if [ "$OS" = "Linux" ]; then
  if ss -lnu 2>/dev/null | grep -q ':53 ' || ss -lnt 2>/dev/null | grep -q ':53 '; then
    echo "⚠️  Port 53 is already in use — likely by systemd-resolved."
    echo ""
    echo "   This is normal on Raspberry Pi OS and Ubuntu."
    echo "   Free port 53 with these three commands, then re-run ./start.sh:"
    echo ""
    echo "     sudo systemctl disable --now systemd-resolved"
    echo "     sudo rm -f /etc/resolv.conf"
    echo "     echo 'nameserver 8.8.8.8' | sudo tee /etc/resolv.conf"
    echo ""
    read -r -p "   Continue anyway? (y/N) " choice
    case "$choice" in
      y|Y ) echo "";;
      * ) exit 1;;
    esac
  fi
fi

# ── Get local IP ──────────────────────────────────────────────────────────────
# macOS  → ipconfig getifaddr (en0=WiFi, en1=Ethernet)
# Linux  → hostname -I lists all IPs; pick the first one
# Pi/VMs → ip route as a final fallback
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || \
           ipconfig getifaddr en1 2>/dev/null || \
           hostname -I 2>/dev/null | awk '{print $1}' || \
           ip route get 1.1.1.1 2>/dev/null | awk '/src/{print $7; exit}' || \
           echo "YOUR-SERVER-IP")

echo "🌐 Your server IP: $LOCAL_IP"
echo ""

# ── Start containers ──────────────────────────────────────────────────────────
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
echo "│  Point your router's DNS to this machine:         │"
echo "│                                                    │"
printf "│    Primary DNS: %-35s│\n" "$LOCAL_IP"
echo "│                                                    │"
echo "│  BrightSpeed: Router Settings → Internet → DNS   │"
echo "│  Other routers: look for 'DNS' in Advanced/WAN    │"
echo "│                                                    │"
echo "│  Every device on your WiFi will be covered.       │"
echo "└────────────────────────────────────────────────────┘"
echo ""
echo "  Open http://localhost:3000 to get started."
echo ""
