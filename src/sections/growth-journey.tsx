/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Code, Users, ClipboardList } from "lucide-react";

export default function GrowthJourney({ session }: { session: any }) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white">Growth Journey</h2>
        <p className="text-white/60 mt-1">
          Welcome back, {session?.user?.name}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Active Projects", value: "3", icon: <Code size={18} /> },
          { title: "Upcoming Mentorship", value: "2", icon: <Users size={18} /> },
          { title: "Pending Tasks", value: "5", icon: <ClipboardList size={18} /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/60 text-sm">{item.title}</p>
                <p className="text-2xl font-bold mt-2">{item.value}</p>
              </div>
              <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {['Mentor feedback received', 'Project milestone completed', 'New task assigned'].map((item, i) => (
              <div key={i} className="text-sm text-white/80 border-b border-white/10 pb-3">
                {item}
                <p className="text-xs text-white/40 mt-1">Today</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Add Task', 'Schedule Mentor', 'Update Deck', 'Share Project'].map((action, i) => (
              <button key={i} className="bg-white/10 hover:bg-white/20 transition p-3 rounded-lg text-sm">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}