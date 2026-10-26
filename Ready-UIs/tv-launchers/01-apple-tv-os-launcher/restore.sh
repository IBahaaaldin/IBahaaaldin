#!/usr/bin/env bash
# 1-Click Restore script for your TV box
set -euo pipefail
cd "$(dirname "$0")"
export TV_HOST=192.168.0.186
tools/restore.sh work/debloat.txt com.google.android.tvlauncher
echo "Your TV has been restored to its original state and stock launcher!"
