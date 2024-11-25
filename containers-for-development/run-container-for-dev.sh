#!/bin/zsh

# Color codes
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Default values
DEFAULT_ENGINE="podman"
DEFAULT_CONTAINER_NAME="coding-container"
DEFAULT_POD_NAME="trailblix-dev-pod"

# Function to print usage
print_usage() {
  echo -e "${YELLOW}Usage: $0 [-e|--engine <engine>] [-i|--image-name <image_name>] [-c|--container-name <container_name>] [-p|--pod-name <pod_name>] [-h|--help]${NC}"
  echo -e "${YELLOW}Options:${NC}"
  echo -e "${YELLOW}  -e, --engine <engine>           Specify the container engine (podman or docker, default: podman)${NC}"
  echo -e "${YELLOW}  -i, --image-name <image_name>   Specify the image name${NC}"
  echo -e "${YELLOW}  -c, --container-name <container_name> Specify the container name (default: coding-container)${NC}"
  echo -e "${YELLOW}  -p, --pod-name <pod_name>       Specify the pod name (default: trailblix-dev-pod)${NC}"
  echo -e "${YELLOW}  -h, --help                      Show this help message and exit${NC}"
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -e|--engine)
      ENGINE="$2"
      shift 2
      ;;
    -i|--image-name)
      IMAGE_NAME="$2"
      shift 2
      ;;
    -c|--container-name)
      CONTAINER_NAME="$2"
      shift 2
      ;;
    -p|--pod-name)
      POD_NAME="$2"
      shift 2
      ;;
    -h|--help)
      print_usage
      exit 0
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      print_usage
      exit 1
      ;;
  esac
done

# Check if image name is provided
if [ -z "$IMAGE_NAME" ]; then
  echo -e "${RED}Error: Image name is required.${NC}"
  print_usage
  exit 1
fi

# Use default values if not provided
ENGINE=${ENGINE:-$DEFAULT_ENGINE}
CONTAINER_NAME=${CONTAINER_NAME:-$DEFAULT_CONTAINER_NAME}
POD_NAME=${POD_NAME:-$DEFAULT_POD_NAME}

# Determine the project root directory
PROJECT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || echo "$(pwd)")

# Create and run the development container with the specified or default image
echo -e "${YELLOW}Starting development container with image $IMAGE_NAME using $ENGINE...${NC}"
if [ -n "$POD_NAME" ]; then
  COMMAND="$ENGINE run -it --rm -d --cap-add=NET_RAW --cap-add=NET_ADMIN -v $PROJECT_ROOT:/trailblix:Z -w /trailblix --name $CONTAINER_NAME --pod $POD_NAME $IMAGE_NAME"
else
  COMMAND="$ENGINE run -it --rm -d --cap-add=NET_RAW --cap-add=NET_ADMIN -v $PROJECT_ROOT:/trailblix:Z -w /trailblix --name $CONTAINER_NAME --network host $IMAGE_NAME"
fi

# Print the command that will be run
echo -e "${YELLOW}Running command: $COMMAND${NC}"

# Execute the command
eval $COMMAND

echo -e "${GREEN}Development container started successfully.${NC}"