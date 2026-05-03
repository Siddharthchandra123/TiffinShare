import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FeedPage() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchMeals = () => {
    fetch("http://localhost:5000/api/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch meals", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto relative">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
          Available Meals 🍽️
        </h2>
        <button
          onClick={() => navigate("/postmeals")}
          className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg transition-all"
        >
          + Post Meal
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : meals.length === 0 ? (
        <div className="glass-card text-center py-16">
          <p className="text-xl text-muted-foreground">No meals available right now 😔</p>
          <p className="text-sm text-muted-foreground/80 mt-2">Check back later or post one yourself!</p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {meals.map((meal) => (
            <motion.div
              key={meal._id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group flex flex-col h-full !p-0"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={meal.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800"}
                  alt={meal.dish}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-xl font-bold text-white leading-tight max-w-[70%]">{meal.dish}</h3>
                  <div className="bg-primary/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm whitespace-nowrap">
                    ₹{meal.priceMin}{meal.priceMin !== meal.priceMax ? ` - ${meal.priceMax}` : ''}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden border border-border">
                    {meal.userId?.avatar ? (
                      <img src={meal.userId.avatar} alt="chef" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm">👨‍🍳</div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-foreground line-clamp-1">{meal.userId?.name || "Anonymous Chef"}</p>
                    <div className="flex items-center text-xs text-yellow-400">
                      <span>★</span>
                      <span className="ml-1 text-muted-foreground">
                        {meal.userId?.ratingAverage ? meal.userId.ratingAverage.toFixed(1) : "New"} 
                        {meal.userId?.ratingCount ? ` (${meal.userId.ratingCount})` : ""}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2">⏰</span> {meal.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2">📍</span> {meal.location}
                  </div>
                </div>

                <button
                  onClick={async () => {
                    const token = localStorage.getItem("token");
                    if (!token) {
                      navigate("/login");
                      return;
                    }
                    try {
                      const res = await fetch(`http://localhost:5000/api/meals/${meal._id}/claim`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: token,
                        }
                      });
                      const data = await res.json();
                      if (!res.ok) {
                        alert(data.message || "Failed to claim meal");
                        return;
                      }
                      alert("🎉 " + data.message);
                      fetchMeals();
                    } catch (err) {
                      console.error(err);
                      alert("Server error");
                    }
                  }}
                  className="w-full mt-2 bg-secondary hover:bg-primary border border-border hover:border-primary text-foreground hover:text-primary-foreground font-medium py-2.5 rounded-lg transition-all shadow-sm"
                >
                  Claim Meal
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}