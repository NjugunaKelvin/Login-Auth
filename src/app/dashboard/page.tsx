/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Mountain,
  Brain,
  Archive,
  Settings,
  TrendingUp,
  Flag,
  Bell,
  HelpCircle,
  Search,
  Calendar,
  MessageSquare,
  FileText,
  Code,
  Users,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white/50"></div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white">Dashboard</h2>
              <p className="text-white/60 mt-1">
                Welcome back, {session?.user?.name}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Active Projects", value: "5", icon: <BookOpen size={18} /> },
                { title: "Tasks Completed", value: "24", icon: <Target size={18} /> },
                { title: "Upcoming Deadlines", value: "3", icon: <Calendar size={18} /> },
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
          </div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-white">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-white/60">Content will appear here</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Primary Sidebar */}
      <motion.div
        initial={{ width: 72 }}
        animate={{ width: sidebarOpen ? 240 : 72 }}
        onMouseEnter={() => setSidebarOpen(true)}
        onMouseLeave={() => setSidebarOpen(false)}
        className="bg-black border-r border-white/10 h-full z-20 fixed"
      >
        <div className="p-4 flex items-center justify-center border-b border-white/10 h-16">
          {sidebarOpen ? (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold"
            >
              My Dev Journey
            </motion.h1>
          ) : (
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold">
              Dev
            </div>
          )}
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            {[
                { id: "dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
                { id: "projects", icon: <Code size={20} />, label: "My Projects" },
                { id: "learning", icon: <BookOpen size={20} />, label: "Continue Learning" },
                { id: "resume", icon: <FileText size={20} />, label: "Resume Builder" },
                { id: "growth", icon: <TrendingUp size={20} />, label: "Growth Journey" },
                { id: "goals", icon: <Flag size={20} />, label: "Goals" },
                { id: "skills tracker", icon: <Brain size={20} />, label: "Skill Tracker" },
                { id: "milestones", icon: <Mountain size={20} />, label: "Milestones" },
                { id: "resources", icon: <Archive size={20} />, label: "Resources" },
                { id: "settings", icon: <Settings size={20} />, label: "Settings" },

            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-3 rounded-lg transition ${
                    activeTab === item.id
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white/90"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-3 text-sm"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Main Page */}
      <div
        className={`flex-1 flex flex-col overflow-hidden ${
          sidebarOpen ? "ml-[240px]" : "ml-[72px]"
        } transition-all duration-300`}
      >
        {/* Top Navigation */}
        <header className="bg-black border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/5 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 w-64"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white/60 hover:text-white transition relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-white/60 hover:text-white transition">
                <MessageSquare size={18} />
              </button>
              <button className="p-2 text-white/60 hover:text-white transition">
                <HelpCircle size={18} />
              </button>
              
              <div className="h-8 w-px bg-white/20"></div>
              
              <button 
                onClick={() => signOut()}
                className="p-2 text-white/60 hover:text-white transition flex items-center space-x-1"
                title="Sign out"
              >
                <LogOut size={18} />
                <span className="text-sm">Sign out</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  {session?.user?.name?.charAt(0)}
                </div>
                <span className="text-sm font-medium">{session?.user?.name}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Secondary Sidebar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: secondarySidebarOpen ? 200 : 0 }}
        className="bg-black border-l border-white/10 h-full fixed right-0 overflow-hidden"
      >
        <div className="p-4 border-b border-white/10 h-16 flex items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Activity</h3>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="text-sm text-white/60">
              <p>Recent activity item #{item}</p>
              <p className="text-xs text-white/40 mt-1">2 hours ago</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}