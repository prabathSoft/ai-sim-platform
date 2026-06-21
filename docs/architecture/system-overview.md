# 🧠 AI Simulation Platform — System Overview

This document provides a high-level overview of the architecture for the **AI Simulation Platform**, including the frontend, backend, simulation engine, and WebSocket streaming layer.

---

## 1. System Architecture Diagram

Frontend (React + Zustand)
│
├── Algorithm Selection
├── Hyperparameter Config
├── Dataset Generator / Upload
├── Simulation Canvas (Decision Boundary / Feature Maps)
├── Metrics Charts
│
▼
Backend API (FastAPI)
│
├── /algorithms
├── /dataset
├── /model
├── /simulation
│
▼
Simulation Engine
│
├── Training Loop
├── Metrics Generator
├── Decision Boundary Generator
├── Feature Map Generator
│
▼
WebSocket Stream
│
└── Real-time updates → Frontend
---

## 2. Frontend Architecture

The frontend is built with:

- **React (TypeScript)**
- **Zustand** for state management
- **Canvas** for real-time visualizations
- **Chart.js** for metrics
- **WebSocket** for live updates

### Key Modules

- `components/` — UI components and simulation canvases  
- `stores/` — global state (algorithm, config, dataset, simulation)  
- `services/api/` — REST API client  
- `services/websocket/` — WebSocket wrapper  
- `styles/` — global styling  

---

## 3. Backend Architecture

The backend is built with **FastAPI** and structured into:

- `api/` — REST endpoints  
- `services/` — business logic  
- `simulation_engine/` — training loop  
- `websocket/` — real-time streaming  
- `models/` — Pydantic schemas  
- `utils/` — helpers  

---

## 4. Simulation Engine

The simulation engine is responsible for:

- Running training loops  
- Generating metrics (loss, accuracy)  
- Generating decision boundary grids  
- Generating CNN feature maps  
- Sending updates through WebSocket  

It is intentionally lightweight and modular so it can be replaced with a real ML backend later.

---

## 5. Data Flow

### 1. User selects algorithm  
→ stored in Zustand

### 2. User configures hyperparameters  
→ stored in Zustand

### 3. User generates dataset  
→ stored in Zustand

### 4. User starts simulation  
→ frontend sends payload to `/simulation/start`

### 5. Backend starts training  
→ simulation engine begins loop

### 6. WebSocket sends updates  
→ frontend updates canvases + charts in real time

---

## 6. Future Extensions

- Real ML models (PyTorch / TensorFlow)
- Multi-class visualizations
- 3D decision boundaries
- Model comparison mode
- Exportable training reports

---

This architecture is designed to be **modular**, **scalable**, and **easy to extend**.

