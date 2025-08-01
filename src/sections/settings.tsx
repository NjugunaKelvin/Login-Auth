/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SettingsPage({ session }: { session: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h3 className="font-medium mb-4">Account</h3>
            <nav className="space-y-1">
              {['Profile', 'Security', 'Notifications', 'Preferences', 'Billing'].map((item, i) => (
                <button 
                  key={i}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-6">Profile Settings</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-white/60 mb-1">Name</label>
                <input 
                  type="text" 
                  defaultValue={session?.user?.name || ''}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1">Email</label>
                <input 
                  type="email" 
                  defaultValue="user@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1">Bio</label>
                <textarea 
                  rows={3}
                  defaultValue="Founder and developer working on innovative projects."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
                ></textarea>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}