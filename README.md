# ?? Full-Stack Authentication System (Production Deployment)

This is a complete, production-ready full-stack authentication system. It features a modern Angular frontend, a robust Node.js/Express backend, and a cloud-hosted MySQL database.

## ?? Live Demo
- **Frontend (Vercel):** [https://garcia-full-stack-authentication-system.vercel.app](https://garcia-full-stack-authentication-system.vercel.app)
- **Backend API (Render):** [https://full-stack-authentication-system-u3yx.onrender.com](https://full-stack-authentication-system-u3yx.onrender.com)
- **API Documentation:** [Swagger UI](https://full-stack-authentication-system-u3yx.onrender.com/api-docs)

## ??? Tech Stack
*   **Frontend:** Angular 18+, Bootstrap 5, RxJS.
*   **Backend:** Node.js, Express.js, Sequelize ORM.
*   **Database:** MySQL (Hosted on **Aiven Cloud** — Free Forever Tier).
*   **Email Service:** Brevo (formerly Sendinblue) REST API.
*   **Security:** JWT (JSON Web Tokens) with Refresh Token rotation, HTTP-only Cookies, and Argon2/Bcrypt hashing.

## ? Features
- [x] **User Registration & Email Verification:** Automated verification emails via Brevo.
- [x] **Secure Login:** JWT-based authentication with auto-refresh mechanism.
- [x] **Role-Based Access Control:** Distinct views and permissions for User and Admin.
- [x] **Password Recovery:** Forgot/Reset password flow with secure token expiration.
- [x] **User Management:** Full CRUD operations for admins to manage accounts.
- [x] **Production Hardened:** CORS protection, environment variable management, and SSL-encrypted database connections.

## ?? System Architecture
- **Vercel:** Hosts the Angular SPA with path-based routing rewrites.
- **Render:** Hosts the Node.js backend with automated continuous deployment from GitHub.
- **Aiven:** Provides a highly available MySQL instance with SSL enforcement.

## ??? Local Setup
1. Clone the repository.
2. Install dependencies: npm install.
3. Configure your .env file with backend credentials.
4. Start the server: npm start.

---
*Developed for the Final Project in Integrated Programming.*
