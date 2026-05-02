import React from "react";
import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1
            onClick={() => navigate("/")}
            className="text-xl font-bold text-orange-400 cursor-pointer"
          >
            TiffinShare 🍱
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/home")}
              className="text-gray-300 hover:text-white transition"
            >
              Explore
            </button>

            <button
              onClick={() => navigate("/home")}
              className="text-gray-300 hover:text-white transition"
            >
              Share
            </button>

            <button 
            onClick={() => navigate("/login")}
            className="bg-orange-500 px-4 py-2 rounded-lg hover:scale-105 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[85vh] px-6 text-center">

        {/* Floating Emojis */}
        <span className="emoji e1">🍛</span>
        <span className="emoji e2">🥘</span>
        <span className="emoji e3">🍱</span>
        <span className="emoji e4">🍜</span>

        {/* Content */}
        <div className="flex flex-col items-center justify-center max-w-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Tired of mess food? 😩
            <br />
            <span className="text-orange-400">Grab ghar ka khana 🍛</span>
          </h2>

          <p className="text-lg text-gray-400 mb-8">
            Students around you are sharing fresh homemade meals.
            Find something tasty, claim it, and enjoy 😋
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6">
            <button
              onClick={() => navigate("/home")}
              className="floating-btn bg-orange-500 px-6 py-3 rounded-xl text-lg shadow-xl shadow-orange-500/20"
            >
              Explore Meals 🍽️
            </button>

            <button
              onClick={() => navigate("/home")}
              className="floating-btn border border-orange-400 text-orange-400 px-6 py-3 rounded-xl text-lg shadow-xl shadow-orange-500/10"
            >
              Share Your Tiffin 📦
            </button>
          </div>

        </div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-28 h-28 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>

      </section>

      {/* ===== PROBLEM + SOLUTION ===== */}
      <section className="px-6 py-20 max-w-6xl mx-auto">

        <h3 className="text-3xl font-bold text-center mb-12">
          Why TiffinShare? 🤔
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="glass-card text-left">
            <h4 className="text-xl font-semibold mb-3 text-red-400">
              😩 The Problem
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>• Mess food gets repetitive</li>
              <li>• Limited canteen options</li>
              <li>• Homemade food gets wasted</li>
              <li>• No easy sharing system</li>
            </ul>
          </div>

          <div className="glass-card text-left">
            <h4 className="text-xl font-semibold mb-3 text-green-400">
              🚀 Our Solution
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>• Discover nearby meals</li>
              <li>• Claim instantly ⚡</li>
              <li>• Flexible pricing</li>
              <li>• Reduce food waste ♻️</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="px-6 py-20 bg-white/5 border-y border-gray-800">

        <h3 className="text-3xl font-bold text-center mb-12">
          What You Can Do 🔥
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="glass-card hover:scale-105 transition">
            🍱
            <h4 className="mt-3 font-semibold">Share Meal</h4>
            <p className="text-gray-400 text-sm mt-2">
              Post your extra food in seconds
            </p>
          </div>

          <div className="glass-card hover:scale-105 transition">
            ⚡
            <h4 className="mt-3 font-semibold">Quick Claim</h4>
            <p className="text-gray-400 text-sm mt-2">
              Grab meals instantly before they’re gone
            </p>
          </div>

          <div className="glass-card hover:scale-105 transition">
            🤝
            <h4 className="mt-3 font-semibold">Community</h4>
            <p className="text-gray-400 text-sm mt-2">
              Connect through food sharing
            </p>
          </div>

        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6 py-20 max-w-6xl mx-auto">

        <h3 className="text-3xl font-bold text-center mb-12">
          How It Works ⚙️
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="glass-card">
            <div className="text-2xl">1️⃣</div>
            <h4 className="mt-3 font-semibold">Post</h4>
            <p className="text-gray-400 text-sm mt-2">
              Add your meal
            </p>
          </div>

          <div className="glass-card">
            <div className="text-2xl">2️⃣</div>
            <h4 className="mt-3 font-semibold">Discover</h4>
            <p className="text-gray-400 text-sm mt-2">
              Browse nearby food
            </p>
          </div>

          <div className="glass-card">
            <div className="text-2xl">3️⃣</div>
            <h4 className="mt-3 font-semibold">Claim</h4>
            <p className="text-gray-400 text-sm mt-2">
              Pick & enjoy
            </p>
          </div>

        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .floating-btn {
          animation: float 3s ease-in-out infinite;
          transition: transform 0.2s ease;
        }

        .floating-btn:hover {
          transform: scale(1.08);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .emoji {
          position: absolute;
          font-size: 28px;
          animation: float 4s ease-in-out infinite;
          opacity: 0.8;
        }

        .e1 { top: 20%; left: 10%; }
        .e2 { top: 30%; right: 15%; }
        .e3 { bottom: 20%; left: 20%; }
        .e4 { bottom: 25%; right: 10%; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}