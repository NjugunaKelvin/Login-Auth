import { Code, FileText, Users, ClipboardList, Plus, MessageSquare, Settings, BarChart2, Clock, CheckCircle, AlertCircle, Circle } from "lucide-react";
import { motion } from "framer-motion";

export default function BuildStudio() {
  const project = {
    name: "Nexus Marketplace",
    description: "Decentralized e-commerce platform for digital creators",
    lastUpdated: "2 hours ago",
    progress: 65,
    status: "In Development",
    team: [
      { name: "Alex Johnson", role: "Lead Developer" },
      { name: "Sam Lee", role: "UI/UX Designer" },
      { name: "Taylor Smith", role: "Product Manager" },
      { name: "Jordan Chen", role: "Backend Engineer" }
    ]
  };

  const mvpComponents = [
    { name: "Product Listing", status: "completed", assigned: "Alex" },
    { name: "Shopping Cart", status: "completed", assigned: "Alex" },
    { name: "Checkout System", status: "in-progress", assigned: "Jordan" },
    { name: "User Dashboard", status: "in-progress", assigned: "Sam" },
    { name: "Admin Panel", status: "pending", assigned: "Taylor" },
    { name: "Search Functionality", status: "pending", assigned: "" }
  ];

  const devLogs = [
    { action: "Integrated Stripe payment gateway", date: "2 hours ago", type: "backend" },
    { action: "Fixed cart quantity calculation bug", date: "5 hours ago", type: "frontend" },
    { action: "Updated product schema for digital goods", date: "1 day ago", type: "database" },
    { action: "Implemented dark mode toggle", date: "2 days ago", type: "frontend" },
    { action: "Optimized image loading performance", date: "3 days ago", type: "performance" }
  ];

  const metrics = [
    { name: "Completion", value: "65%", change: "+12%", positive: true },
    { name: "Velocity", value: "18 pts", change: "-3%", positive: false },
    { name: "Tasks Done", value: "27/42", change: "+5", positive: true }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-black text-white min-h-screen">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="text-white/60">{project.description}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition">
              <FileText size={16} />
              <span>View Deck</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              <Users size={16} />
              <span>Share</span>
            </button>
          </div>
        </motion.div>

        {/* Project Metrics */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-white/60">{metric.name}</p>
                  <p className="text-2xl font-bold mt-1">{metric.value}</p>
                </div>
                <BarChart2 size={20} className="text-white/30" />
              </div>
              <p className={`text-sm mt-2 ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change} {metric.positive ? '↑' : '↓'}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* MVP Components */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">MVP Components</h3>
                <button className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  <Plus size={16} /> Add Component
                </button>
              </div>
              <div className="space-y-3">
                {mvpComponents.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === "completed" ? "bg-green-500" : 
                        item.status === "in-progress" ? "bg-yellow-500" : "bg-gray-500"
                      }`} />
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.assigned && (
                        <span className="text-xs bg-white/10 px-2 py-1 rounded">
                          {item.assigned}
                        </span>
                      )}
                      <span className="text-xs text-white/50 capitalize">
                        {item.status.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Development Log */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Development Log</h3>
                <button className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  <Plus size={16} /> Add Entry
                </button>
              </div>
              <div className="space-y-4">
                {devLogs.map((log, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      log.type === "frontend" ? "bg-blue-500/10 text-blue-400" :
                      log.type === "backend" ? "bg-green-500/10 text-green-400" :
                      log.type === "database" ? "bg-purple-500/10 text-purple-400" :
                      "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      <Code size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{log.action}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-white/40 flex items-center gap-1">
                          <Clock size={12} /> {log.date}
                        </span>
                        <span className="text-xs text-white/40 capitalize">
                          {log.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10"
            >
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition">
                  <ClipboardList size={18} className="text-blue-400" />
                  <span>Add New Task</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition">
                  <MessageSquare size={18} className="text-green-400" />
                  <span>Request Feedback</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition">
                  <Settings size={18} className="text-purple-400" />
                  <span>Project Settings</span>
                </button>
              </div>
            </motion.div>

            {/* Team Members */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Team Members</h3>
                <button className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  <Plus size={16} /> Invite
                </button>
              </div>
              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-white/60">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10"
            >
              <h3 className="font-bold text-lg mb-4">Project Status</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Completion</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">In Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-white/60" />
                  <span className="text-sm text-white/60">Last updated {project.lastUpdated}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}