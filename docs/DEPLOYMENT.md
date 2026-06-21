# Deployment Guide

## 🚀 Deployment Options

### Option 1: Heroku Deployment

#### Prerequisites
- Heroku account (free tier available)
- Heroku CLI installed

#### Steps

1. **Login to Heroku**
```bash
heroku login
```

2. **Create Heroku app**
```bash
heroku create your-app-name
```

3. **Set environment variables**
```bash
heroku config:set DEBUG=False
heroku config:set SECRET_KEY=your-secret-key
```

4. **Deploy**
```bash
git push heroku main
```

### Option 2: Docker + AWS/DigitalOcean/Azure

#### Build Docker Image
```bash
docker build -f docker/Dockerfile -t ai-sim-platform:latest .
```

#### Push to Registry
```bash
# AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag ai-sim-platform:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-sim-platform:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-sim-platform:latest
```

#### Deploy to Container Service
```bash
# AWS ECS, DigitalOcean App Platform, or Azure Container Instances
# Follow provider-specific instructions
```

### Option 3: Vercel (Frontend Only)

#### Deploy Frontend
```bash
npm install -g vercel
cd frontend
vercel
```

### Option 4: Manual Server Deployment

#### On Your Server (Ubuntu/Debian)

1. **Install dependencies**
```bash
apt-get update
apt-get install python3.9 python3-pip nodejs npm nginx
```

2. **Clone and setup backend**
```bash
git clone https://github.com/prabathSoft/ai-sim-platform.git
cd ai-sim-platform/backend
pip install -r requirements.txt
pip install gunicorn
```

3. **Create systemd service for backend**
```bash
sudo nano /etc/systemd/system/ai-sim-backend.service
```

```ini
[Unit]
Description=AI Simulation Platform Backend
After=network.target

[Service]
User=www-data
WorkingDirectory=/path/to/ai-sim-platform/backend
ExecStart=/usr/bin/gunicorn app.main:app -w 4 -b 127.0.0.1:8000
Restart=always

[Install]
WantedBy=multi-user.target
```

4. **Setup frontend**
```bash
cd ../frontend
npm install
npm run build
```

5. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/ai-sim-platform
```

```nginx
upstream backend {
    server 127.0.0.1:8000;
}

server {
    listen 80;
    server_name your-domain.com;

    client_max_body_size 10M;

    location /api {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        root /path/to/ai-sim-platform/frontend/build;
        try_files $uri /index.html;
    }
}
```

6. **Enable and start services**
```bash
sudo systemctl enable ai-sim-backend
sudo systemctl start ai-sim-backend
sudo systemctl restart nginx
```

## 🔒 Security Checklist

- [ ] Set `DEBUG=False` in production
- [ ] Use strong `SECRET_KEY`
- [ ] Enable HTTPS/SSL certificate (Let's Encrypt)
- [ ] Set up environment variables securely
- [ ] Configure CORS properly
- [ ] Enable rate limiting
- [ ] Use strong database passwords
- [ ] Regular security updates
- [ ] Setup monitoring and logging
- [ ] Backup database regularly

## 📊 Monitoring

### Application Monitoring
- Use services like DataDog, New Relic, or Sentry
- Monitor error rates and performance metrics

### Log Management
- Centralize logs with ELK Stack, Splunk, or Papertrail
- Monitor backend and frontend logs separately

### Uptime Monitoring
- Use UptimeRobot or StatusPage.io
- Set up alerts for downtime

## 🔄 CI/CD Automation

See `.github/workflows/ci.yml` for automated testing and deployment workflows.

---

For more details, see the main [README.md](../README.md) or [GETTING_STARTED.md](./GETTING_STARTED.md).
