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

# Function to check if a pod exists
pod_exists() {
    local engine=$1
    local podname=$2
    $engine pod exists $podname 2>/dev/null
}

# Function to check if an image exists
image_exists() {
    local engine=$1
    local image_name=$2
    $engine images --format "{{.Repository}}" | grep -q "^${image_name}$"
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
    echo -e "  --help|-h             Display this help message"
    echo -e "\n${YELLOW}Examples:${NC}"
    echo -e "  $0 --engine podman --podname my-pod --hostname my-host --memory 4G --image-name node-dev --ports 8080:80 8443:443"
    echo -e "  $0 --podname test-pod --hostname test-host --image-name node-dev --remove-existing"
}

# Parse arguments
engine="podman"
memory="8G"
remove_existing=false
remove_force=false
image_name=""

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
            ports=("$2")
            shift 2
            while [[ $1 != -* ]] && [[ $# -gt 0 ]]; do
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

# Check required arguments
if [[ -z $podname || -z $hostname || -z $image_name ]]; then
    print_message $RED "Error: podname, hostname, and image-name are required."
    usage
    exit 1
fi

# Check if the image exists
if ! image_exists $engine $image_name; then
    print_message $RED "Error: Image '$image_name' does not exist. Please run the script: build_node_dev_image.sh"
    exit 1
fi

# Check if the pod exists
if ! pod_exists $engine $podname; then
    print_message $RED "Error: Pod '$podname' does not exist. Please run the script: create-pod.sh"
    exit 1
fi

# Set default network if not provided
network=${network:-"$podname-net"}

# Check if network exists, if not, create it
if ! $engine network inspect $network &>/dev/null; then
    print_message $YELLOW "Warning: Network '$network' does not exist. Creating it now."
    if $engine network create $network; then
        print_message $GREEN "Network '$network' created successfully."
    else
        print_message $RED "Error: Failed to create network '$network'."
        exit 1
    fi
fi

# Pod and image checks passed; continue with pod creation
create_command="$engine pod create --name $podname --hostname $hostname --memory $memory --network $network"

# Add port mappings
for port in "${ports[@]}"; do
    create_command+=" -p $port"
done

print_message $GREEN "Creating pod with command:"
print_message $GREEN "$create_command"

if eval $create_command; then
    print_message $GREEN "Pod '$podname' created successfully."
else
    print_message $RED "Error: Failed to create pod '$podname'."
    exit 1
fi
