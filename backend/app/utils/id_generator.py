import uuid

def generate_id(prefix):
    return f"{prefix}_{uuid.uuid4().hex[:8]}"
