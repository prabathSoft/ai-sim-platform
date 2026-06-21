from fastapi import APIRouter, WebSocket
import asyncio

router = APIRouter()

connections = {}

@router.websocket("/ws/simulation/{run_id}")
async def simulation_ws(websocket: WebSocket, run_id: str):
    await websocket.accept()
    connections[run_id] = websocket

    try:
        while True:
            await asyncio.sleep(1)
    except:
        connections.pop(run_id, None)

async def push_update(run_id, data):
    ws = connections.get(run_id)
    if ws:
        await ws.send_json(data)
