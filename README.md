# TIF Backend API Assignment

This is the backend API built for the TIF Assignment. It is deployed and fully functional using Express.js, MongoDB, JWT authentication, and Snowflake ID generation.

## 🚀 Deployed URL

**Base URL:**  
👉 [https://tif-assignment-7v4g.onrender.com](https://tif-assignment-7v4g.onrender.com)

---

## 🔍 Health Check

To verify the backend is running, visit:  
[https://tif-assignment-7v4g.onrender.com/](https://tif-assignment-7v4g.onrender.com/)

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Token (JWT)
- bcrypt.js (password hashing)
- Snowflake ID Generator
- Render for deployment

---

## 📚 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | `/v1/auth/signup`   | Register a new user    |
| POST   | `/v1/auth/signin`   | Login and get a token  |
| GET    | `/v1/auth/me`       | Get current user info  |

> After signing in, use the token in headers for protected routes:  
> `Authorization: Bearer <your_token>`

---

### 🏘️ Community Routes

| Method | Endpoint                          | Description                           |
|--------|-----------------------------------|---------------------------------------|
| POST   | `/v1/community`                   | Create a new community *(auth req)*   |
| GET    | `/v1/community`                   | List all communities                  |
| GET    | `/v1/community/:id/members`       | Get members of a specific community   |
| GET    | `/v1/community/me/owner`          | Get communities you own *(auth req)*  |
| GET    | `/v1/community/me/member`         | Get communities you are a member of *(auth req)* |

---

### 👥 Member Routes

| Method | Endpoint      | Description                            |
|--------|---------------|----------------------------------------|
| POST   | `/v1/member`  | Add a member to a community *(owner only, auth req)* |

---

### 🏷️ Role Routes

| Method | Endpoint    | Description                |
|--------|-------------|----------------------------|
| GET    | `/v1/role`  | List all available roles   |



