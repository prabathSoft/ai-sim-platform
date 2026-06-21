from fastapi import APIRouter, UploadFile
from app.services.synthetic_generator import generate_synthetic

router = APIRouter()

@router.post("/generate")
def generate_dataset(options: dict):
    points = generate_synthetic(options)
    return {"points": points}

@router.post("/upload")
async def upload_dataset(file: UploadFile):
    content = (await file.read()).decode("utf-8")
    rows = content.splitlines()

    points = []
    for row in rows:
        x, y, label = row.split(",")
        points.append({
            "x": float(x),
            "y": float(y),
            "label": int(label)
        })

    return {"points": points}
