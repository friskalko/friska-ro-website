#!/bin/bash

echo "I am running"
sudo docker-compose down
sudo docker volume prune
clear
echo "I executed"
