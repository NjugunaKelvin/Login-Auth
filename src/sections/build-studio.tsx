import { Code, FileText, Users, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function BuildStudio() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white">Build Studio</h2>
        <p className="text-white/60">Workspace for your current project</p>
      </motion.div>

      <div className="bg-white/5 p-6 rounded-lg border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Code size={20} />
            </div>
            <div>
              <h3 className="font-medium">E-commerce Platform</h3>
              <p className="text-sm text-white/60">Last updated: 2 days ago</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center space-x-1">
              <FileText size={16} />
              <span>View Deck</span>
            </button>
            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm flex items-center space-x-1">
              <Users size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3">MVP Components</h4>
              <div className="space-y-3">
                {[
                  { name: "Product Listing", status: "completed" },
                  { name: "Shopping Cart", status: "in-progress" },
                  { name: "Checkout System", status: "pending" },
                  { name: "User Dashboard", status: "pending" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === "completed" ? "bg-green-500" : 
                        item.status === "in-progress" ? "bg-yellow-500" : "bg-gray-500"
                      }`}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="text-xs text-white/50 capitalize">{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Development Log</h4>
              <div className="space-y-4">
                {[
                  { action: "Added payment integration", date: "2 hours ago" },
                  { action: "Fixed cart quantity bug", date: "1 day ago" },
                  { action: "Updated product schema", date: "2 days ago" }
                ].map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-white/20 pl-3 py-1 text-sm"
                  >
                    <p>{log.action}</p>
                    <p className="text-xs text-white/40">{log.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-2 p-3 hover:bg-white/5 rounded-lg text-sm">
                  <ClipboardList size={16} />
                  <span>Add Task</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 hover:bg-white/5 rounded-lg text-sm">
                  <Users size={16} />
                  <span>Request Feedback</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 hover:bg-white/5 rounded-lg text-sm">
                  <FileText size={16} />
                  <span>Update Documentation</span>
                </button>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Team Members</h4>
              <div className="space-y-3">
                {["Alex Johnson", "Sam Lee", "Taylor Smith"].map((member, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      {member.charAt(0)}
                    </div>
                    <span className="text-sm">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}