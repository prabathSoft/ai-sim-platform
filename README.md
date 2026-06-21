# 🧠 AI Simulation Platform

A real-time interactive system to **visualize, simulate, and learn AI algorithms** — from classical models to modern neural networks.  
Built with **React + Zustand (frontend)** and **FastAPI (backend)**, this platform demonstrates how machine learning works step-by-step.

---

## 🚀 Features

- 🎨 **Visual Learning** — Watch decision boundaries and feature maps evolve in real time  
- ⚙️ **Algorithm Selection** — Choose from Logistic Regression, SVM, KNN, MLP, CNN  
- 🧩 **Hyperparameter Configuration** — Adjust learning rate, epochs, batch size, activation  
- 📊 **Dataset Tools** — Generate synthetic datasets or upload CSV files  
- 🔁 **Simulation Engine** — Run training loops and view metrics dynamically  
- 🌐 **WebSocket Streaming** — Real-time updates to the frontend canvas  
- 📈 **Metrics Dashboard** — Track loss and accuracy visually  

---

## 📋 Quick Links

- **[🚀 Getting Started Guide](./docs/GETTING_STARTED.md)** - Setup instructions for local development
- **🏗️ [Architecture Documentation](./docs/ARCHITECTURE.md)** - System design and technical details
- **🚢 [Deployment Guide](./docs/DEPLOYMENT.md)** - Multiple deployment options (Heroku, Docker, Manual)
- **🤝 [Contributing Guidelines](./CONTRIBUTING.md)** - How to contribute to the project
- **🔒 [Security Policy](./SECURITY.md)** - Report vulnerabilities responsibly
- **📝 [Changelog](./CHANGELOG.md)** - Project version history and updates

---

## 🏗️ Project Structure

```text
AI-Simulation-Platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── stores/            # Zustand state management
│   │   ├── services/          # API and WebSocket clients
│   │   ├── types/             # TypeScript interfaces
│   │   └── styles/            # CSS/SCSS files
│   └── package.json           # Frontend dependencies
│
├── backend/
│   ├── app/
│   │   ├── api/               # FastAPI route handlers
│   │   ├── services/          # Business logic layer
│   │   ├── models/            # ML model implementations
│   │   ├── websocket/         # WebSocket handlers
│   │   ├── schemas/           # Pydantic models
│   │   └── utils/             # Helper functions
│   └── requirements.txt        # Python dependencies
│
├── docs/
│   ├── GETTING_STARTED.md     # Setup guide
│   ├── ARCHITECTURE.md         # System architecture
│   └── DEPLOYMENT.md           # Deployment instructions
│
├── docker/                     # Docker configuration files
├── scripts/                    # Build and utility scripts
├── shared/                     # Shared utilities and types
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js 16+
- Python 3.9+
- Git

### Local Development Setup

**Clone the Repository:**
```bash
git clone https://github.com/prabathSoft/ai-sim-platform.git
cd ai-sim-platform
```

**Start Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

**Start Frontend (in a new terminal):**
```bash
cd frontend
npm install
npm start
```

Visit `http://localhost:3000` to access the platform.

---

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI library
- **TypeScript** - Type-safe JavaScript
- **Zustand** - State management
- **CSS/SCSS** - Styling
- **WebSocket** - Real-time communication

### Backend
- **FastAPI** - Modern Python web framework
- **Python 3.9+** - Runtime
- **scikit-learn** - ML algorithms
- **NumPy/Pandas** - Data processing
- **asyncio** - Async operations

### DevOps
- **Docker** - Containerization
- **GitHub Actions** - CI/CD automation
- **Nginx** - Reverse proxy

---

## 📖 Documentation

Comprehensive documentation is available in the `docs/` directory:

| Document | Purpose |
|----------|---------|
| [Getting Started](./docs/GETTING_STARTED.md) | Installation & local development setup |
| [Architecture](./docs/ARCHITECTURE.md) | System design, components & data flow |
| [Deployment](./docs/DEPLOYMENT.md) | Production deployment guide |
| [Contributing](./CONTRIBUTING.md) | How to contribute code changes |
| [Security](./SECURITY.md) | Security policy & vulnerability reporting |
| [Changelog](./CHANGELOG.md) | Version history & release notes |

---

## 🚀 Deployment

The platform can be deployed in multiple ways:

- **Heroku** - Easy cloud deployment
- **Docker** - Containerized deployment to AWS, DigitalOcean, Azure
- **Vercel** - Frontend-only deployment
- **Manual** - Traditional server setup

See [Deployment Guide](./docs/DEPLOYMENT.md) for detailed instructions.

---

## 🤝 Contributing

We welcome contributions from the community! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Development setup instructions
- Code style guidelines
- Testing procedures
- Pull request process
- Bug reporting guidelines

---

## 🔒 Security

Found a security vulnerability? Please report it responsibly by reading our [Security Policy](./SECURITY.md) instead of opening a public issue.

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](./LICENSE) file for details.

---

## 💡 Project Status

🚀 **Status**: Early Development (Pre-release)

Currently building the core platform. See [Changelog](./CHANGELOG.md) for current progress and [planned features](./CHANGELOG.md#unreleased).

---

## 📞 Support

- 📖 **Documentation**: Check the [docs/](./docs/) folder
- 🐛 **Bug Report**: Open an [issue](https://github.com/prabathSoft/ai-sim-platform/issues)
- 💬 **Discussions**: Use [GitHub Discussions](https://github.com/prabathSoft/ai-sim-platform/discussions)
- 🤝 **Contribute**: Read [Contributing Guidelines](./CONTRIBUTING.md)

---

## 🙏 Acknowledgments

Built with ❤️ by [prabathSoft](https://github.com/prabathSoft)

Special thanks to:
- React and FastAPI communities
- Open-source ML libraries (scikit-learn, NumPy, Pandas)
- All contributors and users

---

**Happy Learning! 🎓**
