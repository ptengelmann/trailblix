#!/bin/zsh

# Color codes
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

PROJECT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || echo "$(pwd)")

# Check if the pod exists, if not, create it
if ! podman pod exists trailblix-dev-pod; then
  echo -e "${YELLOW}Creating pod trailblix-dev-pod...${NC}"
  ${PROJECT_ROOT}/deploy/create-pod.sh -e podman \
    -pn trailblix-dev-pod \
    -hn trailblix-dev-machine \
    -m 4G \
    -net marcos-net \
    -re
  echo -e "${GREEN}Pod trailblix-dev-pod created successfully.${NC}"
else
  echo -e "${GREEN}Pod trailblix-dev-pod already exists.${NC}"
fi