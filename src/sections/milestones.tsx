/* eslint-disable react/no-unescaped-entities */
import { Calendar, Check, Plus, Award, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

export default function Milestones() {
  type MilestoneStatus = "completed" | "upcoming" | "delayed";

  interface Milestone {
    id: number;
    date: string;
    title: string;
    description: string;
    status: MilestoneStatus;
    icon: JSX.Element;
    team?: string[];
    metrics?: { label: string; value: string }[];
  }

  const milestones: Milestone[] = [
    {
      id: 1,
      date: "June 2023",
      title: "First MVP Completed",
      description: "Launched initial version with core e-commerce functionality",
      status: "completed",
      icon: <Check size={20} className="text-green-400" />,
      team: ["Alex", "Sam"],
      metrics: [
        { label: "Features", value: "12" },
        { label: "Sprints", value: "6" }
      ]
    },
    {
      id: 2,
      date: "August 2023",
      title: "First 100 Users",
      description: "Reached milestone of 100 active daily users",
      status: "completed",
      icon: <Users size={20} className="text-blue-400" />,
      team: ["Taylor", "Jordan"],
      metrics: [
        { label: "Signups", value: "143" },
        { label: "Retention", value: "68%" }
      ]
    },
    {
      id: 3,
      date: "October 2023",
      title: "Seed Funding Round",
      description: "Closed $500K seed investment from 3 angels",
      status: "completed",
      icon: <TrendingUp size={20} className="text-purple-400" />,
      team: ["Alex", "Taylor"],
      metrics: [
        { label: "Amount", value: "$500K" },
        { label: "Valuation", value: "$5M" }
      ]
    },
    {
      id: 4,
      date: "December 2023",
      title: "Product Hunt Launch",
      description: "Planned featured launch on Product Hunt",
      status: "upcoming",
      icon: <Zap size={20} className="text-yellow-400" />,
      team: ["Sam", "Jordan"],
      metrics: [
        { label: "Target", value: "Top 5" },
        { label: "Prep Weeks", value: "3" }
      ]
    }
  ];

  const statusColors: Record<MilestoneStatus, string> = {
    completed: "bg-green-500/10 text-green-400",
    upcoming: "bg-yellow-500/10 text-yellow-400",
    delayed: "bg-red-500/10 text-red-400"
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
            <Award size={24} /> Milestones
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            Track your product's journey and key achievements
          </motion.p>
        </div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          <Plus size={18} />
          <span>Add Milestone</span>
        </motion.button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-10 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent"></div>
        
        <div className="space-y-10">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="relative pl-16 md:pl-20"
            >
              {/* Date marker */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                <Calendar size={16} className="text-blue-400" />
              </div>

              {/* Status dot */}
              <div className={`absolute left-8 md:left-10 top-4 -ml-1.5 w-3 h-3 rounded-full ${
                milestone.status === "completed" ? "bg-green-500" :
                milestone.status === "upcoming" ? "bg-yellow-500" :
                "bg-red-500"
              }`}></div>

              {/* Milestone card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className={`bg-white/5 p-5 rounded-xl border ${
                  milestone.status === "completed" ? "border-white/10" :
                  milestone.status === "upcoming" ? "border-yellow-500/30" :
                  "border-red-500/30"
                } hover:border-white/30 transition`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${statusColors[milestone.status]}`}>
                        {milestone.icon}
                      </div>
                      <div>
                        <p className="text-sm text-blue-400">{milestone.date}</p>
                        <h3 className="text-lg font-bold mt-0.5">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/80 mt-3">{milestone.description}</p>
                    
                    {/* Team */}
                    {milestone.team && (
                      <div className="flex items-center gap-2 mt-4">
                        <Users size={16} className="text-white/40" />
                        <div className="flex -space-x-2">
                          {milestone.team.map((member, i) => (
                            <div 
                              key={i} 
                              className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs"
                            >
                              {member.charAt(0)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Metrics */}
                  {milestone.metrics && (
                    <div className="grid grid-cols-2 gap-3 min-w-[180px]">
                      {milestone.metrics.map((metric, i) => (
                        <div key={i} className="bg-white/5 p-2 rounded-lg text-center">
                          <p className="text-xs text-white/60">{metric.label}</p>
                          <p className="font-bold">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Status badge */}
                <div className={`mt-4 inline-block px-3 py-1 rounded-full text-xs ${
                  milestone.status === "completed" ? "bg-green-500/10 text-green-400" :
                  milestone.status === "upcoming" ? "bg-yellow-500/10 text-yellow-400" :
                  "bg-red-500/10 text-red-400"
                }`}>
                  {milestone.status === "completed" ? "Completed" : 
                   milestone.status === "upcoming" ? "Upcoming" : "Delayed"}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Add new milestone prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative pl-16 md:pl-20 mt-10"
        >
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 border-dashed">
            <Plus size={16} className="text-white/40" />
          </div>
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 border-dashed hover:border-white/30 transition cursor-pointer">
            <h3 className="font-medium">Add Next Milestone</h3>
            <p className="text-sm text-white/60 mt-1">What's your next big goal?</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}