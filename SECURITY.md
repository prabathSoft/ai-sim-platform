# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the AI Simulation Platform, please **do not** open a public GitHub issue.

Instead, please report it responsibly by:

1. **Email**: Send details to [your-email@example.com]
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

We will:
- Acknowledge receipt within 48 hours
- Investigate and assess the severity
- Keep you informed of progress
- Credit you in the security advisory (if desired)

## Supported Versions

| Version | Status |
|---------|--------|
| 1.0.x   | ✅ Supported |
| < 1.0   | ❌ Not Supported |

## Security Best Practices

When using this platform:
- Keep dependencies updated
- Use environment variables for sensitive data (API keys, secrets)
- Enable HTTPS in production
- Validate user inputs
- Run behind a firewall in production

## Dependencies

We regularly monitor and update dependencies. Check `requirements.txt` (backend) and `package.json` (frontend) for the latest versions.
