from app.utils.id_generator import generate_id

MODELS = {}

def initialize_model(config):
    model_id = generate_id("model")
    MODELS[model_id] = {
        "config": config,
        "weights": None
    }
    return model_id
