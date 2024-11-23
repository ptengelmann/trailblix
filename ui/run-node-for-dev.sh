podman run -it --rm \
  -v $(pwd):/app:Z \
  -w /app \
  --name node-coding-container \
  --network host \
  -d node-coding
