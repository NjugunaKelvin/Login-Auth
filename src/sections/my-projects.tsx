import { motion } from "framer-motion";
import { Code, Rocket, TrendingUp, Users, FileText, ChevronRight, CircleDot, CheckCircle } from "lucide-react";

export default function MyProjects() {
  const projects = [
    {
      name: "Nexus Marketplace",
      type: "E-commerce Platform",
      description: "Next-gen decentralized marketplace for digital creators",
      progress: 65,
      status: "In Development",
      lastUpdated: "2 hours ago",
      tasks: 5,
      members: 3
    },
    {
      name: "Lumina AI",
      type: "Content Generation",
      description: "AI-powered writing assistant with multi-language support",
      progress: 42,
      status: "Prototyping",
      lastUpdated: "1 day ago",
      tasks: 8,
      members: 2
    },
    {
      name: "Hive Connect",
      type: "Community App",
      description: "Platform for niche communities with advanced moderation",
      progress: 28,
      status: "Planning",
      lastUpdated: "3 days ago",
      tasks: 12,
      members: 4
    },
    {
      name: "Flow Metrics",
      type: "Analytics Dashboard",
      description: "Real-time business analytics with customizable widgets",
      progress: 89,
      status: "Beta Testing",
      lastUpdated: "5 hours ago",
      tasks: 2,
      members: 5
    }
  ];

  const recentActivity = [
    { project: "Nexus Marketplace", action: "API integration completed", time: "45m ago" },
    { project: "Lumina AI", action: "New design mockups added", time: "2h ago" },
    { project: "Flow Metrics", action: "Beta feedback received", time: "4h ago" },
    { project: "Hive Connect", action: "User research started", time: "1d ago" }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen p-6 bg-black text-white">
      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Projects</h1>
            <p className="text-white/60">Track and manage your active builds</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition">
            + New Project
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Code size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-blue-400 transition">{project.name}</h3>
                    <p className="text-sm text-white/60">{project.type}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Beta Testing" ? "bg-green-900/50 text-green-400" :
                  project.status === "In Development" ? "bg-blue-900/50 text-blue-400" :
                  project.status === "Prototyping" ? "bg-yellow-900/50 text-yellow-400" :
                  "bg-purple-900/50 text-purple-400"
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-white/80 mb-5">{project.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      project.progress > 70 ? "bg-green-500" :
                      project.progress > 40 ? "bg-blue-500" :
                      "bg-purple-500"
                    }`} 
                    style={{width: `${project.progress}%`}}
                  ></div>
                </div>

                <div className="flex justify-between pt-2 text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-white/60">
                      <Users size={14} className="mr-1" /> {project.members}
                    </span>
                    <span className="flex items-center text-white/60">
                      <FileText size={14} className="mr-1" /> {project.tasks}
                    </span>
                  </div>
                  <span className="text-white/60">Updated {project.lastUpdated}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="md:w-80 space-y-8">
        {/* Quick Stats */}
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h3 className="font-bold mb-4 flex items-center">
            <TrendingUp size={18} className="mr-2" /> Project Stats
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-white/60">Active Projects</p>
              <p className="text-2xl font-bold">4</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Tasks Completed</p>
              <p className="text-2xl font-bold">27/42</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Team Members</p>
              <p className="text-2xl font-bold">14</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h3 className="font-bold mb-4 flex items-center">
            <Rocket size={18} className="mr-2" /> Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start">
                <div className="bg-blue-500/10 p-1 rounded-full mr-3 mt-0.5">
                  <CircleDot size={12} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-white/60">{activity.project} · {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm text-blue-400 mt-3 flex items-center hover:text-blue-300">
            View all activity <ChevronRight size={16} />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h3 className="font-bold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-2 text-sm rounded-lg hover:bg-white/10 transition flex items-center">
              <CheckCircle size={16} className="mr-2 text-green-400" /> Mark a task complete
            </button>
            <button className="w-full text-left p-2 text-sm rounded-lg hover:bg-white/10 transition flex items-center">
              <Users size={16} className="mr-2 text-blue-400" /> Invite team member
            </button>
            <button className="w-full text-left p-2 text-sm rounded-lg hover:bg-white/10 transition flex items-center">
              <FileText size={16} className="mr-2 text-purple-400" /> Generate report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}