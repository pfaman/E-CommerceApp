# 📦 E-CommerceApp – REST API

A full-featured **E-Commerce Backend API** built using:

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Bcrypt for Password Hashing

---

## 🚀 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes using Middleware

### 🛍 Product Management

* Add Product
* Get All Products
* Get Product By ID
* Update Product
* Delete Product

### 🛒 Cart Management

* Add to Cart
* Get User Cart
* Remove Product from Cart
* Decrease Product Quantity
* Clear Cart

---

## 🛠 Tech Stack

```
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
```

---

## 📂 Project Structure

```
E-CommerceApp/
│
├── Models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── Controllers/
│   ├── UserController.js
│   ├── ProductController.js
│   └── CartController.js
│
├── MiddleWares/
│   └── Auth.js
│
├── Routes/
│
├── .env
├── server.js
└── package.json
```

---

## 🔐 Environment Variables (.env)

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 📦 Installation

```bash
git clone https://github.com/pfaman/E-CommerceApp.git
cd E-CommerceApp
npm install
```

---

## ▶️ Run the Server

```bash
npm run dev
```

OR

```bash
node server.js
```

---

## 🔑 Authentication

All protected routes require token in header:

```
Auth: your_jwt_token
```

---

## 📌 API Endpoints

### 🧑 User Routes

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| POST   | /api/register | Register User |
| POST   | /api/login    | Login User    |

---

### 🛍 Product Routes

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/product     |
| GET    | /api/product     |
| GET    | /api/product/:id |
| PUT    | /api/product/:id |
| DELETE | /api/product/:id |

---

### 🛒 Cart Routes

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | /api/cart            |
| GET    | /api/cart            |
| DELETE | /api/cart/:productId |
| PUT    | /api/cart/decrease   |
| DELETE | /api/cart/clear      |

---

## 🔒 Authentication Middleware

JWT token verification is handled in:

```
MiddleWares/Auth.js
```

---

## 🧠 Future Improvements

* Payment Integration
* Order Management
* Admin Panel
* Role Based Authorization
* Refresh Token Implementation
* Product Image Upload (Cloudinary)
* Swagger API Documentation
* Postman Collection
* Proper Error Handling Middleware
* MVC Architecture Refinement
* Refresh Token Implementation

