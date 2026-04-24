## 📘 README Explanation

### 🔗 Frontend-Backend Integration

The React frontend is connected to the Spring Boot backend APIs using Axios. The frontend sends HTTP requests (POST and GET) to the backend server running on `http://localhost:8081`.

### 🔐 JWT Authentication

When the user logs in, the backend verifies the credentials and generates a JWT (JSON Web Token). This token is sent back to the frontend.

### 💾 Session Storage

The JWT token is stored in the browser's `sessionStorage` to maintain the user session temporarily. This ensures that the user remains logged in only for the active session.

### 🔒 Protected Routes

Certain routes like the Dashboard are protected. The frontend checks if a JWT token exists in `sessionStorage`. If not, the user is redirected to the login page.

For accessing protected APIs, the token is sent in the request header:

```
Authorization: Bearer <token>
```

### 🚪 Logout Functionality

When the user logs out, the JWT token is removed from `sessionStorage`, and the user is redirected back to the login page. This effectively ends the session.

### 🎯 Summary

* React frontend communicates with backend APIs
* JWT is used for authentication
* Token stored in sessionStorage for session management
* Protected routes require valid token
* Logout clears session and restricts access
