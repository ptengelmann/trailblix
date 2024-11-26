#!/bin/zsh

# Color codes
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Default values
DEFAULT_VOLUME="mongo-data"
DEFAULT_ENGINE="podman"
DEFAULT_IMAGE_NAME="mongo-dev"
DEFAULT_HOSTNAME="mongo-for-dev-machine"
DEFAULT_NETWORK="marcos-net"

# Function to print usage
print_usage() {
  echo -e "${YELLOW}Usage: $0 [-db|--database-volume <volume_name>] [-e|--engine <engine>] [-i|--image-name <image_name>] [-n|--network <network>] [[-hn|--hostname <hostname>] | [-p|--pod-name <pod_name>]] [-h|--help]${NC}"
  echo -e "${YELLOW}Options:${NC}"
  echo -e "${YELLOW}  -db, --database-volume <volume_name>  Specify the volume name for MongoDB data (default: mongo-data)${NC}"
  echo -e "${YELLOW}  -e, --engine <engine>                 Specify the container engine (podman or docker, default: podman)${NC}"
  echo -e "${YELLOW}  -i, --image-name <image_name>         Specify the image name (default: mongo-dev)${NC}"
  echo -e "${YELLOW}  -hn, --hostname <hostname>            Specify the hostname for the container (required if pod is not specified)${NC}"
  echo -e "${YELLOW}  -n, --network <network>               Specify the network for the container (default: marcos-net)${NC}"
  echo -e "${YELLOW}  -p, --pod-name <pod_name>             Specify the pod name for the container${NC}"
  echo -e "${YELLOW}  -h, --help                            Show this help message and exit${NC}"
  echo -e "${YELLOW}Note: --hostname and --pod-name are mutually exclusive. You must specify one of them.${NC}"
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -db|--database-volume)
      VOLUME_NAME="$2"
      shift 2
      ;;
    -e|--engine)
      ENGINE="$2"
      shift 2
      ;;
    -i|--image-name)
      IMAGE_NAME="$2"
      shift 2
      ;;
    -hn|--hostname)
      CONTAINER_HOSTNAME="$2"
      shift 2
      ;;
    -n|--network)
      NETWORK="$2"
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

# Use default values if not provided
VOLUME_NAME=${VOLUME_NAME:-$DEFAULT_VOLUME}
ENGINE=${ENGINE:-$DEFAULT_ENGINE}
IMAGE_NAME=${IMAGE_NAME:-$DEFAULT_IMAGE_NAME}
NETWORK=${NETWORK:-$DEFAULT_NETWORK}

# Ensure either pod name or hostname is provided
if [[ -z "$POD_NAME" && -z "$CONTAINER_HOSTNAME" ]]; then
  echo -e "${RED}Error: Either pod name or hostname must be specified.${NC}"
  print_usage
  exit 1
fi

# Check if the volume exists, if not, create it
if ! $ENGINE volume exists "$VOLUME_NAME"; then
  echo -e "${YELLOW}Volume $VOLUME_NAME does not exist. Creating it now...${NC}"
  $ENGINE volume create "$VOLUME_NAME"
  echo -e "${GREEN}Volume $VOLUME_NAME created successfully.${NC}"
else
  echo -e "${GREEN}Volume $VOLUME_NAME already exists.${NC}"
fi

# Create the command to run the MongoDB container
if [[ -n "$POD_NAME" ]]; then
  COMMAND="$ENGINE run --name mongo-for-dev --network $NETWORK -v $VOLUME_NAME:/data/db --cap-add=NET_RAW --cap-add=NET_ADMIN -d --pod $POD_NAME $IMAGE_NAME"
else
  COMMAND="$ENGINE run --name mongo-for-dev --hostname $CONTAINER_HOSTNAME --network $NETWORK -v $VOLUME_NAME:/data/db --cap-add=NET_RAW --cap-add=NET_ADMIN -d $IMAGE_NAME"
fi

# Print the command that will be run
echo -e "${YELLOW}Running command: $COMMAND${NC}"

# Execute the command
eval $COMMAND

echo -e "${GREEN}MongoDB container started successfully.${NC}"
