from fastapi import APIRouter
from app.services.trainer import start_training, pause_training, resume_training, step_training

router = APIRouter()

@router.post("/start")
def start(payload: dict):
    run_id = start_training(payload)
    return {"run_id": run_id}

@router.post("/pause")
def pause(payload: dict):
    pause_training(payload["run_id"])
    return {"status": "paused"}

@router.post("/resume")
def resume(payload: dict):
    resume_training(payload["run_id"])
    return {"status": "resumed"}

@router.post("/step")
def step(payload: dict):
    step_training(payload["run_id"])
    return {"status": "stepped"}
