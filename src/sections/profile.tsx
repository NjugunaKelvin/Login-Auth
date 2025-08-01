/* eslint-disable @typescript-eslint/no-explicit-any */
import { User, Mail, Settings } from "lucide-react";

export default function Profile({ session }: { session: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-4">
                {session?.user?.name?.charAt(0)}
              </div>
              <h3 className="text-xl font-medium">{session?.user?.name}</h3>
              <p className="text-white/60 text-sm mt-1">Developer & Founder</p>
              
              <div className="mt-6 w-full space-y-3">
                <button className="w-full flex items-center space-x-2 text-sm p-2 hover:bg-white/5 rounded-lg">
                  <User size={16} />
                  <span>Edit Profile</span>
                </button>
                <button className="w-full flex items-center space-x-2 text-sm p-2 hover:bg-white/5 rounded-lg">
                  <Mail size={16} />
                  <span>Contact Info</span>
                </button>
                <button className="w-full flex items-center space-x-2 text-sm p-2 hover:bg-white/5 rounded-lg">
                  <Settings size={16} />
                  <span>Account Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'UI/UX', 'Product Management', 'Growth Hacking'].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <div className="space-y-4">
              {['E-commerce Platform', 'AI Content Tool', 'Community App'].map((project, i) => (
                <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-medium">{project}</h4>
                  <p className="text-sm text-white/60 mt-1">Current phase: {['Development', 'Beta Testing', 'Launch'][i]}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded">
                      View
                    </button>
                    <button className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded">
                      Pitch Deck
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}