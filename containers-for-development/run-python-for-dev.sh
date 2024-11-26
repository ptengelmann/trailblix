#!/bin/zsh

# Default values
DEFAULT_IMAGE_NAME="python-coding"
DEFAULT_POD_NAME="trailblix-dev-pod"

# Inform the user to call the script from the root of the module
echo -e "${YELLOW}Please ensure you are calling this script from the root of the module.${NC}"

# Call the common script with the appropriate parameters
./run-container-for-dev.sh --image-name $DEFAULT_IMAGE_NAME --pod-name $DEFAULT_POD_NAME "$@"