# 🧠 AI Simulation Platform

A real-time interactive system to **visualize, simulate, and learn AI algorithms** — from classical models to modern neural networks.  
Built with **React + Zustand (frontend)** and **FastAPI (backend)**, this platform demonstrates how machine learning works step-by-step.

---

## 🚀 Features

- 🎨 **Visual Learning** — Watch decision boundaries and feature maps evolve in real time  
- ⚙️ **Algorithm Selection** — Choose from Logistic Regression, SVM, KNN, MLP, CNN  
- 🧩 **Hyperparameter Configuration** — Adjust learning rate, epochs, batch size, activation  
- 📊 **Dataset Tools** — Generate synthetic datasets or upload CSV files  
- 🔁 **Simulation Engine** — Run training loops and view metrics dynamically  
- 🌐 **WebSocket Streaming** — Real-time updates to the frontend canvas  
- 📈 **Metrics Dashboard** — Track loss and accuracy visually  

---

## 🏗️ Project Structure

```text
AI-Simulation-Platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── services/
│   │   ├── websocket/
│   │   └── utils/
│   └── requirements.txt
│
└── docs/
    ├── architecture/
    ├── api/
    ├── ui-ux/
    └── roadmap/
