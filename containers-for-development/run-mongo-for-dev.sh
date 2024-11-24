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
  echo -e "${YELLOW}Usage: $0 [-db|--database-volume <volume_name>] [-e|--engine <engine>] [-i|--image-name <image_name>] [-hn|--hostname <hostname>] [-n|--network <network>] [-h|--help]${NC}"
  echo -e "${YELLOW}Options:${NC}"
  echo -e "${YELLOW}  -db, --database-volume <volume_name>  Specify the volume name for MongoDB data (default: mongo-data)${NC}"
  echo -e "${YELLOW}  -e, --engine <engine>                 Specify the container engine (podman or docker, default: podman)${NC}"
  echo -e "${YELLOW}  -i, --image-name <image_name>         Specify the image name (default: mongo-dev)${NC}"
  echo -e "${YELLOW}  -hn, --hostname <hostname>            Specify the hostname for the container (default: mongo-for-dev)${NC}"
  echo -e "${YELLOW}  -n, --network <network>               Specify the network for the container (default: marcos-net)${NC}"
  echo -e "${YELLOW}  -h, --help                            Show this help message and exit${NC}"
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
CONTAINER_HOSTNAME=${CONTAINER_HOSTNAME:-$DEFAULT_HOSTNAME}
NETWORK=${NETWORK:-$DEFAULT_NETWORK}

# Check if the volume exists, if not, create it
if ! $ENGINE volume exists "$VOLUME_NAME"; then
  echo -e "${YELLOW}Volume $VOLUME_NAME does not exist. Creating it now...${NC}"
  $ENGINE volume create "$VOLUME_NAME"
  echo -e "${GREEN}Volume $VOLUME_NAME created successfully.${NC}"
else
  echo -e "${GREEN}Volume $VOLUME_NAME already exists.${NC}"
fi

# Create the command to run the MongoDB container
COMMAND="$ENGINE run --name mongo-for-dev --hostname $CONTAINER_HOSTNAME --network $NETWORK -v $VOLUME_NAME:/data/db --cap-add=NET_RAW --cap-add=NET_ADMIN -d $IMAGE_NAME"

# Print the command that will be run
echo -e "${YELLOW}Running command: $COMMAND${NC}"

# Execute the command
eval $COMMAND

echo -e "${GREEN}MongoDB container started successfully.${NC}"
