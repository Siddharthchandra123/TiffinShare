import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Utensils, Users, Wallet, Clock, ArrowRight, Leaf, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function IntroPage() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header (Standalone for Landing Page) */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <span className="text-lg font-bold text-primary-foreground">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TiffinShare</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition mr-2"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {isLoggedIn ? (
              <Link to="/home">
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                  Go to Feed
                </button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 rounded-lg hover:bg-secondary text-foreground font-medium transition">
                    Sign in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-4">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div 
              variants={fadeIn}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm"
            >
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground font-medium">
                Fresh, homemade meals from your campus
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Share Homemade Food,
              <span className="text-primary block sm:inline"> Build Community</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
            >
              TiffinShare connects day scholars with extra homemade food to
              hostellers who want affordable, delicious meals. Save money, reduce
              waste, and taste home.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/register">
                <button className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all transform hover:scale-105">
                  Start Sharing
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link to="/home">
                <button className="px-8 py-3 border border-border bg-card text-foreground rounded-xl font-bold text-lg hover:bg-secondary transition-all transform hover:scale-105">
                  Browse Meals
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Why TiffinShare?
            </h2>
            <p className="mt-4 text-muted-foreground">
              A simple way to share food, save money, and connect with your campus
              community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Utensils, title: "Homemade Goodness", desc: "Enjoy authentic homemade meals prepared with love, just like mom makes.", color: "primary" },
              { icon: Wallet, title: "Affordable Prices", desc: "Pay less than canteen prices for freshly prepared, nutritious meals.", color: "accent" },
              { icon: Users, title: "Campus Community", desc: "Connect with fellow students and build meaningful relationships over food.", color: "primary" },
              { icon: Clock, title: "Quick & Easy", desc: "Post or book meals in seconds. Pick up at your convenience between classes.", color: "accent" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}/10`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Create Account", desc: "Sign up with your college email and set up your profile in minutes." },
              { step: "2", title: "Post or Browse", desc: "Share your extra food or discover delicious meals from day scholars." },
              { step: "3", title: "Pick Up & Enjoy", desc: "Coordinate pickup times and enjoy homemade goodness on campus." }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/register">
              <button className="flex items-center gap-2 mx-auto px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105">
                Join TiffinShare Today
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-semibold text-foreground">TiffinShare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Made with love for the campus community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}