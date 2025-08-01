import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function MyProjects() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['E-commerce Platform', 'AI Content Tool', 'Community App'].map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-white/20 transition cursor-pointer"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Code size={18} />
              </div>
              <h3 className="font-medium">{project}</h3>
            </div>
            <div className="text-sm text-white/60 space-y-2">
              <p>Last updated: 2 days ago</p>
              <p>Tasks: 3 pending</p>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${(i+1)*30}%`}}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}