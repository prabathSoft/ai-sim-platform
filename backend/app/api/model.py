from fastapi import APIRouter
from app.services.model_builder import initialize_model

router = APIRouter()

@router.post("/initialize")
def init_model(config: dict):
    model_id = initialize_model(config)
    return {"model_id": model_id}
