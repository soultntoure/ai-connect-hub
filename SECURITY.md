# Security Policy

## Reporting a Vulnerability

We take the security of AI Connect Hub seriously. If you discover a security vulnerability, we encourage you to report it to us as quickly as possible.

Please report vulnerabilities by emailing [security@aiconnecthub.com](mailto:security@aiconnecthub.com). Encrypt your email using our PGP key (available upon request).

We kindly ask you not to disclose the vulnerability publicly until we have had a chance to address it.

## Our Security Practices

*   **Input Validation:** All user inputs are rigorously validated on both the client and server sides to prevent common vulnerabilities like SQL injection, XSS, and command injection.
*   **Authentication & Authorization:** We use JWT for secure, stateless authentication. All API endpoints are protected, and authorization checks ensure users can only access data and perform actions they are permitted to.
*   **Data Protection:** Sensitive data (like passwords) is securely hashed using bcrypt before storage. Data in transit is encrypted using HTTPS/TLS.
*   **Dependency Management:** We regularly update our dependencies to patch known vulnerabilities and utilize tools to monitor for security advisories.
*   **Secure Defaults:** Our frameworks (Next.js, NestJS) and database (PostgreSQL) are configured with security best practices in mind.
*   **Container Security:** Docker images are built with minimal privileges and contain only necessary components to reduce attack surface.

## General Security Advice for Users

*   Use strong, unique passwords for your AI Connect Hub account.
*   Enable multi-factor authentication (if/when available).
*   Be cautious of phishing attempts.
*   Keep your local development environment secure.

Thank you for helping us keep AI Connect Hub secure for everyone.