#!/bin/bash

deploy/create-pod.sh -e podman \
	-pn trailblix-dev-pod \
	-hn trailblix-dev-machine \
	-m 4G \
	-net marcos-net \
	-re
