# Getting Started with AI Simulation Platform

## 📦 Prerequisites

Before you begin, ensure you have:
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **Python** 3.9+ ([Download](https://www.python.org/))
- **Docker** (optional, for containerized setup)
- **Git** for version control

## 🚀 Quick Start

### Option 1: Local Development Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/prabathSoft/ai-sim-platform.git
cd ai-sim-platform
```

#### 2. Setup Backend (FastAPI)
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the server
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at: `http://localhost:8000`

#### 3. Setup Frontend (React)
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will be available at: `http://localhost:3000`

### Option 2: Docker Setup

```bash
# Build and start all services
docker-compose up --build

# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

## 📚 Project Structure

```
ai-sim-platform/
├── frontend/              # React + TypeScript application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── stores/       # Zustand state management
│   │   ├── services/     # API clients & utilities
│   │   └── styles/       # CSS/styling
│   └── package.json
│
├── backend/              # FastAPI Python application
│   ├── app/
│   │   ├── api/          # API endpoints/routes
│   │   ├── services/     # Business logic
│   │   ├── models/       # ML models
│   │   ├── websocket/    # WebSocket handlers
│   │   └── utils/        # Utility functions
│   ├── requirements.txt
│   └── main.py
│
├── docker/               # Docker configurations
├── docs/                 # Documentation
└── shared/               # Shared utilities/types
```

## 🎯 Key Features

### Frontend Capabilities
- **Interactive Visualizations** - Watch ML algorithms in real-time
- **Parameter Tuning** - Adjust hyperparameters dynamically
- **Dataset Management** - Generate or upload datasets
- **Real-time Updates** - WebSocket streaming from backend

### Backend Capabilities
- **Algorithm Implementations** - ML algorithms with step-by-step execution
- **WebSocket API** - Real-time communication
- **Dataset Generation** - Synthetic dataset creation
- **Metrics Tracking** - Loss, accuracy, and performance metrics

## 🔧 Common Tasks

### Running Tests

**Backend:**
```bash
cd backend
pytest
```

**Frontend:**
```bash
cd frontend
npm test
```

### Building for Production

**Backend:**
```bash
cd backend
pip install gunicorn
gunicorn app.main:app -w 4 -b 0.0.0.0:8000
```

**Frontend:**
```bash
cd frontend
npm run build
# Build output in `build/` directory
```

### Environment Variables

Create `.env` files in backend and frontend directories:

**backend/.env**
```
DEBUG=False
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=your-secret-key-here
CORS_ORIGINS=http://localhost:3000
```

**frontend/.env**
```
REACT_APP_API_URL=http://localhost:8000
```

## 📖 API Documentation

When running the backend locally, visit:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 8000/3000 and kill it
lsof -i :8000  # macOS/Linux
netstat -ano | findstr :8000  # Windows
```

### Module Not Found (Python)
```bash
# Ensure virtual environment is activated and dependencies installed
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### Node Modules Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Python ML Libraries](https://scikit-learn.org/)

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.

## 📝 License

This project is licensed under the MIT License - see [LICENSE](../LICENSE) for details.

---

Need help? Open an issue or check the documentation in the `docs/` directory.
