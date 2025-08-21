"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", desc: "", price: "", image: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {data: session, status} = useSession();

  useEffect(() => {
    if(status === 'unauthenticated'){
      router.push('/login')
    }
  }, [status, router])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Product added successfully!");
        setForm({ name: "", desc: "", price: "", image: "" });
        router.push("/products");
      } else {
        alert("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-neutral-800 rounded-xl mt-10 shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">All Product</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <textarea name="desc" value={form.desc} onChange={handleChange} placeholder="Product Description" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <input type="text" name="price" value={form.price} onChange={handleChange} placeholder="Product Price ($99)" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <input type="url" name="image" value={form.image} onChange={handleChange} placeholder="Image URL (/products/example.png)" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
