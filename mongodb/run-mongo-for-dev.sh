#!/bin/zsh

# Default volume name
DEFAULT_VOLUME="mongo-data"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -db|--database-volume)
      VOLUME_NAME="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Use default volume name if not provided
VOLUME_NAME=${VOLUME_NAME:-$DEFAULT_VOLUME}

# Check if the volume exists, if not, create it
if ! podman volume exists "$VOLUME_NAME"; then
  podman volume create "$VOLUME_NAME"
fi

# Create and run the MongoDB container with the volume
podman run --name mongo-for-dev \
  --net marcos-net \
  -v "$VOLUME_NAME":/data/db \
  -d mongo


