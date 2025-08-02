/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, Heart, Zap, TrendingUp, Award, Rocket } from "lucide-react";

export default function Community({ session }: { session: any }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-black text-white">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Community Hub
          </h1>
          <p className="text-gray-400 mt-2">Connect, collaborate, and grow with fellow developers</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-900 rounded-lg text-white font-medium flex items-center 
            shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-gray-800 transition-all
            border border-gray-800 hover:border-gray-700">
            <Rocket className="w-4 h-4 mr-2" />
            New Post
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-900 p-5 rounded-xl 
            shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
            border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-xl
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.1)]">
                {session?.user?.name?.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-white">{session?.user?.name || "User"}</p>
                <p className="text-xs text-gray-400">Member since 2023</p>
              </div>
            </div>
            <div className="flex justify-between text-center mt-6">
              <div>
                <p className="text-white font-medium">24</p>
                <p className="text-xs text-gray-400">Posts</p>
              </div>
              <div>
                <p className="text-white font-medium">128</p>
                <p className="text-xs text-gray-400">Likes</p>
              </div>
              <div>
                <p className="text-white font-medium">12</p>
                <p className="text-xs text-gray-400">Replies</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl 
            shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
            border border-gray-800">
            <h3 className="font-medium text-white mb-4 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-gray-300" />
              Trending Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'NextJS', 'Tailwind', 'TypeScript', 'AI', 'Web3', 'Design'].map((tag, i) => (
                <span 
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer transition
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800
            shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.1)]">
                {session?.user?.name?.charAt(0)}
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="What's on your mind?"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-600 text-white placeholder-gray-500 min-h-[100px]
                  shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg hover:bg-gray-800 transition
                      shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                      border border-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-800 transition
                      shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                      border border-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700 transition
                    shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
                    border border-gray-700">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-gray-900 p-6 rounded-xl border border-gray-800 
                shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                hover:border-gray-700 transition group">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold
                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.1)]">
                    {post}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">User {post}</p>
                        <p className="text-xs text-gray-400">2{post} hours ago · <span className="text-gray-300">#React</span></p>
                      </div>
                      <button className="p-1 rounded-lg hover:bg-gray-800 transition opacity-0 group-hover:opacity-100
                        shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                        border border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                    <p className="mt-3 text-gray-300">
                      This is a sample community post about a challenge I'm facing with my project. Any advice would be appreciated! 
                      {post === 2 && " I'm particularly interested in performance optimization techniques for React applications."}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition">
                          <Heart size={16} />
                          <span className="text-sm">12</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition">
                          <MessageCircle size={16} />
                          <span className="text-sm">5</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition">
                          <Zap size={16} />
                          <span className="text-sm">3</span>
                        </button>
                      </div>
                      <button className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        View discussion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800
            shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <h3 className="font-medium text-white mb-4 flex items-center">
              <Award className="w-4 h-4 mr-2 text-gray-300" />
              Top Contributors
            </h3>
            <div className="space-y-4">
              {['Alex Johnson', 'Sam Lee', 'Taylor Smith', 'Jordan Miller'].map((contributor, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold
                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.1)]">
                    {contributor.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{contributor}</p>
                    <p className="text-xs text-gray-400">{i+2}0 posts · {i+5}0 likes</p>
                  </div>
                  {i === 0 && (
                    <div className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-gray-700">
                      #1
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-xs px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 transition text-center
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              View all contributors
            </button>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800
            shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <h3 className="font-medium text-white mb-4">Popular Discussions</h3>
            <div className="space-y-3">
              {[
                "Next.js 14 Performance Tips",
                "Tailwind vs CSS Modules",
                "AI Integration Patterns",
                "State Management in 2024"
              ].map((discussion, i) => (
                <div key={i} className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs mt-1
                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {i+1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-gray-300 transition cursor-pointer">
                      {discussion}
                    </p>
                    <p className="text-xs text-gray-400">{(i+3)*2} comments</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800
            shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <h3 className="font-medium text-white mb-4">Community Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-gray-700">
                <p className="text-2xl font-bold text-white">1,245</p>
                <p className="text-xs text-gray-400">Members</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-gray-700">
                <p className="text-2xl font-bold text-white">3,892</p>
                <p className="text-xs text-gray-400">Posts</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-gray-700">
                <p className="text-2xl font-bold text-white">12,456</p>
                <p className="text-xs text-gray-400">Comments</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-gray-700">
                <p className="text-2xl font-bold text-white">24</p>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}