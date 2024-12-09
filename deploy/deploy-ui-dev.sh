#!/bin/zsh

# Default values
engine="podman"
podname="trailblix-deploy-dev-pod"
hostname="trailblix-deploy-dev-host"
memory="8G"
network="marcos-net"
ports=("3000:3000" "8443:8443")
image_name="node-deploy-container"
container_name="node-ui-dev-app"

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