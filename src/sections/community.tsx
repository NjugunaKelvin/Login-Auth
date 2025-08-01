/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle } from "lucide-react";

export default function Community({ session }: { session: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/5 p-5 rounded-lg border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                {session?.user?.name?.charAt(0)}
              </div>
              <input 
                type="text" 
                placeholder="Start a discussion..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20">
                Question
              </button>
              <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20">
                Showcase
              </button>
              <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20">
                Feedback
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white/5 p-5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    U
                  </div>
                  <div>
                    <p className="font-medium">User {post}</p>
                    <p className="text-xs text-white/40">2{post} hours ago</p>
                  </div>
                </div>
                <p className="mt-3">This is a sample community post about a challenge I'm facing with my project. Any advice would be appreciated!</p>
                <div className="flex space-x-4 mt-3 text-sm text-white/60">
                  <button className="flex items-center space-x-1 hover:text-white">
                    <MessageCircle size={14} />
                    <span>5 Comments</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <span>12 Likes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h3 className="font-medium mb-3">Top Contributors</h3>
            <div className="space-y-3">
              {['Alex J.', 'Sam L.', 'Taylor S.', 'Jordan M.'].map((contributor, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    {contributor.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm">{contributor}</p>
                    <p className="text-xs text-white/40">{i+2}0 posts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h3 className="font-medium mb-3">Recent Demos</h3>
            <div className="space-y-3">
              {['E-commerce v2', 'AI Tool Prototype', 'Mobile App Beta'].map((demo, i) => (
                <div key={i} className="text-sm hover:text-white transition cursor-pointer">
                  {demo} <span className="text-white/40 text-xs">by User {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}