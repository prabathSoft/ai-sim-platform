from fastapi import APIRouter
from app.services.algorithm_catalog import get_algorithm_list

router = APIRouter()

@router.get("")
def list_algorithms():
    return {"algorithms": get_algorithm_list()}
