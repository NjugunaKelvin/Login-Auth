/* eslint-disable react/no-unescaped-entities */
import { FileText, Plus, Download, Share2, Image, Video, File, HelpCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function PitchDecks() {
  const decks = [
    {
      name: "Nexus Marketplace",
      version: "v2.1",
      description: "Decentralized e-commerce for digital creators",
      lastUpdated: "2 days ago",
      assets: {
        image: true,
        video: false,
        doc: true
      },
      status: "active"
    },
    {
      name: "Lumina AI",
      version: "v1.3",
      description: "AI writing assistant with multi-language support",
      lastUpdated: "1 week ago",
      assets: {
        image: true,
        video: true,
        doc: true
      },
      status: "active"
    },
    {
      name: "Hive Connect",
      version: "v0.8",
      description: "Community platform with advanced moderation",
      lastUpdated: "3 weeks ago",
      assets: {
        image: false,
        video: true,
        doc: false
      },
      status: "draft"
    }
  ];

  return (
    <div className="space-y-8 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Pitch Decks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            Create and manage your investor presentations
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <a 
            href="#guidelines" 
            className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            <HelpCircle size={16} />
            <span>Pitch Guidelines</span>
          </a>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            <Plus size={18} />
            <span>New Deck</span>
          </button>
        </motion.div>
      </div>

      {/* Guidelines Panel (initially hidden) */}
      <div id="guidelines" className="hidden bg-white/5 p-6 rounded-xl border border-white/10">
        <h3 className="font-bold text-lg mb-3">Pitch Deck Guidelines</h3>
        <ul className="space-y-2 text-sm list-disc pl-5 text-white/80">
          <li>Keep it concise (10-12 slides max)</li>
          <li>Clearly define the problem and solution</li>
          <li>Show market opportunity with data</li>
          <li>Explain your business model</li>
          <li>Highlight your team's expertise</li>
          <li>Include financial projections</li>
        </ul>
      </div>

      {/* Deck Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Add New Deck Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white/5 p-6 rounded-xl border-2 border-dashed border-white/20 hover:border-white/40 transition cursor-pointer flex flex-col items-center justify-center min-h-[200px]"
        >
          <Plus size={24} className="text-white/60 mb-2" />
          <p className="text-white/80">Create New Pitch Deck</p>
        </motion.div>

        {/* Existing Decks */}
        {decks.map((deck, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ y: -5 }}
            className={`bg-white/5 p-5 rounded-xl border ${deck.status === 'draft' ? 'border-yellow-500/30' : 'border-white/10'} hover:border-white/30 transition cursor-pointer`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {deck.name} 
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                    {deck.version}
                  </span>
                </h3>
                <p className="text-sm text-white/60">{deck.description}</p>
              </div>
              {deck.status === 'draft' && (
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                  Draft
                </span>
              )}
            </div>

            {/* Asset Icons */}
            <div className="flex gap-2 mb-4">
              {deck.assets.image && (
                <span className="p-2 bg-white/10 rounded-lg">
                  <Image size={16} className="text-blue-400" />
                </span>
              )}
              {deck.assets.video && (
                <span className="p-2 bg-white/10 rounded-lg">
                  <Video size={16} className="text-purple-400" />
                </span>
              )}
              {deck.assets.doc && (
                <span className="p-2 bg-white/10 rounded-lg">
                  <File size={16} className="text-green-400" />
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs text-white/40 flex items-center gap-1">
                <Clock size={12} />
                Updated {deck.lastUpdated}
              </p>
              
              <div className="flex gap-2">
                <button 
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Download logic
                  }}
                >
                  <Download size={16} />
                </button>
                <button 
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Share logic
                  }}
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {decks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 p-8 rounded-xl border border-white/10 text-center"
        >
          <FileText size={48} className="mx-auto text-white/30 mb-4" />
          <h3 className="text-xl font-medium mb-2">No Pitch Decks Yet</h3>
          <p className="text-white/60 mb-4">Create your first pitch deck to showcase your product</p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            Create First Deck
          </button>
        </motion.div>
      )}
    </div>
  );
}