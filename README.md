# 🚀 NextShop – Next.js 15 (App Router) + NextAuth.js

A simple web application built with **Next.js 15 (App Router)** that demonstrates public and protected pages, authentication using **NextAuth.js**, and basic product management.  

---

## 📌 Features

### 1. Landing Page (`/`)
- Contains **7 sections**: Navbar, Hero, Product Highlights, Why Choose NextShop, Customers Say, Start Shopping Footer  
- Navigation to **Login** and **Products** page  
- Publicly accessible  

### 2. Login Page (`/login`)
- Implemented with **NextAuth.js**  
- Supports Google or Credentials login  
- Redirects to `/products` after successful login  

### 3. Product List Page (`/products`)
- Public page showing a list of products  
- Each product includes **name, description, price, and details button**  

### 4. Product Details Page (`/products/[id]`)
- Displays full product details  
- Publicly accessible  

### 5. Protected Page: Add Product (`/dashboard/add-product`)
- Accessible **only for authenticated users**  
- Contains a form to add a new product  
- Stores product in mock database / API  
- Redirects unauthenticated users to login  

---

## 🛠️ Tech Stack
- **Next.js 15 (App Router)**  
- **NextAuth.js** for authentication  
- **Tailwind CSS** (for styling)  
- **MongoDB / Mock Backend** (for storing products)  
<<<<<<< HEAD

---
=======

---



>>>>>>> 45a4ab14eabe4f24b8b58eb024adf4e2f7e19537
