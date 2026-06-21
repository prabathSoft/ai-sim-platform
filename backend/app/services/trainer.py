import asyncio
from app.utils.id_generator import generate_id
from app.websocket.simulation_stream import push_update

RUNS = {}

def start_training(payload):
    run_id = generate_id("run")
    RUNS[run_id] = {"paused": False}

    asyncio.create_task(simulate_training(run_id))
    return run_id

def pause_training(run_id):
    RUNS[run_id]["paused"] = True

def resume_training(run_id):
    RUNS[run_id]["paused"] = False

def step_training(run_id):
    asyncio.create_task(simulate_step(run_id))

async def simulate_training(run_id):
    for epoch in range(1, 51):
        if RUNS[run_id]["paused"]:
            await asyncio.sleep(0.2)
            continue

        await simulate_step(run_id, epoch)

async def simulate_step(run_id, epoch=1):
    # Fake metrics
    loss = max(0.01, 1.0 - epoch * 0.02)
    accuracy = min(1.0, epoch * 0.02)

    # Fake decision boundary grid
    grid = [[(x + y) % 2 for x in range(100)] for y in range(100)]

    await push_update(run_id, {
        "type": "metrics",
        "epoch": epoch,
        "loss": loss,
        "accuracy": accuracy
    })

    await push_update(run_id, {
        "type": "boundary",
        "grid": grid
    })
