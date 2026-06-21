import random
import math

def generate_synthetic(options):
    n = options.get("count", 300)
    dataset_type = options.get("type", "blobs")

    points = []

    if dataset_type == "blobs":
        for _ in range(n):
            label = random.randint(0, 1)
            cx = 0.3 if label == 0 else 0.7
            cy = 0.3 if label == 0 else 0.7
            x = random.gauss(cx, 0.07)
            y = random.gauss(cy, 0.07)
            points.append({"x": x, "y": y, "label": label})

    elif dataset_type == "circle":
        for _ in range(n):
            angle = random.random() * 2 * math.pi
            radius = random.random()
            label = 1 if radius > 0.5 else 0
            x = 0.5 + radius * math.cos(angle)
            y = 0.5 + radius * math.sin(angle)
            points.append({"x": x, "y": y, "label": label})

    return points
