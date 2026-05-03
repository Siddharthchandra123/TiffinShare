import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    dish: "",
    priceMin: "",
    priceMax: "",
    time: "",
    location: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Login required");
      return;
    }

    if (!form.dish || !form.priceMin || !form.priceMax) {
      alert("Please fill required fields (Dish, Prices)");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          ...form,
          priceMin: Number(form.priceMin),
          priceMax: Number(form.priceMax),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        setIsLoading(false);
        return;
      }

      navigate("/home");

    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>

        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
          Post a Meal 🍱
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-muted-foreground mb-2">Dish Name *</label>
            <input 
              placeholder="e.g. Rajma Chawal" 
              className="w-full px-4 py-3 rounded-lg glass-input"
              onChange={(e) => setForm({ ...form, dish: e.target.value })} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Min Price (₹) *</label>
            <input 
              type="number"
              placeholder="50" 
              className="w-full px-4 py-3 rounded-lg glass-input"
              onChange={(e) => setForm({ ...form, priceMin: e.target.value })} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Max Price (₹) *</label>
            <input 
              type="number"
              placeholder="100" 
              className="w-full px-4 py-3 rounded-lg glass-input"
              onChange={(e) => setForm({ ...form, priceMax: e.target.value })} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Time Available</label>
            <input 
              placeholder="1:00 PM - 3:00 PM" 
              className="w-full px-4 py-3 rounded-lg glass-input"
              onChange={(e) => setForm({ ...form, time: e.target.value })} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Location</label>
            <input 
              placeholder="Hostel A, Room 101" 
              className="w-full px-4 py-3 rounded-lg glass-input"
              onChange={(e) => setForm({ ...form, location: e.target.value })} 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-muted-foreground mb-2">Image URL</label>
            <input 
              placeholder="https://..." 
              className="w-full px-4 py-3 rounded-lg glass-input"
              onChange={(e) => setForm({ ...form, image: e.target.value })} 
            />
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit} 
          disabled={isLoading}
          className="w-full mt-8 bg-primary hover:opacity-90 text-primary-foreground font-semibold py-4 rounded-lg transition-all shadow-lg shadow-primary/20"
        >
          {isLoading ? "Posting..." : "Share Meal 🚀"}
        </motion.button>
      </motion.div>
    </div>
  );
}