podman run -it --rm \
  -v $(pwd):/app:Z \
  -w /app \
  --name python-coding-user-management \
  --network host \
  --pod trailblix-dev-pod \
  -d python-coding
