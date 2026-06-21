from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import algorithms, dataset, model, simulation
from app.websocket.simulation_stream import router as ws_router

app = FastAPI(title="AI Simulation Platform API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# REST API routes
app.include_router(algorithms.router, prefix="/api/v1/algorithms")
app.include_router(dataset.router, prefix="/api/v1/dataset")
app.include_router(model.router, prefix="/api/v1/model")
app.include_router(simulation.router, prefix="/api/v1/simulation")

# WebSocket route
app.include_router(ws_router)

@app.get("/health")
def health():
    return {"status": "ok"}
