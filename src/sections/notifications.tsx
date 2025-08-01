export default function Notifications() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Notifications</h2>
      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        {[
          { type: 'task', title: 'New task assigned', description: 'Update pitch deck metrics', time: '10 min ago', read: false },
          { type: 'mentor', title: 'Mentor feedback', description: 'Alex reviewed your project', time: '2 hours ago', read: false },
          { type: 'pitch', title: 'Pitch viewed', description: 'Investor viewed your deck', time: '1 day ago', read: true },
          { type: 'community', title: 'New reply', description: 'Sam replied to your post', time: '2 days ago', read: true }
        ].map((notification, i) => (
          <div 
            key={i} 
            className={`p-4 border-b border-white/10 hover:bg-white/5 transition ${!notification.read ? 'bg-white/5' : ''}`}
          >
            <div className="flex items-start space-x-3">
              <div className={`mt-1 w-3 h-3 rounded-full ${!notification.read ? 'bg-blue-500' : 'bg-white/10'}`}></div>
              <div className="flex-1">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-white/60 mt-1">{notification.description}</p>
                <p className="text-xs text-white/40 mt-2">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}