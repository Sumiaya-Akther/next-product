# 🛍️ Next Product App

A simple product management application built with **Next.js 15 (App Router)** and **NextAuth.js**.  

---

## 📌 Features

### 1. Landing Page (`/`)
- Contains **7 sections**: Navbar, Hero, Product Highlights, Why Choose NextShop, Customers Say, Start Shopping Today, Footer  
- Navigation to **Login** and **Products** page  
- Publicly accessible (no authentication required)  

### 2. Login with NextAuth (`/login`)
- Authentication with **Google login** (via NextAuth.js)  
- After successful login → Redirects to `/products`  

### 3. Product List Page (`/products`)
- Publicly accessible  
- Fetch and display list of products from backend  
- Each product shows: **Name, Description, Price, and Details button**  

### 4. Product Details Page (`/products/[id]`)
- Publicly accessible  
- Shows full details of a single product  

### 5. Protected Page: Add Product (`/dashboard/add-product`)
- Accessible **only when logged in**  
- Includes a form to add a new product  
- Stores product data in the database  
- Redirects **unauthenticated users** to `/login`  

---

## 🎯 Optional Enhancements
- Loading spinner during form submission  
- Toast message on successful product addition  
- Theme toggle (Light/Dark mode)  

---

## 🛠️ Technologies Used
- **Next.js 15** (App Router)  
- **NextAuth.js** (Authentication)  
- **MongoDB** (Database)  
- **Tailwind CSS** (Styling)  

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/next-product.git
cd next-product
