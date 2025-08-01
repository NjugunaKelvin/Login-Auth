/* eslint-disable react/no-unescaped-entities */
import { ClipboardList, Plus, Flag, Calendar, Check, List, User, Frown, Smile } from "lucide-react";
import { motion } from "framer-motion";

export default function Tasks() {
  type Priority = keyof typeof priorityColors;

  type Task = {
    id: number;
    title: string;
    project: string;
    priority: Priority;
    dueDate: string;
    assignedTo: string;
    completed: boolean;
  };

  const tasks: {
    pending: Task[];
    completed: Task[];
  } = {
    pending: [
      {
        id: 1,
        title: "Update pitch deck with latest metrics",
        project: "Nexus Marketplace",
        priority: "high",
        dueDate: "2023-11-15",
        assignedTo: "me",
        completed: false
      },
      {
        id: 2,
        title: "Implement Stripe payment gateway",
        project: "Nexus Marketplace",
        priority: "medium",
        dueDate: "2023-11-16",
        assignedTo: "Jordan",
        completed: false
      },
      {
        id: 3,
        title: "Conduct user testing session",
        project: "Lumina AI",
        priority: "low",
        dueDate: "2023-11-20",
        assignedTo: "Sam",
        completed: false
      }
    ],
    completed: [
      {
        id: 4,
        title: "Research competitor features",
        project: "Lumina AI",
        priority: "medium",
        dueDate: "2023-11-10",
        assignedTo: "me",
        completed: true
      },
      {
        id: 5,
        title: "Setup analytics dashboard",
        project: "Hive Connect",
        priority: "high",
        dueDate: "2023-11-08",
        assignedTo: "Alex",
        completed: true
      }
    ]
  };

  const priorityColors = {
    high: "red",
    medium: "yellow",
    low: "blue"
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold flex items-center gap-2"
          >
            <ClipboardList size={24} /> Tasks
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            Organize and track your work
          </motion.p>
        </div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          <Plus size={18} />
          <span>New Task</span>
        </motion.button>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-6"
      >
        <button className="px-3 py-1 bg-blue-600 rounded-lg text-sm flex items-center gap-1">
          <List size={14} /> All Tasks
        </button>
        <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center gap-1">
          <User size={14} /> Assigned to Me
        </button>
        <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center gap-1">
          <Flag size={14} /> High Priority
        </button>
        <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center gap-1">
          <Calendar size={14} /> Due This Week
        </button>
      </motion.div>

      {/* Tasks Board */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 p-5 rounded-xl border border-white/10"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Pending Tasks</h2>
            <span className="text-sm bg-white/10 px-2 py-1 rounded-full">
              {tasks.pending.length} items
            </span>
          </div>

          {tasks.pending.length > 0 ? (
            <div className="space-y-3">
              {tasks.pending.map((task) => (
                <motion.div
                  key={task.id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition"
                >
                  <div className="flex items-start gap-3">
                    <button className={`mt-0.5 w-5 h-5 rounded border ${
                      task.completed ? 'bg-blue-500 border-blue-500' : 'border-white/30'
                    } flex items-center justify-center transition`}>
                      {task.completed && <Check size={14} className="text-white" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className={`font-medium ${task.completed ? 'line-through text-white/40' : ''}`}>
                          {task.title}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-${priorityColors[task.priority]}-500/10 text-${priorityColors[task.priority]}-400`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                          {task.project}
                        </span>
                        <span className="text-xs text-white/60 flex items-center gap-1">
                          <Calendar size={12} /> Due: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        {task.assignedTo === "me" ? (
                          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                            Me
                          </span>
                        ) : (
                          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                            {task.assignedTo}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Smile size={48} className="mx-auto text-white/30 mb-3" />
              <h3 className="font-medium mb-1">No pending tasks</h3>
              <p className="text-white/60">You're all caught up!</p>
            </div>
          )}
        </motion.div>

        {/* Completed Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 p-5 rounded-xl border border-white/10"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Completed</h2>
            <span className="text-sm bg-white/10 px-2 py-1 rounded-full">
              {tasks.completed.length} items
            </span>
          </div>

          {tasks.completed.length > 0 ? (
            <div className="space-y-3">
              {tasks.completed.map((task) => (
                <motion.div
                  key={task.id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition opacity-80 hover:opacity-100"
                >
                  <div className="flex items-start gap-3">
                    <button className={`mt-0.5 w-5 h-5 rounded border ${
                      task.completed ? 'bg-blue-500 border-blue-500' : 'border-white/30'
                    } flex items-center justify-center transition`}>
                      {task.completed && <Check size={14} className="text-white" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className={`font-medium ${task.completed ? 'line-through text-white/40' : ''}`}>
                          {task.title}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-${priorityColors[task.priority]}-500/10 text-${priorityColors[task.priority]}-400`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                          {task.project}
                        </span>
                        <span className="text-xs text-white/60 flex items-center gap-1">
                          <Calendar size={12} /> Completed: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        {task.assignedTo === "me" ? (
                          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                            Me
                          </span>
                        ) : (
                          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                            {task.assignedTo}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Frown size={48} className="mx-auto text-white/30 mb-3" />
              <h3 className="font-medium mb-1">No completed tasks yet</h3>
              <p className="text-white/60">Complete some tasks to see them here</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Quick Add Task (Floating Button) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition"
      >
        <Plus size={24} />
      </motion.button>
    </div>
  );
}