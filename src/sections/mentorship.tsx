import { Users, Calendar, Clock, Search, Video, Bookmark, Star, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function Mentorship() {
  const upcomingSessions = [
    {
      id: 1,
      mentor: {
        name: "Alex Johnson",
        role: "Technical Architect",
        expertise: ["React", "Node.js", "AWS"],
        rating: 4.8,
        avatar: "AJ"
      },
      date: "2023-11-15T14:00:00",
      duration: "45 min",
      topic: "Optimizing React performance",
      meetingLink: "#"
    },
    {
      id: 2,
      mentor: {
        name: "Sam Lee",
        role: "Product Lead",
        expertise: ["Product Strategy", "UX Research", "Go-to-Market"],
        rating: 4.6,
        avatar: "SL"
      },
      date: "2023-11-17T11:00:00",
      duration: "30 min",
      topic: "Pricing model feedback",
      meetingLink: "#"
    }
  ];

  const availableMentors = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Technical Architect",
      expertise: ["React", "Node.js", "AWS"],
      rating: 4.8,
      sessions: 142,
      avatar: "AJ",
      nextAvailability: "2023-11-16T10:00:00"
    },
    {
      id: 2,
      name: "Sam Lee",
      role: "Product Lead",
      expertise: ["Product Strategy", "UX Research", "Go-to-Market"],
      rating: 4.6,
      sessions: 98,
      avatar: "SL",
      nextAvailability: "2023-11-17T09:00:00"
    },
    {
      id: 3,
      name: "Taylor Smith",
      role: "Growth Marketer",
      expertise: ["Customer Acquisition", "Paid Ads", "SEO"],
      rating: 4.7,
      sessions: 87,
      avatar: "TS",
      nextAvailability: "2023-11-15T16:00:00"
    },
    {
      id: 4,
      name: "Jordan Chen",
      role: "Founder Coach",
      expertise: ["Fundraising", "Pitching", "Team Building"],
      rating: 4.9,
      sessions: 203,
      avatar: "JC",
      nextAvailability: "2023-11-18T14:00:00"
    }
  ];

  const pastSessions = [
    {
      id: 1,
      mentor: "Taylor Smith",
      date: "2023-11-05T13:00:00",
      topic: "Customer acquisition channels",
      rating: 5
    },
    {
      id: 2,
      mentor: "Jordan Chen",
      date: "2023-10-28T15:00:00",
      topic: "Investor pitch refinement",
      rating: 4
    }
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Mentorship
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            Connect with experienced mentors to accelerate your growth
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full md:w-64"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
          <input
            type="text"
            placeholder="Search mentors..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 p-5 rounded-xl border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl flex items-center gap-2">
                <Calendar size={20} /> Upcoming Sessions
              </h2>
              <button className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300">
                View all <ChevronRight size={16} />
              </button>
            </div>

            {upcomingSessions.length > 0 ? (
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center font-medium">
                          {session.mentor.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold">{session.mentor.name}</h3>
                          <p className="text-sm text-white/60">{session.mentor.role}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-sm">{session.mentor.rating}</span>
                            <span className="text-xs text-white/40 ml-2">{session.mentor.expertise.slice(0, 2).join(", ")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {new Date(session.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        </p>
                        <p className="text-sm text-white/60">
                          {new Date(session.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{session.topic}</p>
                        <p className="text-xs text-white/60 flex items-center gap-1 mt-1">
                          <Clock size={12} /> {session.duration}
                        </p>
                      </div>
                      <a
                        href={session.meetingLink}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm flex items-center gap-1"
                      >
                        <Video size={16} /> Join
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar size={48} className="mx-auto text-white/30 mb-3" />
                <h3 className="font-medium mb-1">No upcoming sessions</h3>
                <p className="text-white/60 mb-4">Book a session with one of our mentors</p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                  Browse Mentors
                </button>
              </div>
            )}
          </motion.div>

          {/* Available Mentors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 p-5 rounded-xl border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Available Mentors</h2>
              <div className="flex gap-2">
                <select className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs focus:outline-none">
                  <option>All Expertise</option>
                  <option>Technical</option>
                  <option>Product</option>
                  <option>Growth</option>
                  <option>Fundraising</option>
                </select>
                <select className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs focus:outline-none">
                  <option>Sort by</option>
                  <option>Rating</option>
                  <option>Availability</option>
                  <option>Sessions</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableMentors.map((mentor) => (
                <div key={mentor.id} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center font-medium">
                      {mentor.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{mentor.name}</h3>
                      <p className="text-sm text-white/60">{mentor.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs">{mentor.rating}</span>
                        <span className="text-xs text-white/40 ml-2">• {mentor.sessions} sessions</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {mentor.expertise.slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-xs text-white/60 flex items-center gap-1">
                      <Clock size={12} /> Next: {new Date(mentor.nextAvailability).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                    <button className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Book New Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 p-5 rounded-xl border border-white/10"
          >
            <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Plus size={20} /> Book New Session
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-white/60 mb-1 block">Select Mentor</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20">
                  <option>Choose a mentor...</option>
                  {availableMentors.map((mentor) => (
                    <option key={mentor.id} value={mentor.id}>
                      {mentor.name} ({mentor.role})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-1 block">Date & Time</label>
                <input 
                  type="datetime-local" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>

              <div>
                <label className="text-sm text-white/60 mb-1 block">Duration</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-1 block">Discussion Topics</label>
                <textarea 
                  placeholder="What would you like to discuss?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 h-24"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg mt-2">
                Confirm Booking
              </button>
            </div>
          </motion.div>

          {/* Past Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 p-5 rounded-xl border border-white/10"
          >
            <h2 className="font-bold text-xl mb-4">Past Sessions</h2>
            {pastSessions.length > 0 ? (
              <div className="space-y-3">
                {pastSessions.map((session) => (
                  <div key={session.id} className="border-b border-white/10 pb-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{session.mentor}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs">{session.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 mt-1">{session.topic}</p>
                    <p className="text-xs text-white/40 mt-1">
                      {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                ))}
                <button className="text-sm text-blue-400 hover:text-blue-300 mt-2 flex items-center gap-1">
                  View all history <ChevronRight size={14} />
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <Bookmark size={32} className="mx-auto text-white/30 mb-2" />
                <p className="text-white/60">No past sessions yet</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}