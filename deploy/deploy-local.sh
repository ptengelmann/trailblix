#!/usr/bin/env bash

# Color codes
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to check if an image exists
image_exists() {
    local engine=$1
    local image_name=$2
    local images_list
    images_list=$($engine images --format "{{.Repository}}:{{.Tag}}")
    if echo "$images_list" | grep -qE "^(localhost/)?${image_name}(:latest)?$"; then
        return 0
    else
        return 1
    fi
}

# Display usage if no arguments or help flag
usage() {
    echo -e "${YELLOW}Usage:${NC} $0 [options]"
    echo -e "\n${YELLOW}Options:${NC}"
    echo -e "  --engine|-e           Container engine to use (default: podman)"
    echo -e "  --podname|-pn         Name of the pod (required)"
    echo -e "  --hostname|-hn        Hostname of the pod (required)"
    echo -e "  --memory|-m           Memory allocation for the pod (default: 8G)"
    echo -e "  --network|-net        Network to use (default: <podname>-net)"
    echo -e "  --ports|-p            List of ports to map (e.g., 8080:80 8443:443)"
    echo -e "  --remove-existing|-re Remove existing pod if it exists (default: false)"
    echo -e "  --remove-force|-rf    Forcefully remove existing pod if it exists (default: false)"
    echo -e "  --image-name|-i       Name of the image to verify (required)"
    echo -e "  --container-name|-c   Name of the container to run (required)"
    echo -e "  --help|-h             Display this help message"
    echo -e "\n${YELLOW}Examples:${NC}"
    echo -e "  $0 --engine podman --podname my-pod --hostname my-host --memory 4G --image-name node-dev --container-name my-container --ports 8080:80 8443:443"
}

# Default values
engine="podman"
podname=""
hostname=""
memory="8G"
network=""
ports=()
remove_existing=false
remove_force=false
image_name=""
container_name=""

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --engine|-e)
            engine="$2"
            shift 2
            ;;
        --podname|-pn)
            podname="$2"
            shift 2
            ;;
        --hostname|-hn)
            hostname="$2"
            shift 2
            ;;
        --memory|-m)
            memory="$2"
            shift 2
            ;;
        --network|-net)
            network="$2"
            shift 2
            ;;
        --ports|-p)
            ports+=("$2")
            shift 2
            while [[ $# -gt 0 && $1 != -* ]]; do
                ports+=("$1")
                shift
            done
            ;;
        --remove-existing|-re)
            remove_existing=true
            shift
            ;;
        --remove-force|-rf)
            remove_force=true
            shift
            ;;
        --image-name|-i)
            image_name="$2"
            shift 2
            ;;
        --container-name|-c)
            container_name="$2"
            shift 2
            ;;
        --help|-h)
            usage
            exit 0
            ;;
        *)
            print_message $RED "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
done

# Check if required arguments are provided
if [ -z "$podname" ] || [ -z "$hostname" ] || [ -z "$image_name" ] || [ -z "$container_name" ]; then
    print_message $RED "Error: Pod name, hostname, image name, and container name are required."
    usage
    exit 1
fi

# Set default network if not provided
if [ -z "$network" ]; then
    network="${podname}-net"
fi

# Call create-pod.sh to manage the pod
./create-pod.sh \
  --engine "$engine" \
  --podname "$podname" \
  --hostname "$hostname" \
  --memory "$memory" \
  --network "$network" \
  --remove-existing  \
  --remove-force  \
  --ports "${ports[@]}"

# Check if the image exists
if image_exists $engine $image_name; then
    print_message $GREEN "Image '$image_name' exists."
else
    print_message $RED "Error: Image '$image_name' does not exist."
    exit 1
fi

# Run the container
print_message $YELLOW "Running container with image: $image_name"
$engine run --cap-add=NET_RAW -d --name "$container_name" --pod "$podname" "$image_name"

print_message $GREEN "Container started successfully with image: $image_name"