# 📡 AI Simulation Platform — REST API Documentation

This document describes all REST endpoints exposed by the backend.

# REST API Documentation

Base URL:
http://localhost:8000/api/v1

## Algorithms

GET /algorithms  
Returns list of algorithms.

## Dataset

POST /dataset/generate  
Creates synthetic dataset.

POST /dataset/upload  
Uploads CSV dataset.

## Model

POST /model/initialize  
Creates a model with hyperparameters.

## Simulation

POST /simulation/start  
POST /simulation/pause  
POST /simulation/resume  
POST /simulation/step  

## WebSocket

ws://localhost:8000/ws/simulation/{run_id}


