import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LeaderboardPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Leaderboard error:", err);
        setIsLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const getRankStyle = (index) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)]";
      case 1:
        return "bg-gradient-to-r from-gray-300 to-gray-400 border-gray-200 shadow-[0_0_15px_rgba(209,213,219,0.4)]";
      case 2:
        return "bg-gradient-to-r from-amber-600 to-amber-700 border-amber-500 shadow-[0_0_15px_rgba(217,119,6,0.4)]";
      default:
        return "bg-secondary/5 border-border hover:bg-secondary/10";
    }
  };

  const getRankIcon = (index) => {
    switch (index) {
      case 0: return "👑";
      case 1: return "🥈";
      case 2: return "🥉";
      default: return `#${index + 1}`;
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto relative overflow-hidden">
      {/* Background Graphic Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary mb-4">
          Top Referrers
        </h1>
        <p className="text-lg text-muted-foreground">
          Invite friends to climb the ranks and earn exclusive rewards! 🚀
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {users.length === 0 ? (
            <div className="glass-card text-center py-12">
              <p className="text-muted-foreground">No one is on the leaderboard yet. Be the first! 🏆</p>
            </div>
          ) : (
            users.map((user, index) => (
              <motion.div
                key={user._id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${getRankStyle(index)}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl ${index < 3 ? 'text-white' : 'text-muted-foreground bg-secondary/20'}`}>
                    {getRankIcon(index)}
                  </div>
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border/20 bg-secondary">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl">👤</div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-bold text-lg ${index < 3 ? 'text-white' : 'text-foreground'}`}>
                      {user.name || "Anonymous"}
                    </h3>
                    <div className="flex items-center text-xs text-yellow-300">
                      <span>★</span>
                      <span className="ml-1 opacity-90">
                        {user.ratingAverage ? user.ratingAverage.toFixed(1) : "New"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className={`text-2xl font-black ${index < 3 ? 'text-white drop-shadow-md' : 'text-primary'}`}>
                    {user.points || 0}
                  </span>
                  <span className={`text-xs uppercase tracking-wider font-semibold ${index < 3 ? 'text-white/80' : 'text-muted-foreground'}`}>
                    Points
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      )}
    </div>
  );
}
