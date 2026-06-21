# AI Simulation Platform
A real‑time interactive training and visualization system.

## 📂 Project Structure
AI-Simulation-Platform/
│
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── algorithm/
│   │   │   │   └── AlgorithmSelector.tsx
│   │   │   ├── config/
│   │   │   │   └── HyperparameterConfig.tsx
│   │   │   ├── data/
│   │   │   │   └── DatasetGenerator.tsx
│   │   │   ├── simulation/
│   │   │   │   ├── LiveCanvas.tsx
│   │   │   │   ├── DecisionBoundaryCanvas.tsx
│   │   │   │   ├── FeatureMapViewer.tsx
│   │   │   │   └── DatasetPreviewCanvas.tsx
│   │   │   ├── charts/
│   │   │   │   └── MetricsChart.tsx
│   │   │   └── ui/
│   │   │       ├── Button.tsx
│   │   │       ├── Slider.tsx
│   │   │       └── Dropdown.tsx
│   │   │
│   │   ├── stores/
│   │   │   ├── algorithmStore.ts
│   │   │   ├── configStore.ts
│   │   │   ├── datasetStore.ts
│   │   │   └── simulationStore.ts
│   │   │
│   │   ├── services/
│   │   │   ├── api/
│   │   │   │   ├── http.ts
│   │   │   │   ├── algorithms.ts
│   │   │   │   ├── dataset.ts
│   │   │   │   ├── model.ts
│   │   │   │   └── simulation.ts
│   │   │   └── websocket/
│   │   │       └── simulationSocket.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── canvasUtils.ts
│   │   │   ├── colorUtils.ts
│   │   │   └── mathUtils.ts
│   │   │
│   │   └── styles/
│   │       ├── global.css
│   │       ├── layout.css
│   │       └── theme.css
│   │
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   │
│   │   ├── api/
│   │   │   ├── algorithms.py
│   │   │   ├── dataset.py
│   │   │   ├── model.py
│   │   │   └── simulation.py
│   │   │
│   │   ├── services/
│   │   │   ├── algorithm_catalog.py
│   │   │   ├── synthetic_generator.py
│   │   │   ├── model_builder.py
│   │   │   └── trainer.py
│   │   │
│   │   ├── websocket/
│   │   │   └── simulation_stream.py
│   │   │
│   │   ├── utils/
│   │   │   └── id_generator.py
│   │   │
│   │   └── models/
│   │       ├── algorithm.py
│   │       ├── dataset.py
│   │       ├── model_config.py
│   │       ├── simulation.py
│   │       └── metrics.py
│   │
│   └── requirements.txt
│
└── docs/
    ├── architecture/
    │   └── system-overview.md
    ├── api/
    │   └── rest-api.md
    ├── ui-ux/
    │   └── user-flow.md
    └── roadmap/
        └── mvp.md
