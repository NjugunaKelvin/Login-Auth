/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users } from "lucide-react";

export default function Mentorship() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Mentorship</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
          <div className="space-y-4">
            {[
              { mentor: 'Alex Johnson', date: 'Tomorrow, 2:00 PM', topic: 'Pitch Feedback' },
              { mentor: 'Sam Lee', date: 'Friday, 11:00 AM', topic: 'Technical Review' }
            ].map((session, i) => (
              <div key={i} className="border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    {session.mentor.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{session.mentor}</p>
                    <p className="text-sm text-white/60">{session.date}</p>
                  </div>
                </div>
                <p className="text-sm mt-2">Topic: {session.topic}</p>
                <button className="text-xs mt-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded">
                  Join Call
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Book New Session</h3>
          <div className="space-y-4">
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20">
              <option>Select Mentor</option>
              <option>Alex Johnson (Tech)</option>
              <option>Sam Lee (Product)</option>
              <option>Taylor Smith (Growth)</option>
            </select>
            <input 
              type="datetime-local" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
            />
            <textarea 
              placeholder="What would you like to discuss?"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 h-24"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}