#!/bin/zsh

# Color codes
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Check if podman-compose is installed
if ! command -v podman-compose &> /dev/null; then
  echo -e "${RED}Error: podman-compose is not installed. Please install podman-compose and try again.${NC}"
  exit 1
fi

# Check if the compose file exists
COMPOSE_FILE="all-services-for-development.yaml"
if [ ! -f "$COMPOSE_FILE" ]; then
  echo -e "${RED}Error: $COMPOSE_FILE is missing. Please ensure the file exists and try again.${NC}"
  exit 1
fi

# Inform the user that services are starting
echo -e "${YELLOW}Starting the services using podman-compose...${NC}"

# Start the services using podman-compose
podman-compose -f "$COMPOSE_FILE" up -d

# Inform the user that services have started
echo -e "${GREEN}Services started successfully.${NC}"