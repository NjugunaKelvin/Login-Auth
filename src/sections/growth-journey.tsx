/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Code, Users, ClipboardList, ArrowRight, Rocket, TrendingUp, BarChart2, MessageSquare, Plus, Calendar, FileText, Share2 } from "lucide-react";

export default function GrowthJourney({ session }: { session: any }) {
  // Sample progress data
  const projectProgress = [
    { name: "Project Alpha", progress: 65, color: "bg-emerald-400" },
    { name: "Project Beta", progress: 30, color: "bg-blue-400" },
    { name: "Project Gamma", progress: 85, color: "bg-purple-400" },
  ];

  const upcomingEvents = [
    { title: "Mentor Call", time: "10:00 AM", mentor: "Alex Johnson" },
    { title: "Demo Day", time: "2:30 PM", mentor: "Build Lane Team" },
  ];

  return (
    <div className="space-y-6">
      {/* Header with greeting and stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-white">Growth Journey</h2>
          <p className="text-white/60 mt-1">
            Welcome back, <span className="text-white font-medium">{session?.user?.name}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full">
          <Rocket className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Level 3 Builder</span>
        </div>
      </motion.div>

      {/* Stats Cards with animated progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { 
            title: "Active Projects", 
            value: "3", 
            icon: <Code size={20} className="text-emerald-400" />,
            trend: "↑ 1 from last week",
            color: "bg-emerald-400/10"
          },
          { 
            title: "Upcoming Mentorship", 
            value: "2", 
            icon: <Users size={20} className="text-blue-400" />,
            trend: "1 tomorrow",
            color: "bg-blue-400/10"
          },
          { 
            title: "Pending Tasks", 
            value: "5", 
            icon: <ClipboardList size={20} className="text-purple-400" />,
            trend: "3 high priority",
            color: "bg-purple-400/10"
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${item.color} p-4 rounded-xl border border-white/5 backdrop-blur-sm`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-sm font-medium">{item.title}</p>
                <p className="text-3xl font-bold mt-1">{item.value}</p>
                <p className="text-xs text-white/50 mt-1.5">{item.trend}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 backdrop-blur-sm">
                {item.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Progress */}
        <motion.div 
          className="bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm lg:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Project Progress
            </h3>
            <button className="text-xs flex items-center gap-1 text-white/60 hover:text-white transition">
              View all <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-5">
            {projectProgress.map((project, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{project.name}</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className={`h-full rounded-full ${project.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div 
          className="bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-white/60 mt-1">{event.time} • with {event.mentor}</p>
                </div>
              </div>
            ))}
            <button className="w-full flex items-center justify-center gap-2 text-sm mt-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg transition">
              <Plus className="w-4 h-4" />
              Add Event
            </button>
          </div>
        </motion.div>

        {/* Quick Metrics */}
        <motion.div 
          className="bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-emerald-400" />
            Weekly Metrics
          </h3>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">Tasks Completed</span>
              <span className="font-medium text-emerald-400">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">Mentor Sessions</span>
              <span className="font-medium text-blue-400">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">Code Commits</span>
              <span className="font-medium text-purple-400">47</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">Deck Iterations</span>
              <span className="font-medium text-amber-400">5</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm lg:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: <Plus className="w-5 h-5" />, label: "Add Task" },
              { icon: <Users className="w-5 h-5" />, label: "Schedule Mentor" },
              { icon: <FileText className="w-5 h-5" />, label: "Update Deck" },
              { icon: <Share2 className="w-5 h-5" />, label: "Share Project" },
            ].map((action, i) => (
              <motion.button 
                key={i}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition"
              >
                <div className="p-2 bg-white/10 rounded-full">
                  {action.icon}
                </div>
                <span className="text-sm">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}