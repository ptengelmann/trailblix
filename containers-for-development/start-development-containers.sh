#!/bin/zsh

# Color codes
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Determine the project root directory
PROJECT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || echo "$(pwd)")

# Function to check the exit status of the last command and exit if it failed
check_exit_status() {
  if [ $? -ne 0 ]; then
    echo -e "${RED}Error: $1 failed.${NC}"
    exit 1
  fi
}

# Create the pods
echo -e "${YELLOW}Creating pods...${NC}"
${PROJECT_ROOT}/containers-for-development/create-development-pod.sh
check_exit_status "Creating pods"

# Pod name
POD_NAME_APP="trailblix-dev-pod"
POD_NAME_DB="mongo-dev-pod"

# Run the Python container with mandatory parameters
echo -e "${YELLOW}Running Python container...${NC}"
${PROJECT_ROOT}/containers-for-development/run-python-for-dev.sh \
  --engine podman \
  --image-name python-coding \
  --container-name python-coding-container \
  --pod-name $POD_NAME_APP
check_exit_status "Running Python container"

# Run the Node container with mandatory parameters
echo -e "${YELLOW}Running Node container...${NC}"
${PROJECT_ROOT}/containers-for-development/run-node-for-dev.sh \
  --engine podman \
  --image-name node-coding \
  --container-name node-coding-container \
  --pod-name $POD_NAME_APP
check_exit_status "Running Node container"

# Run the Mongo container with mandatory parameters
echo -e "${YELLOW}Running Mongo container...${NC}"
${PROJECT_ROOT}/containers-for-development/run-mongo-for-dev.sh \
  --database-volume mongo-data \
  --engine podman \
  --image-name mongo-dev \
  --pod-name $POD_NAME_DB \
  --network marcos-net
check_exit_status "Running Mongo container"

echo -e "${GREEN}All containers started successfully.${NC}"