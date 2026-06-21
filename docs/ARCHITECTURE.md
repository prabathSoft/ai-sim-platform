# Architecture Overview

## System Design

The AI Simulation Platform follows a **client-server architecture** with real-time WebSocket communication.

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Components │ State (Zustand) │ Services (API) │   │
│  └─────────────────────────────────────────────────┘   │
│                         ▲ HTTP + WebSocket              │
└────────────┬────────────────────────────────────────────┘
             │
      ┌──────▼──────┐
      │   Gateway   │ (Nginx/LB)
      └──────┬──────┘
             │
┌────────────▼────────────────────────────────────────────┐
│             Backend (FastAPI + Python)                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │  API Routes │ Services │ ML Models │ WebSocket │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Component Details

### Frontend Architecture

**Technology Stack:**
- React 18+ for UI rendering
- TypeScript for type safety
- Zustand for state management
- Axios for HTTP requests
- WebSocket for real-time updates

**Directory Structure:**
```
frontend/
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page-level components
│   ├── stores/           # Zustand store definitions
│   ├── services/         # API clients & WebSocket handlers
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript interfaces
│   ├── utils/            # Helper functions
│   ├── styles/           # CSS/SCSS files
│   └── App.tsx           # Root component
├── public/               # Static assets
└── package.json
```

### Backend Architecture

**Technology Stack:**
- FastAPI for REST API
- Python 3.9+ runtime
- scikit-learn for ML models
- asyncio for async operations
- WebSockets for real-time communication

**Directory Structure:**
```
backend/
├── app/
│   ├── main.py           # Application entry point
│   ├── api/              # API route handlers
│   │   ├── algorithms.py
│   │   ├── datasets.py
│   │   └── simulations.py
│   ├── services/         # Business logic
│   │   ├── ml_service.py
│   │   ├── dataset_service.py
│   │   └── simulation_service.py
│   ├── models/           # ML model implementations
│   │   ├── base_model.py
│   │   ├── classifiers.py
│   │   └── regressors.py
│   ├── websocket/        # WebSocket handlers
│   ├── schemas/          # Pydantic models
│   ├── config.py         # Configuration
│   └── utils/            # Utility functions
├── tests/                # Unit tests
├── requirements.txt      # Python dependencies
└── main.py              # WSGI entry point
```

## Data Flow

### 1. Algorithm Selection & Configuration
```
User selects algorithm → Frontend sends config → Backend initializes model
```

### 2. Dataset Generation
```
Frontend requests dataset → Backend generates/validates → Returns dataset metadata
```

### 3. Training Simulation
```
User starts training → WebSocket connection established → 
Backend streams: metrics, decision boundaries, feature maps → 
Frontend updates visualizations in real-time
```

### 4. Results Visualization
```
Training complete → Backend sends final results → 
Frontend renders charts, statistics, and model analysis
```

## API Endpoints

### Core Endpoints
- `GET /api/health` - Health check
- `GET /api/algorithms` - List available algorithms
- `POST /api/datasets/generate` - Generate synthetic dataset
- `POST /api/datasets/upload` - Upload CSV dataset
- `POST /api/simulations/start` - Start training simulation
- `GET /api/simulations/{id}` - Get simulation results

### WebSocket
- `WS /ws/simulation/{id}` - Real-time simulation updates

## Deployment Architecture

### Development
```
Frontend: localhost:3000
Backend: localhost:8000
```

### Production
```
Frontend → Vercel / GitHub Pages / S3 + CloudFront
Backend → Docker → AWS ECS / Heroku / DigitalOcean
Database: PostgreSQL (optional, for persistence)
```

## Performance Considerations

1. **Frontend Optimization**
   - Code splitting and lazy loading
   - Memoization of components
   - Efficient WebSocket message handling

2. **Backend Optimization**
   - Async request handling
   - Batch processing for large datasets
   - Caching for frequently used datasets
   - Vectorized NumPy operations for ML computations

3. **Real-time Updates**
   - Delta updates instead of full state
   - Compression for large payloads
   - Connection pooling for WebSocket

## Security Architecture

- CORS configuration for cross-origin requests
- Environment variable management for secrets
- Input validation on both client and server
- HTTPS/TLS in production
- Rate limiting on API endpoints
- CSRF protection for state-changing operations

---

For more information, see [DEPLOYMENT.md](./DEPLOYMENT.md) and [GETTING_STARTED.md](./GETTING_STARTED.md).
