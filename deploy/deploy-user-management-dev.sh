#!/bin/zsh

# Default values
engine="podman"
podname="user-management-deploy-dev-pod"
hostname="user-management-deploy-dev-host"
memory="8G"
network="marcos-net"
ports=("5000:5000")
image_name="user-management-deploy-dev"
container_name="user-management-dev-app"

# Construct the command line
cmd="./deploy-local.sh \
  --engine \"$engine\" \
  --podname \"$podname\" \
  --hostname \"$hostname\" \
  --memory \"$memory\" \
  --network \"$network\" \
  --remove-existing \
  --remove-force \
  --image-name \"$image_name\" \
  --container-name \"$container_name\""

# Add ports to the command line
for port in "${ports[@]}"; do
  cmd="$cmd --ports $port"
done

# Print the command line
echo -e "Calling command: $cmd"

# Execute the command
eval $cmd